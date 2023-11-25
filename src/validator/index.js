var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import { recursivelyComputeValidation, stateSchemaUpdateDeepComparison, objectIterator } from './utils';
var initializer = {
    validationState: {
        any: []
    },
    skipSchemaValidation: {},
    handleOnChange: function () { },
    validateFormOnSubmit: function (path) { return false; },
    formState: {
        error: false,
        formSubmitted: false
    }
};
var formContext = React.createContext(initializer);
/**
 * Wrapper Component that uses React Context to manipulate the state of a form
 * @param initialValues is the state that you use in your react app. Represents the schema to map through and validate
 * @param validationSchema Allows entering validation rules to input fields according to the entity state schema
 * @param skipSchemaValidation Should only be used on forms where certain input validations are optional based on a condition.
 */
export function CoffeelessWrapper(_a) {
    var children = _a.children, initialValues = _a.initialValues, validationSchema = _a.validationSchema, skipSchemaValidation = _a.skipSchemaValidation;
    var _b = useState(validationSchema), validationState = _b[0], setValidationState = _b[1];
    var _c = useState({
        error: false,
        formSubmitted: false
    }), formState = _c[0], setFormState = _c[1];
    function handleOnChange(e) {
        var _a = objectIterator(validationState, e.target.name), validations = _a[0], path = _a[1];
        var _b = objectIterator(initialValues, e.target.name), deepChild = _b[0], _ = _b[1];
        validations.map(function (validation) {
            return validation.validate(deepChild, path);
        });
        setValidationState(validationState);
    }
    function validateFormOnSubmit(path) {
        var _a = objectIterator(initialValues, path), deepStateChild = _a[0], _ = _a[1];
        var _b = objectIterator(validationState, path), deepValidationState = _b[0], _2 = _b[1];
        var _c = objectIterator(skipSchemaValidation, path), deepSkipSchemaValidation = _c[0], _3 = _c[1];
        setFormState(function (prev) { return (__assign(__assign({}, prev), { formSubmitted: false })); });
        var errorState = { error: false };
        recursivelyComputeValidation(deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState);
        if (errorState.error) {
            setValidationState(validationState);
            setFormState({
                formSubmitted: true,
                error: true
            });
        }
        else {
            setFormState(function (prev) { return (__assign(__assign({}, prev), { formSubmitted: true })); });
        }
        return errorState.error;
    }
    stateSchemaUpdateDeepComparison(JSON.parse(JSON.stringify(initialValues)), validationState, validationSchema);
    return (_jsx(formContext.Provider, { value: {
            validationState: validationState,
            skipSchemaValidation: skipSchemaValidation,
            handleOnChange: handleOnChange,
            validateFormOnSubmit: validateFormOnSubmit,
            formState: formState
        }, children: children }));
}
/**
 * Provides the handleOnChange and validateFormOnSubmit. handleOnChange Sets the state of the
 * Coffeeless validators which will be validated as the user types. validateFormOnSubmit is used to validate form on submit.
 * This hook should be used inside the CForm and CInput to provide state validation on the fly and on submission.
 * @returns handleOnChange, validateFormOnSubmit
 */
export var useCoffeelessHandler = function () {
    var _a = React.useContext(formContext), handleOnChange = _a.handleOnChange, validateFormOnSubmit = _a.validateFormOnSubmit;
    return {
        handleOnChange: handleOnChange,
        validateFormOnSubmit: validateFormOnSubmit
    };
};
/**
 * Provides the Context State which is composed of the formState that is used internally to set the state of the form
 * and the field property, which is retrieved based on the name of the field required to validate. This hook should be
 * used in the CInput to validate input state.
 * @param name string parameter that tells the coffeeless iterator where to look for validating nested state
 * @returns field and formState
 */
export var useCoffeelessValidator = function (name) {
    if (name === void 0) { name = undefined; }
    var _a = React.useContext(formContext), validationState = _a.validationState, skipSchemaValidation = _a.skipSchemaValidation, formState = _a.formState;
    var copy = [];
    var skipCopy = [];
    if (name) {
        skipCopy = objectIterator(skipSchemaValidation, name);
        if (!skipCopy[0]) {
            copy = objectIterator(validationState, name);
        }
    }
    return {
        field: name && !skipCopy[0] && copy[0],
        formState: formState
    };
};
