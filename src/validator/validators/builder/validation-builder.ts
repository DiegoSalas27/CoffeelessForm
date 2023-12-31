import { FieldValidation } from '../../protocols'
import { Emailvalidation } from '../email'
import { MinLengthValidation } from '../min-length'
import { RequiredFieldValidation } from '../required-field'

/**
 * Builder class that implements the Builder pattern to add validation rules mean to be use for the validationSchema
 * of the CoffeelessWrapper
 */
export class ValidationBuilder {
  private constructor(private readonly validations: FieldValidation[]) {}

  /**
   * Initialized the validator array to add validation rules
   * @returns ValidationBuilder
   */
  static init(): ValidationBuilder {
    return new ValidationBuilder([])
  }

  /**
   * Sets a field as required
   * @returns ValidationBuilder
   */
  required(message?: string): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(message))
    return this
  }

  /**
   * Sets the minimum length of characters a field should contain
   * @param length number parameter. Represents minimum length of the input
   * @returns ValidationBuilder
   */
  min(length: number, message?: string): ValidationBuilder {
    this.validations.push(new MinLengthValidation(length, message))
    return this
  }

  /**
   * Verifies email being valid
   * @param message: optional message to display error text
   * @returns ValidationBuilder
   */
  email(message?: string): ValidationBuilder {
    this.validations.push(new Emailvalidation(message))
    return this
  }

  /**
   * Return all of the validations as an array to be used for the validationSchema
   * @returns FieldValidation array
   */
  build(): FieldValidation[] {
    return this.validations
  }
}
