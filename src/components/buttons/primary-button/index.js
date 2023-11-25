import { jsx as _jsx } from "react/jsx-runtime";
const ButtonPrimary = ({ onClick, text, style = {}, disabled = false }) => (_jsx("button", Object.assign({ disabled: disabled, type: "submit", className: "cofp-btn cofp-btn-primary", onClick: onClick || (() => { }), style: style }, { children: text })));
export default ButtonPrimary;
