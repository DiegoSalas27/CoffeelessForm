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
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/validator/index.tsx");
/* harmony import */ var _core_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module.css */ "./src/core.module.css");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section */ "./src/components/section/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
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







var Contact = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: '',
        body: {
            part1: '',
            part2: ''
        },
        email: '',
        subject: ''
    }), form = _a[0], setForm = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        console.log(form);
    });
    function onChange(event) {
        var _a = event.target, name = _a.name, value = _a.value;
        var updatePath = name.split('.');
        var copy = form;
        updatePath.forEach(function (path, idx) {
            if (idx === updatePath.length - 1) {
                ;
                copy[path] = value;
            }
            else {
                copy = copy[path];
            }
        });
        setForm(__assign({}, form));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validator__WEBPACK_IMPORTED_MODULE_4__.CoffeelessWrapper, { initialValues: form, validationSchema: {
            body: {
                part1: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build(),
                part2: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build()
            },
            email: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build(),
            name: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build(),
            subject: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build()
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CForm, { handleSubmit: function () { }, submitText: "Submit", formWrapperClass: _core_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].row, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.CSection, { col: "col-md-6", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "name", label: "Name", name: "name", onChange: onChange, placeholder: "Enter you name", type: "text", value: form.name }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "email", label: "Email", name: "email", onChange: onChange, placeholder: "Enter your email", type: "email", value: form.email }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "subject", label: "Subject", name: "subject", onChange: onChange, placeholder: "Enter subject", type: "text", value: form.subject }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart1", label: "BodyPart1", name: "body.part1", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart2", label: "BodyPart2", name: "body.part2", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part2 })] }) }) }));
};
var container = document.getElementById('main');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Contact, {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d3af0ca38a252e8edf1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZGNmNmYyMDUwMTBkZGYyZGVkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDbkI7QUFDRTtBQUNtQjtBQUNqQjtBQUNSO0FBQ0c7QUFDM0M7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0I7QUFDQSxZQUFZLHNEQUFJLENBQUMseURBQWlCLElBQUk7QUFDdEM7QUFDQSx1QkFBdUIsc0NBQU87QUFDOUIsdUJBQXVCLHNDQUFPO0FBQzlCLGFBQWE7QUFDYixtQkFBbUIsc0NBQU87QUFDMUIsa0JBQWtCLHNDQUFPO0FBQ3pCLHFCQUFxQixzQ0FBTztBQUM1QixTQUFTLFlBQVksc0RBQUksQ0FBQyxvQ0FBSyxJQUFJLDZCQUE2QiwwQ0FBMEMsd0RBQU8sZ0JBQWdCLHVEQUFLLENBQUMsdUNBQVEsSUFBSSw0QkFBNEIsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDRIQUE0SCxHQUFHLEdBQUcsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLG1JQUFtSSxHQUFHLHNEQUFJLENBQUMscUNBQU0sSUFBSSx1SUFBdUksR0FBRyxzREFBSSxDQUFDLHFDQUFNLElBQUksMEpBQTBKLEdBQUcsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDBKQUEwSixJQUFJLEdBQUcsR0FBRztBQUMxK0I7QUFDQTtBQUNBLFdBQVcsNERBQVU7QUFDckIsWUFBWSxzREFBSSxZQUFZOzs7Ozs7Ozs7VUMxRDVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlbGVzcy1mb3JtLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb2ZmZWVsZXNzLWZvcm0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IEJ1aWxkZXIsIENGb3JtLCBDSW5wdXQsIENGb3JtR3JvdXAsIENTZWN0aW9uIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBDb2ZmZWVsZXNzV3JhcHBlciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29yZS5tb2R1bGUuY3NzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uJztcbnZhciBDb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHBhcnQxOiAnJyxcbiAgICAgICAgICAgIHBhcnQyOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHN1YmplY3Q6ICcnXG4gICAgfSksIGZvcm0gPSBfYVswXSwgc2V0Rm9ybSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSA9IGV2ZW50LnRhcmdldCwgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIHZhciB1cGRhdGVQYXRoID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgY29weSA9IGZvcm07XG4gICAgICAgIHVwZGF0ZVBhdGguZm9yRWFjaChmdW5jdGlvbiAocGF0aCwgaWR4KSB7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSB1cGRhdGVQYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgY29weVtwYXRoXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29weSA9IGNvcHlbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRGb3JtKF9fYXNzaWduKHt9LCBmb3JtKSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeChDb2ZmZWVsZXNzV3JhcHBlciwgeyBpbml0aWFsVmFsdWVzOiBmb3JtLCB2YWxpZGF0aW9uU2NoZW1hOiB7XG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcGFydDE6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDIpLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgcGFydDI6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDIpLmJ1aWxkKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKSxcbiAgICAgICAgICAgIG5hbWU6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDUpLmJ1aWxkKCksXG4gICAgICAgICAgICBzdWJqZWN0OiBCdWlsZGVyLmluaXQoKS5yZXF1aXJlZCgpLm1pbig1KS5idWlsZCgpXG4gICAgICAgIH0sIGNoaWxkcmVuOiBfanN4KENGb3JtLCB7IGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24gKCkgeyB9LCBzdWJtaXRUZXh0OiBcIlN1Ym1pdFwiLCBmb3JtV3JhcHBlckNsYXNzOiBjbGFzc2VzLnJvdywgY2hpbGRyZW46IF9qc3hzKENTZWN0aW9uLCB7IGNvbDogXCJjb2wtbWQtNlwiLCBjaGlsZHJlbjogW19qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIsIG5hbWU6IFwibmFtZVwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdSBuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogZm9ybS5uYW1lIH0pIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJlbWFpbFwiLCBsYWJlbDogXCJFbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBlbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHZhbHVlOiBmb3JtLmVtYWlsIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJzdWJqZWN0XCIsIGxhYmVsOiBcIlN1YmplY3RcIiwgbmFtZTogXCJzdWJqZWN0XCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgc3ViamVjdFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IGZvcm0uc3ViamVjdCB9KSwgX2pzeChDSW5wdXQsIHsgaWQ6IFwiQm9keVBhcnQxXCIsIGxhYmVsOiBcIkJvZHlQYXJ0MVwiLCBuYW1lOiBcImJvZHkucGFydDFcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogXCJFbnRlciBtZXNzYWdlIGhlcmVcIiwgdHlwZTogXCJ0ZXh0YXJlYVwiLCB2YWx1ZTogZm9ybS5ib2R5LnBhcnQxIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJCb2R5UGFydDJcIiwgbGFiZWw6IFwiQm9keVBhcnQyXCIsIG5hbWU6IFwiYm9keS5wYXJ0MlwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1lc3NhZ2UgaGVyZVwiLCB0eXBlOiBcInRleHRhcmVhXCIsIHZhbHVlOiBmb3JtLmJvZHkucGFydDIgfSldIH0pIH0pIH0pKTtcbn07XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbnZhciByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoX2pzeChDb250YWN0LCB7fSkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDNhZjBjYTM4YTI1MmU4ZWRmMWJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=