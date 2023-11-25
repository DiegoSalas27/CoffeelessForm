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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useCoffeelessHandler } from '../../validator';
var Form = function (_a) {
    var children = _a.children, preValidate = _a.preValidate, handleSubmit = _a.handleSubmit, handleCancel = _a.handleCancel, submitText = _a.submitText, changeTab = _a.changeTab, _b = _a.tabs, tabs = _b === void 0 ? [] : _b, selectedTab = _a.selectedTab, formErrorMessage = _a.formErrorMessage, includeFormButtons = _a.includeFormButtons, errorClass = _a.errorClass, formWrapperClass = _a.formWrapperClass, _c = _a.displayInvalidForm, displayInvalidForm = _c === void 0 ? true : _c;
    var _d = useState(false), invalidForm = _d[0], setInvalidForm = _d[1];
    var validateFormOnSubmit = useCoffeelessHandler().validateFormOnSubmit;
    function handleSubmission(e) {
        e.preventDefault();
        var isFormInValid = false;
        if (preValidate) {
            isFormInValid = preValidate();
        }
        if (isFormInValid) {
            validateFormOnSubmit('');
        }
        else {
            isFormInValid = validateFormOnSubmit('');
        }
        if (!isFormInValid) {
            handleSubmit();
        }
        else {
            setInvalidForm(true);
        }
    }
    return (_jsxs("form", __assign({ onSubmit: handleSubmission }, { children: [tabs.length ? (_jsxs(_Fragment, { children: [_jsx("ul", __assign({ className: "nav nav-tabs" }, { children: tabs.map(function (tab, i) { return (_jsx("li", __assign({ className: "nav-item" }, { children: _jsx("a", __assign({ onClick: function (e) {
                                    changeTab(e, tab);
                                }, className: "nav-link ".concat(selectedTab === tab && 'active'), style: { cursor: 'pointer' } }, { children: tab })) }), tab)); }) })), _jsx("div", __assign({ className: "tab-content", style: { display: 'contents' } }, { children: _jsx("div", __assign({ className: formWrapperClass || 'row' }, { children: children })) }))] })) : (_jsx("div", __assign({ className: formWrapperClass || 'row' }, { children: children }))), invalidForm && displayInvalidForm && (_jsx("p", __assign({ className: errorClass || 'ml-1-error field-error' }, { children: formErrorMessage || 'Please fix the errors in the fields above' }))), includeFormButtons && (_jsxs("div", __assign({ className: "form-footer" }, { children: [_jsx("button", __assign({ type: "submit", className: "cofp-btn cofp-btn-primary" }, { children: submitText || 'Submit' })), _jsx("button", __assign({ onClick: handleCancel, className: "cofp-btn cofp-btn-light" }, { children: "Cancel" }))] })))] })));
};
export default Form;
