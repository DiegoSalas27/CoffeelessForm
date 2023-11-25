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
var ButtonPrimary = function (_a) {
    var onClick = _a.onClick, text = _a.text, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    return (_jsx("button", __assign({ disabled: disabled, type: "submit", className: "cofp-btn cofp-btn-primary", onClick: onClick || (function () { }), style: style }, { children: text })));
};
export default ButtonPrimary;
