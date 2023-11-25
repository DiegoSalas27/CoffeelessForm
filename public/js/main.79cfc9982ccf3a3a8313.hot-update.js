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
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CForm, { handleSubmit: function () { }, submitText: "Submit", formWrapperClass: _core_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].row, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CSection, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "name", label: "Name", name: "name", onChange: onChange, placeholder: "Enter you name", type: "text", value: form.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "email", label: "Email", name: "email", onChange: onChange, placeholder: "Enter your email", type: "email", value: form.email }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "subject", label: "Subject", name: "subject", onChange: onChange, placeholder: "Enter subject", type: "text", value: form.subject }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart1", label: "BodyPart1", name: "body.part1", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart2", label: "BodyPart2", name: "body.part2", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part2 })] }) }) }));
};
var container = document.getElementById('main');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Contact, {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("66e6e73c3173d31ae529")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43OWNmYzk5ODJjY2YzYTNhODMxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNuQjtBQUNFO0FBQ0g7QUFDSztBQUNSO0FBQ3hDO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCO0FBQzNCO0FBQ0EsWUFBWSxzREFBSSxDQUFDLHlEQUFpQixJQUFJO0FBQ3RDO0FBQ0EsdUJBQXVCLHNDQUFPO0FBQzlCLHVCQUF1QixzQ0FBTztBQUM5QixhQUFhO0FBQ2IsbUJBQW1CLHNDQUFPO0FBQzFCLGtCQUFrQixzQ0FBTztBQUN6QixxQkFBcUIsc0NBQU87QUFDNUIsU0FBUyxZQUFZLHNEQUFJLENBQUMsb0NBQUssSUFBSSw2QkFBNkIsMENBQTBDLHdEQUFPLGdCQUFnQix1REFBSyxhQUFhLFdBQVcsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDRIQUE0SCxHQUFHLHNEQUFJLENBQUMscUNBQU0sSUFBSSxtSUFBbUksR0FBRyxzREFBSSxDQUFDLHFDQUFNLElBQUksdUlBQXVJLEdBQUcsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDBKQUEwSixHQUFHLHNEQUFJLENBQUMscUNBQU0sSUFBSSwwSkFBMEosSUFBSSxHQUFHLEdBQUc7QUFDejdCO0FBQ0E7QUFDQSxXQUFXLDREQUFVO0FBQ3JCLFlBQVksc0RBQUksWUFBWTs7Ozs7Ozs7O1VDekQ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZWxlc3MtZm9ybS8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29mZmVlbGVzcy1mb3JtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBCdWlsZGVyLCBDRm9ybSwgQ0lucHV0IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBDb2ZmZWVsZXNzV3JhcHBlciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29yZS5tb2R1bGUuY3NzJztcbnZhciBDb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHBhcnQxOiAnJyxcbiAgICAgICAgICAgIHBhcnQyOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHN1YmplY3Q6ICcnXG4gICAgfSksIGZvcm0gPSBfYVswXSwgc2V0Rm9ybSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSA9IGV2ZW50LnRhcmdldCwgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIHZhciB1cGRhdGVQYXRoID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgY29weSA9IGZvcm07XG4gICAgICAgIHVwZGF0ZVBhdGguZm9yRWFjaChmdW5jdGlvbiAocGF0aCwgaWR4KSB7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSB1cGRhdGVQYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgY29weVtwYXRoXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29weSA9IGNvcHlbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRGb3JtKF9fYXNzaWduKHt9LCBmb3JtKSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeChDb2ZmZWVsZXNzV3JhcHBlciwgeyBpbml0aWFsVmFsdWVzOiBmb3JtLCB2YWxpZGF0aW9uU2NoZW1hOiB7XG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcGFydDE6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDIpLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgcGFydDI6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDIpLmJ1aWxkKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKSxcbiAgICAgICAgICAgIG5hbWU6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDUpLmJ1aWxkKCksXG4gICAgICAgICAgICBzdWJqZWN0OiBCdWlsZGVyLmluaXQoKS5yZXF1aXJlZCgpLm1pbig1KS5idWlsZCgpXG4gICAgICAgIH0sIGNoaWxkcmVuOiBfanN4KENGb3JtLCB7IGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24gKCkgeyB9LCBzdWJtaXRUZXh0OiBcIlN1Ym1pdFwiLCBmb3JtV3JhcHBlckNsYXNzOiBjbGFzc2VzLnJvdywgY2hpbGRyZW46IF9qc3hzKENTZWN0aW9uLCB7IGNoaWxkcmVuOiBbX2pzeChDSW5wdXQsIHsgaWQ6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIsIG5hbWU6IFwibmFtZVwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdSBuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogZm9ybS5uYW1lIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJlbWFpbFwiLCBsYWJlbDogXCJFbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBlbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHZhbHVlOiBmb3JtLmVtYWlsIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJzdWJqZWN0XCIsIGxhYmVsOiBcIlN1YmplY3RcIiwgbmFtZTogXCJzdWJqZWN0XCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgc3ViamVjdFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IGZvcm0uc3ViamVjdCB9KSwgX2pzeChDSW5wdXQsIHsgaWQ6IFwiQm9keVBhcnQxXCIsIGxhYmVsOiBcIkJvZHlQYXJ0MVwiLCBuYW1lOiBcImJvZHkucGFydDFcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogXCJFbnRlciBtZXNzYWdlIGhlcmVcIiwgdHlwZTogXCJ0ZXh0YXJlYVwiLCB2YWx1ZTogZm9ybS5ib2R5LnBhcnQxIH0pLCBfanN4KENJbnB1dCwgeyBpZDogXCJCb2R5UGFydDJcIiwgbGFiZWw6IFwiQm9keVBhcnQyXCIsIG5hbWU6IFwiYm9keS5wYXJ0MlwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1lc3NhZ2UgaGVyZVwiLCB0eXBlOiBcInRleHRhcmVhXCIsIHZhbHVlOiBmb3JtLmJvZHkucGFydDIgfSldIH0pIH0pIH0pKTtcbn07XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbnZhciByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoX2pzeChDb250YWN0LCB7fSkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjZlNmU3M2MzMTczZDMxYWU1MjlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=