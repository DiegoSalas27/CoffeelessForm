import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import { recursivelyComputeValidation, stateSchemaUpdateDeepComparison, objectIterator } from './utils';
import '../css/main.css';
const initializer = {
    validationState: {
        any: []
    },
    skipSchemaValidation: {},
    handleOnChange: () => { },
    validateFormOnSubmit: (path) => false,
    formState: {
        error: false,
        formSubmitted: false
    }
};
const formContext = React.createContext(initializer);
/**
 * Wrapper Component that uses React Context to manipulate the state of a form
 * @param initialValues is the state that you use in your react app. Represents the schema to map through and validate
 * @param validationSchema Allows entering validation rules to input fields according to the entity state schema
 * @param skipSchemaValidation Should only be used on forms where certain input validations are optional based on a condition.
 */
export function CoffeelessWrapper({ children, initialValues, validationSchema, skipSchemaValidation }) {
    const [validationState, setValidationState] = useState(validationSchema);
    const [formState, setFormState] = useState({
        error: false,
        formSubmitted: false
    });
    function handleOnChange(e) {
        const [validations, path] = objectIterator(validationState, e.target.name);
        const [deepChild, _] = objectIterator(initialValues, e.target.name);
        validations.map((validation) => validation.validate(deepChild, path));
        setValidationState(validationState);
    }
    function validateFormOnSubmit(path) {
        const [deepStateChild, _] = objectIterator(initialValues, path);
        const [deepValidationState, _2] = objectIterator(validationState, path);
        const [deepSkipSchemaValidation, _3] = objectIterator(skipSchemaValidation, path);
        setFormState(prev => (Object.assign(Object.assign({}, prev), { formSubmitted: false })));
        const errorState = { error: false };
        recursivelyComputeValidation(deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState);
        if (errorState.error) {
            setValidationState(validationState);
            setFormState({
                formSubmitted: true,
                error: true
            });
        }
        else {
            setFormState(prev => (Object.assign(Object.assign({}, prev), { formSubmitted: true })));
        }
        return errorState.error;
    }
    stateSchemaUpdateDeepComparison(JSON.parse(JSON.stringify(initialValues)), validationState, validationSchema);
    return (_jsx(formContext.Provider, Object.assign({ value: {
            validationState,
            skipSchemaValidation,
            handleOnChange,
            validateFormOnSubmit,
            formState
        } }, { children: children })));
}
/**
 * Provides the handleOnChange and validateFormOnSubmit. handleOnChange Sets the state of the
 * Coffeeless validators which will be validated as the user types. validateFormOnSubmit is used to validate form on submit.
 * This hook should be used inside the CForm and CInput to provide state validation on the fly and on submission.
 * @returns handleOnChange, validateFormOnSubmit
 */
export const useCoffeelessHandler = () => {
    const { handleOnChange, validateFormOnSubmit } = React.useContext(formContext);
    return {
        handleOnChange,
        validateFormOnSubmit
    };
};
/**
 * Provides the Context State which is composed of the formState that is used internally to set the state of the form
 * and the field property, which is retrieved based on the name of the field required to validate. This hook should be
 * used in the CInput to validate input state.
 * @param name string parameter that tells the coffeeless iterator where to look for validating nested state
 * @returns field and formState
 */
export const useCoffeelessValidator = (name = undefined) => {
    const { validationState, skipSchemaValidation, formState } = React.useContext(formContext);
    let copy = [];
    let skipCopy = [];
    if (name) {
        skipCopy = objectIterator(skipSchemaValidation, name);
        if (!skipCopy[0]) {
            copy = objectIterator(validationState, name);
        }
    }
    return {
        field: name && !skipCopy[0] && copy[0],
        formState
    };
};
