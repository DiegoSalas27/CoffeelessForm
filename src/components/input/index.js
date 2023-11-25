import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCoffeelessHandler, useCoffeelessValidator } from '../../validator';
var Input = function (_a) {
    var id = _a.id, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, type = _a.type, value = _a.value, label = _a.label, readOnly = _a.readOnly, className = _a.className, checked = _a.checked, style = _a.style, rows = _a.rows;
    var handleOnChange = useCoffeelessHandler().handleOnChange;
    var contextState = useCoffeelessValidator(name);
    var hasError = contextState.field && contextState.field.some(function (e) { return e.error; });
    function onChangeInput(e) {
        onChange && onChange(e);
        contextState.field && handleOnChange(e);
    }
    return (_jsxs(_Fragment, { children: [label && _jsx("label", { htmlFor: id, children: label }), type === 'textarea' ? (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("textarea", { "data-status": hasError ? 'invalid' : 'valid', style: style, readOnly: readOnly || false, onChange: onChangeInput, value: value !== null && value !== void 0 ? value : '', className: "".concat(className || 'cofp-form-control'), id: id, name: name, placeholder: placeholder, rows: rows })] })) : (_jsx("input", { "data-status": hasError ? 'invalid' : 'valid', style: style, readOnly: readOnly || false, onChange: onChangeInput, value: value !== null && value !== void 0 ? value : '', type: type, className: "".concat(className || 'cofp-form-control'), id: id, name: name, placeholder: placeholder, checked: checked })), hasError &&
                contextState.field.map(function (e, i) {
                    return e.error && (_jsx("p", { className: "field-error .mt-2-error", children: e.error.message }, i));
                })] }));
};
export default Input;
