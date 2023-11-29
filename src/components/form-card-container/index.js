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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var FormCardContainer = function (_a) {
    var children = _a.children, cardTitle = _a.cardTitle, cardDescription = _a.cardDescription;
    return (_jsx("div", __assign({ className: "card fit-content mb-4" }, { children: _jsxs("div", __assign({ className: "card-body" }, { children: [_jsx("h4", __assign({ className: "card-title" }, { children: cardTitle })), _jsx("hr", {}), _jsx("p", __assign({ className: "card-description" }, { children: cardDescription })), children] })) })));
};
export default FormCardContainer;
