import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCoffeelessHandler, useCoffeelessValidator } from '../../validator';
const Input = ({ id, name, onChange, placeholder, type, value, label, readOnly, className, checked, style, rows }) => {
    const { handleOnChange } = useCoffeelessHandler();
    const contextState = useCoffeelessValidator(name);
    const hasError = contextState.field && contextState.field.some((e) => e.error);
    function onChangeInput(e) {
        onChange && onChange(e);
        contextState.field && handleOnChange(e);
    }
    return (_jsxs(_Fragment, { children: [label && _jsx("label", Object.assign({ htmlFor: id }, { children: label })), type === 'textarea' ? (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("textarea", { "data-status": hasError ? 'invalid' : 'valid', style: style, readOnly: readOnly || false, onChange: onChangeInput, value: value !== null && value !== void 0 ? value : '', className: `${className || 'cofp-form-control'}`, id: id, name: name, placeholder: placeholder, rows: rows })] })) : (_jsx("input", { "data-status": hasError ? 'invalid' : 'valid', style: style, readOnly: readOnly || false, onChange: onChangeInput, value: value !== null && value !== void 0 ? value : '', type: type, className: `${className || 'cofp-form-control'}`, id: id, name: name, placeholder: placeholder, checked: checked })), hasError &&
                contextState.field.map((e, i) => e.error && (_jsx("p", Object.assign({ className: "field-error .mt-2-error" }, { children: e.error.message }), i)))] }));
};
export default Input;
