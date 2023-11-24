import React, { useState } from 'react'
import { type FieldValidation } from './protocols'
import {
  recursivelyComputeValidation,
  stateSchemaUpdateDeepComparison,
  objectIterator
} from './utils'

export type SchemaProjection<T, I> = {
  [key in keyof T]?: I
}

export interface CoffeelessValidator {
  field: any
  formState: {
    error: boolean
    formSubmitted: boolean
  }
}

interface CoffeFormProps<K, Z> {
  children: React.ReactNode
  /** Represents the schema to map through and validate */
  initialValues: any
  /** Allows entering validation rules to input fields according to the entity state schema */
  validationSchema: K | object
  /** Should only be used on forms where certain input validations are optional based on a condition. */
  skipSchemaValidation?: Z | object
}

interface ProviderProps<T> {
  validationState: T
  skipSchemaValidation: any
  /**
   * Sets the state of the Coffeeless validators which will be validated as the user types
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  /**
   * Used to validate form on submit
   * @param path is a string that represents the nested level path of validation.
   */
  validateFormOnSubmit: (path: string) => boolean
  formState: {
    error: boolean
    formSubmitted: boolean
  }
}

const initializer: ProviderProps<any> = {
  validationState: {
    any: []
  },
  skipSchemaValidation: {},
  handleOnChange: () => {},
  validateFormOnSubmit: (path: string) => false,
  formState: {
    error: false,
    formSubmitted: false
  }
}

const formContext = React.createContext<ProviderProps<any>>(initializer)

/**
 * @param initialValues is the state that you use in your react app. Represents the schema to map through and validate
 * @param validationSchema Allows entering validation rules to input fields according to the entity state schema
 * @param skipSchemaValidation Should only be used on forms where certain input validations are optional based on a condition.
 */
export function CoffeelessWrapper<K, Z = any>({
  children,
  initialValues,
  validationSchema,
  skipSchemaValidation
}: CoffeFormProps<K, Z>) {
  const [validationState, setValidationState] = useState<K | object>(validationSchema)
  const [formState, setFormState] = useState({
    error: false,
    formSubmitted: false
  })

  /**
   * Sets the state of the Coffeeless validators which will be validated as the user types
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const [validations, path] = objectIterator(validationState, e.target.name)
    const [deepChild, _] = objectIterator(initialValues, e.target.name)

    validations.map((validation: FieldValidation) =>
      validation.validate(deepChild, path)
    ) as Array<Error | null>

    setValidationState(validationState)
  }

  /**
   * Used to validate form on submit
   * @param path is a string that represents the nested level path of validation.
   */
  function validateFormOnSubmit(path: string): boolean {
    const [deepStateChild, _] = objectIterator(initialValues, path)
    const [deepValidationState, _2] = objectIterator(validationState, path)
    const [deepSkipSchemaValidation, _3] = objectIterator(skipSchemaValidation, path)

    setFormState(prev => ({
      ...prev,
      formSubmitted: false
    }))

    const errorState = { error: false }

    recursivelyComputeValidation(
      deepStateChild,
      deepValidationState,
      deepSkipSchemaValidation,
      errorState
    )

    if (errorState.error) {
      setValidationState(validationState)
      setFormState({
        formSubmitted: true,
        error: true
      })
    } else {
      setFormState(prev => ({
        ...prev,
        formSubmitted: true
      }))
    }

    return errorState.error
  }

  stateSchemaUpdateDeepComparison(
    JSON.parse(JSON.stringify(initialValues)),
    validationState,
    validationSchema
  )

  return (
    <formContext.Provider
      value={{
        validationState,
        skipSchemaValidation,
        handleOnChange,
        validateFormOnSubmit,
        formState
      }}
    >
      {children}
    </formContext.Provider>
  )
}

export const useCoffeelessHandler = () => {
  const { handleOnChange, validateFormOnSubmit } = React.useContext(formContext)

  return {
    handleOnChange,
    validateFormOnSubmit
  }
}

export const useCoffeelessValidator = (name: string | undefined = undefined) => {
  const { validationState, skipSchemaValidation, formState } = React.useContext(formContext)

  let copy: any[] = []
  let skipCopy: any[] = []

  if (name) {
    skipCopy = objectIterator(skipSchemaValidation, name)
    if (!skipCopy[0]) {
      copy = objectIterator(validationState, name)
    }
  }

  return {
    field: name && !skipCopy[0] && copy[0],
    formState
  }
}
