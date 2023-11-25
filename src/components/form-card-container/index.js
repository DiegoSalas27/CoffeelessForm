import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FormCardContainer = ({ children, cardTitle, cardDescription }) => (_jsx("div", Object.assign({ className: "card fit-content mb-4" }, { children: _jsxs("div", Object.assign({ className: "card-body" }, { children: [_jsx("h4", Object.assign({ className: "card-title" }, { children: cardTitle })), _jsx("hr", {}), _jsx("p", Object.assign({ className: "card-description" }, { children: cardDescription })), children] })) })));
export default FormCardContainer;
