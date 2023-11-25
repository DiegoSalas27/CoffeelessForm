"use strict";
self["webpackHotUpdatecoffeeless_form"]("main",{

/***/ "./src/validator/index.tsx":
/*!*********************************!*\
  !*** ./src/validator/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoffeelessWrapper: () => (/* binding */ CoffeelessWrapper),
/* harmony export */   useCoffeelessHandler: () => (/* binding */ useCoffeelessHandler),
/* harmony export */   useCoffeelessValidator: () => (/* binding */ useCoffeelessValidator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/validator/utils/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
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
var formContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initializer);
/**
 * Wrapper Component that uses React Context to manipulate the state of a form
 * @param initialValues is the state that you use in your react app. Represents the schema to map through and validate
 * @param validationSchema Allows entering validation rules to input fields according to the entity state schema
 * @param skipSchemaValidation Should only be used on forms where certain input validations are optional based on a condition.
 */
function CoffeelessWrapper(_a) {
    var children = _a.children, initialValues = _a.initialValues, validationSchema = _a.validationSchema, skipSchemaValidation = _a.skipSchemaValidation;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(validationSchema), validationState = _b[0], setValidationState = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        error: false,
        formSubmitted: false
    }), formState = _c[0], setFormState = _c[1];
    function handleOnChange(e) {
        var _a = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(validationState, e.target.name), validations = _a[0], path = _a[1];
        var _b = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(initialValues, e.target.name), deepChild = _b[0], _ = _b[1];
        validations.map(function (validation) {
            return validation.validate(deepChild, path);
        });
        setValidationState(validationState);
    }
    function validateFormOnSubmit(path) {
        var _a = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(initialValues, path), deepStateChild = _a[0], _ = _a[1];
        var _b = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(validationState, path), deepValidationState = _b[0], _2 = _b[1];
        var _c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(skipSchemaValidation, path), deepSkipSchemaValidation = _c[0], _3 = _c[1];
        setFormState(function (prev) { return (__assign(__assign({}, prev), { formSubmitted: false })); });
        var errorState = { error: false };
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.recursivelyComputeValidation)(deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState);
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
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.stateSchemaUpdateDeepComparison)(JSON.parse(JSON.stringify(initialValues)), validationState, validationSchema);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formContext.Provider, { value: {
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
var useCoffeelessHandler = function () {
    var _a = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(formContext), handleOnChange = _a.handleOnChange, validateFormOnSubmit = _a.validateFormOnSubmit;
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
var useCoffeelessValidator = function (name) {
    if (name === void 0) { name = undefined; }
    var _a = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(formContext), validationState = _a.validationState, skipSchemaValidation = _a.skipSchemaValidation, formState = _a.formState;
    var copy = [];
    var skipCopy = [];
    if (name) {
        skipCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(skipSchemaValidation, name);
        if (!skipCopy[0]) {
            copy = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.objectIterator)(validationState, name);
        }
    }
    return {
        field: name && !skipCopy[0] && copy[0],
        formState: formState
    };
};


/***/ }),

/***/ "./src/validator/utils/index.ts":
/*!**************************************!*\
  !*** ./src/validator/utils/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   objectIterator: () => (/* binding */ objectIterator),
/* harmony export */   recursivelyComputeValidation: () => (/* binding */ recursivelyComputeValidation),
/* harmony export */   stateSchemaUpdateDeepComparison: () => (/* binding */ stateSchemaUpdateDeepComparison)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var recursivelyComputeValidation = function (deepStateChild, deepValidationState, deepSkipSchemaValidation, errorState) {
    var _loop_1 = function (key, value) {
        if (typeof deepStateChild[key] !== 'object') {
            if (!deepSkipSchemaValidation || !deepSkipSchemaValidation[key]) {
                var validationError = value.map(function (validation) {
                    return validation.validate(deepStateChild[key], key);
                }).some(function (err) { return err !== null; });
                errorState.error = !!(errorState.error || validationError);
            }
        }
        else {
            var skipValidation = void 0;
            if (deepSkipSchemaValidation) {
                skipValidation = deepSkipSchemaValidation[key];
            }
            recursivelyComputeValidation(deepStateChild[key], value, skipValidation, errorState);
        }
    };
    for (var _i = 0, _a = Object.entries(deepValidationState); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
};
var stateSchemaUpdateDeepComparison = function (initialValues, state, schema) {
    for (var _i = 0, _a = Object.entries(schema); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof initialValues[key] === 'object' &&
            typeof initialValues[key].length === 'number' &&
            state !== undefined &&
            schema !== undefined) { // arrays can be added dynamically, it's necessary to deeply map both objects to update the state
            state[key] = __spreadArray([], schema[key], true);
        }
        else {
            if (typeof initialValues[key] === 'object') {
                stateSchemaUpdateDeepComparison(initialValues[key], state[key], value);
            }
        }
    }
};
var objectIterator = function (state, path) {
    var copy = __assign({}, state);
    if (path === '')
        return [copy, ''];
    var updatePath = path.split('.');
    updatePath.forEach(function (path, idx) {
        if (idx <= updatePath.length - 1 && copy !== undefined) {
            copy = copy[path];
        }
    });
    return [copy, updatePath[updatePath.length - 1]];
};


/***/ }),

/***/ "./src/validator/validators/min-length/index.tsx":
/*!*******************************************************!*\
  !*** ./src/validator/validators/min-length/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinLengthValidation: () => (/* binding */ MinLengthValidation)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors */ "./src/validator/errors/index.ts");

var MinLengthValidation = /** @class */ (function () {
    function MinLengthValidation(minLength, error) {
        if (error === void 0) { error = null; }
        this.minLength = minLength;
        this.error = error;
    }
    MinLengthValidation.prototype.validate = function (inputValue, field) {
        if (inputValue.length < this.minLength) {
            this.error = new _errors__WEBPACK_IMPORTED_MODULE_0__.MinLengthFieldError(field, this.minLength);
        }
        else {
            this.error = null;
        }
        return this.error;
    };
    return MinLengthValidation;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e212f992c1c9c38e0414")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYzBjNDg2OWZmZGQ5ZDA1MDczMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ1I7QUFDZ0U7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixtQ0FBbUM7QUFDbkMsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwREFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsK0NBQVE7QUFDckIsYUFBYSwrQ0FBUTtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLHNEQUFjO0FBQy9CLGlCQUFpQixzREFBYztBQUMvQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBYztBQUMvQixpQkFBaUIsc0RBQWM7QUFDL0IsaUJBQWlCLHNEQUFjO0FBQy9CLHVDQUF1Qyw0QkFBNEIsV0FBVyxzQkFBc0IsS0FBSztBQUN6RywyQkFBMkI7QUFDM0IsUUFBUSxvRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMkNBQTJDLDRCQUE0QixXQUFXLHFCQUFxQixLQUFLO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQStCO0FBQ25DLFlBQVksc0RBQUkseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsYUFBYSx1REFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwyQkFBMkI7QUFDM0IsYUFBYSx1REFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFjO0FBQ2pDO0FBQ0EsbUJBQW1CLHNEQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQUksSUFBSSxTQUFJO0FBQ2pDLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QixzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxnQkFBZ0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFbUQ7QUFDbkQ7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDOEI7Ozs7Ozs7OztVQ2xCL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWVsZXNzLWZvcm0vLi9zcmMvdmFsaWRhdG9yL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb2ZmZWVsZXNzLWZvcm0vLi9zcmMvdmFsaWRhdG9yL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2NvZmZlZWxlc3MtZm9ybS8uL3NyYy92YWxpZGF0b3IvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb2ZmZWVsZXNzLWZvcm0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVjdXJzaXZlbHlDb21wdXRlVmFsaWRhdGlvbiwgc3RhdGVTY2hlbWFVcGRhdGVEZWVwQ29tcGFyaXNvbiwgb2JqZWN0SXRlcmF0b3IgfSBmcm9tICcuL3V0aWxzJztcbnZhciBpbml0aWFsaXplciA9IHtcbiAgICB2YWxpZGF0aW9uU3RhdGU6IHtcbiAgICAgICAgYW55OiBbXVxuICAgIH0sXG4gICAgc2tpcFNjaGVtYVZhbGlkYXRpb246IHt9LFxuICAgIGhhbmRsZU9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgdmFsaWRhdGVGb3JtT25TdWJtaXQ6IGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICBmb3JtU3RhdGU6IHtcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBmb3JtU3VibWl0dGVkOiBmYWxzZVxuICAgIH1cbn07XG52YXIgZm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGluaXRpYWxpemVyKTtcbi8qKlxuICogV3JhcHBlciBDb21wb25lbnQgdGhhdCB1c2VzIFJlYWN0IENvbnRleHQgdG8gbWFuaXB1bGF0ZSB0aGUgc3RhdGUgb2YgYSBmb3JtXG4gKiBAcGFyYW0gaW5pdGlhbFZhbHVlcyBpcyB0aGUgc3RhdGUgdGhhdCB5b3UgdXNlIGluIHlvdXIgcmVhY3QgYXBwLiBSZXByZXNlbnRzIHRoZSBzY2hlbWEgdG8gbWFwIHRocm91Z2ggYW5kIHZhbGlkYXRlXG4gKiBAcGFyYW0gdmFsaWRhdGlvblNjaGVtYSBBbGxvd3MgZW50ZXJpbmcgdmFsaWRhdGlvbiBydWxlcyB0byBpbnB1dCBmaWVsZHMgYWNjb3JkaW5nIHRvIHRoZSBlbnRpdHkgc3RhdGUgc2NoZW1hXG4gKiBAcGFyYW0gc2tpcFNjaGVtYVZhbGlkYXRpb24gU2hvdWxkIG9ubHkgYmUgdXNlZCBvbiBmb3JtcyB3aGVyZSBjZXJ0YWluIGlucHV0IHZhbGlkYXRpb25zIGFyZSBvcHRpb25hbCBiYXNlZCBvbiBhIGNvbmRpdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvZmZlZWxlc3NXcmFwcGVyKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGluaXRpYWxWYWx1ZXMgPSBfYS5pbml0aWFsVmFsdWVzLCB2YWxpZGF0aW9uU2NoZW1hID0gX2EudmFsaWRhdGlvblNjaGVtYSwgc2tpcFNjaGVtYVZhbGlkYXRpb24gPSBfYS5za2lwU2NoZW1hVmFsaWRhdGlvbjtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSh2YWxpZGF0aW9uU2NoZW1hKSwgdmFsaWRhdGlvblN0YXRlID0gX2JbMF0sIHNldFZhbGlkYXRpb25TdGF0ZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBmb3JtU3VibWl0dGVkOiBmYWxzZVxuICAgIH0pLCBmb3JtU3RhdGUgPSBfY1swXSwgc2V0Rm9ybVN0YXRlID0gX2NbMV07XG4gICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoZSkge1xuICAgICAgICB2YXIgX2EgPSBvYmplY3RJdGVyYXRvcih2YWxpZGF0aW9uU3RhdGUsIGUudGFyZ2V0Lm5hbWUpLCB2YWxpZGF0aW9ucyA9IF9hWzBdLCBwYXRoID0gX2FbMV07XG4gICAgICAgIHZhciBfYiA9IG9iamVjdEl0ZXJhdG9yKGluaXRpYWxWYWx1ZXMsIGUudGFyZ2V0Lm5hbWUpLCBkZWVwQ2hpbGQgPSBfYlswXSwgXyA9IF9iWzFdO1xuICAgICAgICB2YWxpZGF0aW9ucy5tYXAoZnVuY3Rpb24gKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uLnZhbGlkYXRlKGRlZXBDaGlsZCwgcGF0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRWYWxpZGF0aW9uU3RhdGUodmFsaWRhdGlvblN0YXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtT25TdWJtaXQocGF0aCkge1xuICAgICAgICB2YXIgX2EgPSBvYmplY3RJdGVyYXRvcihpbml0aWFsVmFsdWVzLCBwYXRoKSwgZGVlcFN0YXRlQ2hpbGQgPSBfYVswXSwgXyA9IF9hWzFdO1xuICAgICAgICB2YXIgX2IgPSBvYmplY3RJdGVyYXRvcih2YWxpZGF0aW9uU3RhdGUsIHBhdGgpLCBkZWVwVmFsaWRhdGlvblN0YXRlID0gX2JbMF0sIF8yID0gX2JbMV07XG4gICAgICAgIHZhciBfYyA9IG9iamVjdEl0ZXJhdG9yKHNraXBTY2hlbWFWYWxpZGF0aW9uLCBwYXRoKSwgZGVlcFNraXBTY2hlbWFWYWxpZGF0aW9uID0gX2NbMF0sIF8zID0gX2NbMV07XG4gICAgICAgIHNldEZvcm1TdGF0ZShmdW5jdGlvbiAocHJldikgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2KSwgeyBmb3JtU3VibWl0dGVkOiBmYWxzZSB9KSk7IH0pO1xuICAgICAgICB2YXIgZXJyb3JTdGF0ZSA9IHsgZXJyb3I6IGZhbHNlIH07XG4gICAgICAgIHJlY3Vyc2l2ZWx5Q29tcHV0ZVZhbGlkYXRpb24oZGVlcFN0YXRlQ2hpbGQsIGRlZXBWYWxpZGF0aW9uU3RhdGUsIGRlZXBTa2lwU2NoZW1hVmFsaWRhdGlvbiwgZXJyb3JTdGF0ZSk7XG4gICAgICAgIGlmIChlcnJvclN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICBzZXRWYWxpZGF0aW9uU3RhdGUodmFsaWRhdGlvblN0YXRlKTtcbiAgICAgICAgICAgIHNldEZvcm1TdGF0ZSh7XG4gICAgICAgICAgICAgICAgZm9ybVN1Ym1pdHRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoZnVuY3Rpb24gKHByZXYpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldiksIHsgZm9ybVN1Ym1pdHRlZDogdHJ1ZSB9KSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvclN0YXRlLmVycm9yO1xuICAgIH1cbiAgICBzdGF0ZVNjaGVtYVVwZGF0ZURlZXBDb21wYXJpc29uKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFZhbHVlcykpLCB2YWxpZGF0aW9uU3RhdGUsIHZhbGlkYXRpb25TY2hlbWEpO1xuICAgIHJldHVybiAoX2pzeChmb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgdmFsaWRhdGlvblN0YXRlOiB2YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgICBza2lwU2NoZW1hVmFsaWRhdGlvbjogc2tpcFNjaGVtYVZhbGlkYXRpb24sXG4gICAgICAgICAgICBoYW5kbGVPbkNoYW5nZTogaGFuZGxlT25DaGFuZ2UsXG4gICAgICAgICAgICB2YWxpZGF0ZUZvcm1PblN1Ym1pdDogdmFsaWRhdGVGb3JtT25TdWJtaXQsXG4gICAgICAgICAgICBmb3JtU3RhdGU6IGZvcm1TdGF0ZVxuICAgICAgICB9LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBQcm92aWRlcyB0aGUgaGFuZGxlT25DaGFuZ2UgYW5kIHZhbGlkYXRlRm9ybU9uU3VibWl0LiBoYW5kbGVPbkNoYW5nZSBTZXRzIHRoZSBzdGF0ZSBvZiB0aGVcbiAqIENvZmZlZWxlc3MgdmFsaWRhdG9ycyB3aGljaCB3aWxsIGJlIHZhbGlkYXRlZCBhcyB0aGUgdXNlciB0eXBlcy4gdmFsaWRhdGVGb3JtT25TdWJtaXQgaXMgdXNlZCB0byB2YWxpZGF0ZSBmb3JtIG9uIHN1Ym1pdC5cbiAqIFRoaXMgaG9vayBzaG91bGQgYmUgdXNlZCBpbnNpZGUgdGhlIENGb3JtIGFuZCBDSW5wdXQgdG8gcHJvdmlkZSBzdGF0ZSB2YWxpZGF0aW9uIG9uIHRoZSBmbHkgYW5kIG9uIHN1Ym1pc3Npb24uXG4gKiBAcmV0dXJucyBoYW5kbGVPbkNoYW5nZSwgdmFsaWRhdGVGb3JtT25TdWJtaXRcbiAqL1xuZXhwb3J0IHZhciB1c2VDb2ZmZWVsZXNzSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VDb250ZXh0KGZvcm1Db250ZXh0KSwgaGFuZGxlT25DaGFuZ2UgPSBfYS5oYW5kbGVPbkNoYW5nZSwgdmFsaWRhdGVGb3JtT25TdWJtaXQgPSBfYS52YWxpZGF0ZUZvcm1PblN1Ym1pdDtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVPbkNoYW5nZTogaGFuZGxlT25DaGFuZ2UsXG4gICAgICAgIHZhbGlkYXRlRm9ybU9uU3VibWl0OiB2YWxpZGF0ZUZvcm1PblN1Ym1pdFxuICAgIH07XG59O1xuLyoqXG4gKiBQcm92aWRlcyB0aGUgQ29udGV4dCBTdGF0ZSB3aGljaCBpcyBjb21wb3NlZCBvZiB0aGUgZm9ybVN0YXRlIHRoYXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHNldCB0aGUgc3RhdGUgb2YgdGhlIGZvcm1cbiAqIGFuZCB0aGUgZmllbGQgcHJvcGVydHksIHdoaWNoIGlzIHJldHJpZXZlZCBiYXNlZCBvbiB0aGUgbmFtZSBvZiB0aGUgZmllbGQgcmVxdWlyZWQgdG8gdmFsaWRhdGUuIFRoaXMgaG9vayBzaG91bGQgYmVcbiAqIHVzZWQgaW4gdGhlIENJbnB1dCB0byB2YWxpZGF0ZSBpbnB1dCBzdGF0ZS5cbiAqIEBwYXJhbSBuYW1lIHN0cmluZyBwYXJhbWV0ZXIgdGhhdCB0ZWxscyB0aGUgY29mZmVlbGVzcyBpdGVyYXRvciB3aGVyZSB0byBsb29rIGZvciB2YWxpZGF0aW5nIG5lc3RlZCBzdGF0ZVxuICogQHJldHVybnMgZmllbGQgYW5kIGZvcm1TdGF0ZVxuICovXG5leHBvcnQgdmFyIHVzZUNvZmZlZWxlc3NWYWxpZGF0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IHVuZGVmaW5lZDsgfVxuICAgIHZhciBfYSA9IFJlYWN0LnVzZUNvbnRleHQoZm9ybUNvbnRleHQpLCB2YWxpZGF0aW9uU3RhdGUgPSBfYS52YWxpZGF0aW9uU3RhdGUsIHNraXBTY2hlbWFWYWxpZGF0aW9uID0gX2Euc2tpcFNjaGVtYVZhbGlkYXRpb24sIGZvcm1TdGF0ZSA9IF9hLmZvcm1TdGF0ZTtcbiAgICB2YXIgY29weSA9IFtdO1xuICAgIHZhciBza2lwQ29weSA9IFtdO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHNraXBDb3B5ID0gb2JqZWN0SXRlcmF0b3Ioc2tpcFNjaGVtYVZhbGlkYXRpb24sIG5hbWUpO1xuICAgICAgICBpZiAoIXNraXBDb3B5WzBdKSB7XG4gICAgICAgICAgICBjb3B5ID0gb2JqZWN0SXRlcmF0b3IodmFsaWRhdGlvblN0YXRlLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZDogbmFtZSAmJiAhc2tpcENvcHlbMF0gJiYgY29weVswXSxcbiAgICAgICAgZm9ybVN0YXRlOiBmb3JtU3RhdGVcbiAgICB9O1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5leHBvcnQgdmFyIHJlY3Vyc2l2ZWx5Q29tcHV0ZVZhbGlkYXRpb24gPSBmdW5jdGlvbiAoZGVlcFN0YXRlQ2hpbGQsIGRlZXBWYWxpZGF0aW9uU3RhdGUsIGRlZXBTa2lwU2NoZW1hVmFsaWRhdGlvbiwgZXJyb3JTdGF0ZSkge1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWVwU3RhdGVDaGlsZFtrZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCFkZWVwU2tpcFNjaGVtYVZhbGlkYXRpb24gfHwgIWRlZXBTa2lwU2NoZW1hVmFsaWRhdGlvbltrZXldKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25FcnJvciA9IHZhbHVlLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbi52YWxpZGF0ZShkZWVwU3RhdGVDaGlsZFtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKGVycikgeyByZXR1cm4gZXJyICE9PSBudWxsOyB9KTtcbiAgICAgICAgICAgICAgICBlcnJvclN0YXRlLmVycm9yID0gISEoZXJyb3JTdGF0ZS5lcnJvciB8fCB2YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNraXBWYWxpZGF0aW9uID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGRlZXBTa2lwU2NoZW1hVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gZGVlcFNraXBTY2hlbWFWYWxpZGF0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWN1cnNpdmVseUNvbXB1dGVWYWxpZGF0aW9uKGRlZXBTdGF0ZUNoaWxkW2tleV0sIHZhbHVlLCBza2lwVmFsaWRhdGlvbiwgZXJyb3JTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhkZWVwVmFsaWRhdGlvblN0YXRlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgX2xvb3BfMShrZXksIHZhbHVlKTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciBzdGF0ZVNjaGVtYVVwZGF0ZURlZXBDb21wYXJpc29uID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIHN0YXRlLCBzY2hlbWEpIHtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMoc2NoZW1hKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWVzW2tleV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICB0eXBlb2YgaW5pdGlhbFZhbHVlc1trZXldLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgIHN0YXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNjaGVtYSAhPT0gdW5kZWZpbmVkKSB7IC8vIGFycmF5cyBjYW4gYmUgYWRkZWQgZHluYW1pY2FsbHksIGl0J3MgbmVjZXNzYXJ5IHRvIGRlZXBseSBtYXAgYm90aCBvYmplY3RzIHRvIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlW2tleV0gPSBfX3NwcmVhZEFycmF5KFtdLCBzY2hlbWFba2V5XSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZXNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVNjaGVtYVVwZGF0ZURlZXBDb21wYXJpc29uKGluaXRpYWxWYWx1ZXNba2V5XSwgc3RhdGVba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgb2JqZWN0SXRlcmF0b3IgPSBmdW5jdGlvbiAoc3RhdGUsIHBhdGgpIHtcbiAgICB2YXIgY29weSA9IF9fYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgaWYgKHBhdGggPT09ICcnKVxuICAgICAgICByZXR1cm4gW2NvcHksICcnXTtcbiAgICB2YXIgdXBkYXRlUGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICB1cGRhdGVQYXRoLmZvckVhY2goZnVuY3Rpb24gKHBhdGgsIGlkeCkge1xuICAgICAgICBpZiAoaWR4IDw9IHVwZGF0ZVBhdGgubGVuZ3RoIC0gMSAmJiBjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvcHkgPSBjb3B5W3BhdGhdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb3B5LCB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV1dO1xufTtcbiIsImltcG9ydCB7IE1pbkxlbmd0aEZpZWxkRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xudmFyIE1pbkxlbmd0aFZhbGlkYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWluTGVuZ3RoVmFsaWRhdGlvbihtaW5MZW5ndGgsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciA9PT0gdm9pZCAwKSB7IGVycm9yID0gbnVsbDsgfVxuICAgICAgICB0aGlzLm1pbkxlbmd0aCA9IG1pbkxlbmd0aDtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgICBNaW5MZW5ndGhWYWxpZGF0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChpbnB1dFZhbHVlLCBmaWVsZCkge1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPCB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG5ldyBNaW5MZW5ndGhGaWVsZEVycm9yKGZpZWxkLCB0aGlzLm1pbkxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgICB9O1xuICAgIHJldHVybiBNaW5MZW5ndGhWYWxpZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1pbkxlbmd0aFZhbGlkYXRpb24gfTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUyMTJmOTkyYzFjOWMzOGUwNDE0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9