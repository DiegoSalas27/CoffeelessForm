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
var Section = function (_a) {
    var children = _a.children, col = _a.col;
    return (_jsx("div", __assign({ className: "".concat(col, " grid-margin stretch-card flex-column") }, { children: children })));
};
export default Section;
