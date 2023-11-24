import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useCoffeelessHandler } from '../../validator';
var Form = function (_a) {
    var children = _a.children, preValidate = _a.preValidate, handleSubmit = _a.handleSubmit, handleCancel = _a.handleCancel, submitText = _a.submitText, changeTab = _a.changeTab, _b = _a.tabs, tabs = _b === void 0 ? [] : _b, selectedTab = _a.selectedTab, formErrorMessage = _a.formErrorMessage, includeFormButtons = _a.includeFormButtons, errorClass = _a.errorClass, formWrapperClass = _a.formWrapperClass;
    var _c = useState(false), invalidForm = _c[0], setInvalidForm = _c[1];
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
    return (_jsxs("form", { onSubmit: handleSubmission, children: [tabs.length ? (_jsxs(_Fragment, { children: [_jsx("ul", { className: "nav nav-tabs", children: tabs.map(function (tab, i) { return (_jsx("li", { className: "nav-item", children: _jsx("a", { onClick: function (e) {
                                    changeTab(e, tab);
                                }, className: "nav-link ".concat(selectedTab === tab && 'active'), style: { cursor: 'pointer' }, children: tab }) }, tab)); }) }), _jsx("div", { className: "tab-content", style: { display: 'contents' }, children: _jsx("div", { className: formWrapperClass || 'row', children: children }) })] })) : (_jsx("div", { className: formWrapperClass || 'row', children: children })), invalidForm && (_jsx("p", { className: errorClass || 'ml-1 field-error', children: formErrorMessage || 'Please fix the errors in the fields above' })), includeFormButtons && (_jsxs("div", { className: "form-footer", children: [_jsx("button", { type: "submit", className: "btn btn-primary", children: submitText || 'Submit' }), _jsx("button", { onClick: handleCancel, className: "btn btn-light", children: "Cancel" })] }))] }));
};
export default Form;
