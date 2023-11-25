import { jsx as _jsx } from "react/jsx-runtime";
const Section = ({ children, col }) => (_jsx("div", Object.assign({ className: `${col} grid-margin stretch-card flex-column` }, { children: children })));
export default Section;
