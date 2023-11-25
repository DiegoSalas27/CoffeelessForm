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
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validator */ "./src/validator/index.tsx");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_validator__WEBPACK_IMPORTED_MODULE_5__.CoffeelessWrapper, { initialValues: form, validationSchema: {
            body: {
                part1: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build(),
                part2: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(2).build()
            },
            email: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build(),
            name: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build(),
            subject: ___WEBPACK_IMPORTED_MODULE_3__.Builder.init().required().min(5).build()
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CForm, { handleSubmit: function () { }, submitText: "Submit", formWrapperClass: _core_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].row, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.CSection, { col: "col-md-4", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "name", label: "Name", name: "name", onChange: onChange, placeholder: "Enter you name", type: "text", value: form.name }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "email", label: "Email", name: "email", onChange: onChange, placeholder: "Enter your email", type: "email", value: form.email }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "subject", label: "Subject", name: "subject", onChange: onChange, placeholder: "Enter subject", type: "text", value: form.subject }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart1", label: "BodyPart1", name: "body.part1", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part1 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CFormGroup, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.CInput, { id: "BodyPart2", label: "BodyPart2", name: "body.part2", onChange: onChange, placeholder: "Enter message here", type: "textarea", value: form.body.part2 }) })] }) }) }));
};
var container = document.getElementById('main');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Contact, {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("11d18d03d7cb8c40112b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hN2NlZDJiZmVmZDA2NDY0YzJkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNuQjtBQUNFO0FBQ21CO0FBQ3pCO0FBQ1E7QUFDaEQ7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0I7QUFDQSxZQUFZLHNEQUFJLENBQUMseURBQWlCLElBQUk7QUFDdEM7QUFDQSx1QkFBdUIsc0NBQU87QUFDOUIsdUJBQXVCLHNDQUFPO0FBQzlCLGFBQWE7QUFDYixtQkFBbUIsc0NBQU87QUFDMUIsa0JBQWtCLHNDQUFPO0FBQ3pCLHFCQUFxQixzQ0FBTztBQUM1QixTQUFTLFlBQVksc0RBQUksQ0FBQyxvQ0FBSyxJQUFJLDZCQUE2QiwwQ0FBMEMsd0RBQU8sZ0JBQWdCLHVEQUFLLENBQUMsdUNBQVEsSUFBSSw0QkFBNEIsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDRIQUE0SCxHQUFHLEdBQUcsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLG1JQUFtSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLHVJQUF1SSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDBKQUEwSixHQUFHLEdBQUcsc0RBQUksQ0FBQyx5Q0FBVSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxxQ0FBTSxJQUFJLDBKQUEwSixHQUFHLElBQUksR0FBRyxHQUFHO0FBQzFtQztBQUNBO0FBQ0EsV0FBVyw0REFBVTtBQUNyQixZQUFZLHNEQUFJLFlBQVk7Ozs7Ozs7OztVQ3pENUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWVsZXNzLWZvcm0vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2NvZmZlZWxlc3MtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnVpbGRlciwgQ0Zvcm0sIENGb3JtR3JvdXAsIENJbnB1dCwgQ1NlY3Rpb24gfSBmcm9tICcuJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29yZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IENvZmZlZWxlc3NXcmFwcGVyIH0gZnJvbSAnLi92YWxpZGF0b3InO1xudmFyIENvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgcGFydDE6ICcnLFxuICAgICAgICAgICAgcGFydDI6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgc3ViamVjdDogJydcbiAgICB9KSwgZm9ybSA9IF9hWzBdLCBzZXRGb3JtID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hID0gZXZlbnQudGFyZ2V0LCBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgdmFyIHVwZGF0ZVBhdGggPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBjb3B5ID0gZm9ybTtcbiAgICAgICAgdXBkYXRlUGF0aC5mb3JFYWNoKGZ1bmN0aW9uIChwYXRoLCBpZHgpIHtcbiAgICAgICAgICAgIGlmIChpZHggPT09IHVwZGF0ZVBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBjb3B5W3BhdGhdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gY29weVtwYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZvcm0oX19hc3NpZ24oe30sIGZvcm0pKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4KENvZmZlZWxlc3NXcmFwcGVyLCB7IGluaXRpYWxWYWx1ZXM6IGZvcm0sIHZhbGlkYXRpb25TY2hlbWE6IHtcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICBwYXJ0MTogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oMikuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBwYXJ0MjogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oMikuYnVpbGQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsOiBCdWlsZGVyLmluaXQoKS5yZXF1aXJlZCgpLm1pbig1KS5idWlsZCgpLFxuICAgICAgICAgICAgbmFtZTogQnVpbGRlci5pbml0KCkucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKSxcbiAgICAgICAgICAgIHN1YmplY3Q6IEJ1aWxkZXIuaW5pdCgpLnJlcXVpcmVkKCkubWluKDUpLmJ1aWxkKClcbiAgICAgICAgfSwgY2hpbGRyZW46IF9qc3goQ0Zvcm0sIHsgaGFuZGxlU3VibWl0OiBmdW5jdGlvbiAoKSB7IH0sIHN1Ym1pdFRleHQ6IFwiU3VibWl0XCIsIGZvcm1XcmFwcGVyQ2xhc3M6IGNsYXNzZXMucm93LCBjaGlsZHJlbjogX2pzeHMoQ1NlY3Rpb24sIHsgY29sOiBcImNvbC1tZC00XCIsIGNoaWxkcmVuOiBbX2pzeChDRm9ybUdyb3VwLCB7IGNoaWxkcmVuOiBfanN4KENJbnB1dCwgeyBpZDogXCJuYW1lXCIsIGxhYmVsOiBcIk5hbWVcIiwgbmFtZTogXCJuYW1lXCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91IG5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBmb3JtLm5hbWUgfSkgfSksIF9qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwiZW1haWxcIiwgbGFiZWw6IFwiRW1haWxcIiwgbmFtZTogXCJlbWFpbFwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCB2YWx1ZTogZm9ybS5lbWFpbCB9KSB9KSwgX2pzeChDRm9ybUdyb3VwLCB7IGNoaWxkcmVuOiBfanN4KENJbnB1dCwgeyBpZDogXCJzdWJqZWN0XCIsIGxhYmVsOiBcIlN1YmplY3RcIiwgbmFtZTogXCJzdWJqZWN0XCIsIG9uQ2hhbmdlOiBvbkNoYW5nZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgc3ViamVjdFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IGZvcm0uc3ViamVjdCB9KSB9KSwgX2pzeChDRm9ybUdyb3VwLCB7IGNoaWxkcmVuOiBfanN4KENJbnB1dCwgeyBpZDogXCJCb2R5UGFydDFcIiwgbGFiZWw6IFwiQm9keVBhcnQxXCIsIG5hbWU6IFwiYm9keS5wYXJ0MVwiLCBvbkNoYW5nZTogb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBcIkVudGVyIG1lc3NhZ2UgaGVyZVwiLCB0eXBlOiBcInRleHRhcmVhXCIsIHZhbHVlOiBmb3JtLmJvZHkucGFydDEgfSkgfSksIF9qc3goQ0Zvcm1Hcm91cCwgeyBjaGlsZHJlbjogX2pzeChDSW5wdXQsIHsgaWQ6IFwiQm9keVBhcnQyXCIsIGxhYmVsOiBcIkJvZHlQYXJ0MlwiLCBuYW1lOiBcImJvZHkucGFydDJcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogXCJFbnRlciBtZXNzYWdlIGhlcmVcIiwgdHlwZTogXCJ0ZXh0YXJlYVwiLCB2YWx1ZTogZm9ybS5ib2R5LnBhcnQyIH0pIH0pXSB9KSB9KSB9KSk7XG59O1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG52YXIgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKF9qc3goQ29udGFjdCwge30pKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExZDE4ZDAzZDdjYjhjNDAxMTJiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9