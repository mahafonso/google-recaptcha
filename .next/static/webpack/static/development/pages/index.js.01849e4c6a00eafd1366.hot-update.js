webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/google-recaptcha */ "./components/google-recaptcha.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./pages/style.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcela Afonso\\Desktop\\Marcela\\dev\\github_projects\\google-recaptcha\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showButton = _useState[0],
      handleShowButton = _useState[1];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["GoogleRecaptchaSection"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Google Recaptcha"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionForm"], {
    id: "main__form",
    onSubmit: formSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_components_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showButton: handleShowButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FormFieldset"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, !showButton && __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetButton"], {
    type: "submit",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "Confirm"), showButton && __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetButton"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 36
    }
  }, "Confirm"))));
};

var formSubmit = function formSubmit(event) {
  event.preventDefault();
  alert('Sent!');
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.01849e4c6a00eafd1366.hot-update.js.map