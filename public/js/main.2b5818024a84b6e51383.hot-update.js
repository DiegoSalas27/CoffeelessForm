"use strict";
self["webpackHotUpdatecoffeeless_form"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.ts");
/* harmony import */ var _core_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.module.css */ "./src/core.module.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validator */ "./src/validator/index.tsx");







const Contact = () => {
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: '',
        body: {
            part1: '',
            part2: ''
        },
        email: '',
        subject: ''
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        console.log(form);
    });
    function onChange(event) {
        const { name, value } = event.target;
        const updatePath = name.split('.');
        let copy = form;
        updatePath.forEach((path, idx) => {
            if (idx === updatePath.length - 1) {
                ;
                copy[path] = value;
            }
            else {
                copy = copy[path];
            }
        });
        setForm(Object.assign({}, form));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validator__WEBPACK_IMPORTED_MODULE_6__.CoffeelessWrapper, Object.assign({ initialValues: form, validationSchema: {
            body: {
                part1: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build(),
                part2: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build()
            },
            email: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).email().build(),
            name: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build(),
            subject: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build()
        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CForm, Object.assign({ handleSubmit: () => { }, submitText: "Submit", formWrapperClass: _core_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].row, includeFormButtons: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.CSection, Object.assign({ col: "col-md-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "name", label: "Name", name: "name", onChange: onChange, placeholder: "Enter you name", type: "text", value: form.name }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "email", label: "Email", name: "email", onChange: onChange, placeholder: "Enter your email", type: "email", value: form.email }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "subject", label: "Subject", name: "subject", onChange: onChange, placeholder: "Enter subject", type: "text", value: form.subject }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart1", label: "BodyPart1", name: "body.part1", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part1 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart2", label: "BodyPart2", name: "body.part2", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part2 }) })] })) })) })));
};
const container = document.getElementById('main');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Contact, {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4ab5972fb6e8e4429085")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYjU4MTgwMjRhODRiNmU1MTM4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNuQjtBQUNFO0FBQ21CO0FBQ3pCO0FBQ2hCO0FBQ3dCO0FBQ2hEO0FBQ0EsNEJBQTRCLCtDQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0NBQWdDO0FBQ2hDO0FBQ0EsWUFBWSxzREFBSSxDQUFDLHlEQUFpQixrQkFBa0I7QUFDcEQ7QUFDQSx1QkFBdUIsc0NBQU87QUFDOUIsdUJBQXVCLHNDQUFPO0FBQzlCLGFBQWE7QUFDYixtQkFBbUIsc0NBQU87QUFDMUIsa0JBQWtCLHNDQUFPO0FBQ3pCLHFCQUFxQixzQ0FBTztBQUM1QixXQUFXLElBQUksVUFBVSxzREFBSSxDQUFDLG9DQUFLLGtCQUFrQix1QkFBdUIsMENBQTBDLHdEQUFPLGdDQUFnQyxJQUFJLFVBQVUsdURBQUssQ0FBQyx1Q0FBUSxrQkFBa0IsaUJBQWlCLElBQUksV0FBVyxzREFBSSxDQUFDLHlDQUFVLElBQUksVUFBVSxzREFBSSxDQUFDLHFDQUFNLElBQUksNEhBQTRILEdBQUcsR0FBRyxzREFBSSxDQUFDLHlDQUFVLElBQUksVUFBVSxzREFBSSxDQUFDLHFDQUFNLElBQUksbUlBQW1JLEdBQUcsR0FBRyxzREFBSSxDQUFDLHlDQUFVLElBQUksVUFBVSxzREFBSSxDQUFDLHFDQUFNLElBQUksdUlBQXVJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHlDQUFVLElBQUksVUFBVSxzREFBSSxDQUFDLHFDQUFNLElBQUksMEpBQTBKLEdBQUcsR0FBRyxzREFBSSxDQUFDLHlDQUFVLElBQUksVUFBVSxzREFBSSxDQUFDLHFDQUFNLElBQUksMEpBQTBKLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDeHFDO0FBQ0E7QUFDQSxhQUFhLDREQUFVO0FBQ3ZCLFlBQVksc0RBQUksWUFBWTs7Ozs7Ozs7O1VDL0M1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZWxlc3MtZm9ybS8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29mZmVlbGVzcy1mb3JtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJ1aWxkZXIsIENGb3JtLCBDRm9ybUdyb3VwLCBDSW5wdXQsIENTZWN0aW9uIH0gZnJvbSAnLic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29yZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCB7IENvZmZlZWxlc3NXcmFwcGVyIH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgcGFydDE6ICcnLFxyXG4gICAgICAgICAgICBwYXJ0MjogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJ1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB1cGRhdGVQYXRoID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGxldCBjb3B5ID0gZm9ybTtcclxuICAgICAgICB1cGRhdGVQYXRoLmZvckVhY2goKHBhdGgsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSB1cGRhdGVQYXRoLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGNvcHlbcGF0aF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSBjb3B5W3BhdGhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Rm9ybShPYmplY3QuYXNzaWduKHt9LCBmb3JtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKF9qc3goQ29mZmVlbGVzc1dyYXBwZXIsIE9iamVjdC5hc3NpZ24oeyBpbml0aWFsVmFsdWVzOiBmb3JtLCB2YWxpZGF0aW9uU2NoZW1hOiB7XHJcbiAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICAgIHBhcnQxOiBCdWlsZGVyLmluaXQoKS5yZXF1aXJlZCgpLm1pbigyKS5idWlsZCgpLFxyXG4gICAgICAgICAgICAgICAgcGFydDI6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDIpLmJ1aWxkKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDUpLmVtYWlsKCkuYnVpbGQoKSxcclxuICAgICAgICAgICAgbmFtZTogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKSxcclxuICAgICAgICAgICAgc3ViamVjdDogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKVxyXG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChDRm9ybSwgT2JqZWN0LmFzc2lnbih7IGhhbmRsZVN1Ym1pdDogKCkgPT4geyB9LCBzdWJtaXRUZXh0OiBcIlN1Ym1pdFwiLCBmb3JtV3JhcHBlckNsYXNzOiBjbGFzc2VzLnJvdywgaW5jbHVkZUZvcm1CdXR0b25zOiB0cnVlIH0sIHsgY2hpbGRyZW46IF9qc3hzKENTZWN0aW9uLCBPYmplY3QuYXNzaWduKHsgY29sOiBcImNvbC1tZC02XCIgfSwgeyBjaGlsZHJlbjogW19qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIsIG5hbWU6IFwibmFtZVwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdSBuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogZm9ybS5uYW1lIH0pIH0pLCBfanN4KENGb3JtR3JvdXAsIHsgY2hpbGRyZW46IF9qc3goQ0lucHV0LCB7IGlkOiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIGVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgdmFsdWU6IGZvcm0uZW1haWwgfSkgfSksIF9qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwic3ViamVjdFwiLCBsYWJlbDogXCJTdWJqZWN0XCIsIG5hbWU6IFwic3ViamVjdFwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHN1YmplY3RcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBmb3JtLnN1YmplY3QgfSkgfSksIF9qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwiQm9keVBhcnQxXCIsIGxhYmVsOiBcIkJvZHlQYXJ0MVwiLCBuYW1lOiBcImJvZHkucGFydDFcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogXCJFbnRlciBtZXNzYWdlIGhlcmVcIiwgdHlwZTogXCJ0ZXh0YXJlYVwiLCB2YWx1ZTogZm9ybS5ib2R5LnBhcnQxIH0pIH0pLCBfanN4KENGb3JtR3JvdXAsIHsgY2hpbGRyZW46IF9qc3goQ0lucHV0LCB7IGlkOiBcIkJvZHlQYXJ0MlwiLCBsYWJlbDogXCJCb2R5UGFydDJcIiwgbmFtZTogXCJib2R5LnBhcnQyXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgbWVzc2FnZSBoZXJlXCIsIHR5cGU6IFwidGV4dGFyZWFcIiwgdmFsdWU6IGZvcm0uYm9keS5wYXJ0MiB9KSB9KV0gfSkpIH0pKSB9KSkpO1xyXG59O1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihfanN4KENvbnRhY3QsIHt9KSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRhYjU5NzJmYjZlOGU0NDI5MDg1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9