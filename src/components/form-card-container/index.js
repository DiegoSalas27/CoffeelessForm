import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var FormCardContainer = function (_a) {
    var children = _a.children, cardTitle = _a.cardTitle, cardDescription = _a.cardDescription;
    return (_jsx("div", { className: "card fit-content mb-4", children: _jsxs("div", { className: "card-body", children: [_jsx("h4", { className: "card-title", children: cardTitle }), _jsx("hr", {}), _jsx("p", { className: "card-description", children: cardDescription }), children] }) }));
};
export default FormCardContainer;
