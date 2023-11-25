import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useCoffeelessHandler } from '../../validator';
const Form = ({ children, preValidate, handleSubmit, handleCancel, submitText, changeTab, tabs = [], selectedTab, formErrorMessage, includeFormButtons, errorClass, formWrapperClass, displayInvalidForm = true }) => {
    const [invalidForm, setInvalidForm] = useState(false);
    const { validateFormOnSubmit } = useCoffeelessHandler();
    function handleSubmission(e) {
        e.preventDefault();
        let isFormInValid = false;
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
    return (_jsxs("form", Object.assign({ onSubmit: handleSubmission }, { children: [tabs.length ? (_jsxs(_Fragment, { children: [_jsx("ul", Object.assign({ className: "nav nav-tabs" }, { children: tabs.map((tab, i) => (_jsx("li", Object.assign({ className: "nav-item" }, { children: _jsx("a", Object.assign({ onClick: e => {
                                    changeTab(e, tab);
                                }, className: `nav-link ${selectedTab === tab && 'active'}`, style: { cursor: 'pointer' } }, { children: tab })) }), tab))) })), _jsx("div", Object.assign({ className: "tab-content", style: { display: 'contents' } }, { children: _jsx("div", Object.assign({ className: formWrapperClass || 'row' }, { children: children })) }))] })) : (_jsx("div", Object.assign({ className: formWrapperClass || 'row' }, { children: children }))), invalidForm && displayInvalidForm && (_jsx("p", Object.assign({ className: errorClass || 'ml-1-error field-error' }, { children: formErrorMessage || 'Please fix the errors in the fields above' }))), includeFormButtons && (_jsxs("div", Object.assign({ className: "form-footer" }, { children: [_jsx("button", Object.assign({ type: "submit", className: "cofp-btn cofp-btn-primary" }, { children: submitText || 'Submit' })), _jsx("button", Object.assign({ onClick: handleCancel, className: "cofp-btn cofp-btn-light" }, { children: "Cancel" }))] })))] })));
};
export default Form;
