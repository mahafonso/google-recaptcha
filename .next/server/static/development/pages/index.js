module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/googeRecaptcha.scss":
/*!****************************************!*\
  !*** ./components/googeRecaptcha.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/google-recaptcha.tsx":
/*!*****************************************!*\
  !*** ./components/google-recaptcha.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _googeRecaptcha_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googeRecaptcha.scss */ "./components/googeRecaptcha.scss");
/* harmony import */ var _googeRecaptcha_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googeRecaptcha_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Marcela Afonso\\Desktop\\Marcela\\dev\\github_projects\\google-recaptcha\\components\\google-recaptcha.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class GoogleRecaptcha extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadRecaptcha", () => {
      window.grecaptcha.render('form-recaptcha', {
        'sitekey': '6LcH0-wUAAAAAK1AC3awIRgj4GBuIU03THxGywfJ',
        'callback': this.getRecaptcha
      });
    });

    _defineProperty(this, "getRecaptcha", () => {
      this.props.showButton(true);
    });
  }

  componentDidMount() {
    this.loadRecaptcha();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("script", {
      src: "https://www.google.com/recaptcha/api.js?render=explicit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    })), __jsx("div", {
      id: "form-recaptcha",
      className: "g-recaptcha",
      "data-sitekey": "6LcH0-wUAAAAAK1AC3awIRgj4GBuIU03THxGywfJ",
      "data-callback": "formSubmit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoogleRecaptcha);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/google-recaptcha */ "./components/google-recaptcha.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./pages/style.tsx");
var _jsxFileName = "C:\\Users\\Marcela Afonso\\Desktop\\Marcela\\dev\\github_projects\\google-recaptcha\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  const {
    0: showButton,
    1: handleShowButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["GoogleRecaptchaSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Google Recaptcha"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionForm"], {
    id: "main__form",
    onSubmit: formSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_components_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showButton: handleShowButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FormFieldset"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, !showButton && __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetButton"], {
    type: "submit",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "Confirm"), showButton && __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetButton"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 36
    }
  }, "Confirm"))));
};

const formSubmit = event => {
  event.preventDefault();
  alert('Sent!');
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/style.tsx":
/*!*************************!*\
  !*** ./pages/style.tsx ***!
  \*************************/
/*! exports provided: GoogleRecaptchaSection, SectionTitle, SectionForm, FormFieldset, FieldsetButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleRecaptchaSection", function() { return GoogleRecaptchaSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionForm", function() { return SectionForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldset", function() { return FormFieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetButton", function() { return FieldsetButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GoogleRecaptchaSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
    font-family: Roboto, sans-serif;
    margin: 0 auto;
    max-width: 1024px;
    padding: 30px;
    width: 100%;
`;
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
`;
const SectionForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form`
    margin: 20px auto;
    text-align: center;
    width: 480px;
`;
const FormFieldset = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.fieldset`
    border: none;
    display: inline-block;
    padding: 0;
    width: auto;
`;
const FieldsetButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    background: #000;
    border: none;
    box-shadow: none;
    color: #FFF;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 120px;

    &:disabled {
        cursor: initial;
        opacity: .4;
    }
`;


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcela Afonso\Desktop\Marcela\dev\github_projects\google-recaptcha\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map