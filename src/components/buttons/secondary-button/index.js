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
var ButtonSecondary = function (_a) {
    var onClick = _a.onClick, text = _a.text;
    return (_jsx("button", __assign({ type: "submit", className: "cofp-btn cofp-btn-secondary", onClick: onClick }, { children: text })));
};
export default ButtonSecondary;
