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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
var _jsxFileName = "C:\\Users\\Marcela Afonso\\Desktop\\Marcela\\dev\\github_projects\\google-recaptcha\\components\\google-recaptcha.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GoogleRecaptcha = () => __jsx("div", {
  className: "recaptcha__element",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }
}, "Recaptcha goes here!");

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



const Home = () => __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["GoogleRecaptchaSection"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, "Google Recaptcha"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SectionForm"], {
  id: "main__form",
  onSubmit: formSubmit,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FormFieldset"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetLabel"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "Type your name:"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetInput"], {
  name: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 17
  }
})), __jsx(_components_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FormFieldset"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FieldsetButton"], {
  type: "submit",
  disabled: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 17
  }
}, "Confirm"))));

const formSubmit = event => {
  event.preventDefault();
  const name = event.target.elements.name.value;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/style.tsx":
/*!*************************!*\
  !*** ./pages/style.tsx ***!
  \*************************/
/*! exports provided: GoogleRecaptchaSection, SectionTitle, SectionForm, FormFieldset, FieldsetLabel, FieldsetInput, FieldsetButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleRecaptchaSection", function() { return GoogleRecaptchaSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionForm", function() { return SectionForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldset", function() { return FormFieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetLabel", function() { return FieldsetLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetInput", function() { return FieldsetInput; });
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
    margin: 10px 0;
    padding: 0;
    width: auto;
`;
const FieldsetLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
`;
const FieldsetInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
    background: transparent;
    border: 1px solid #000;
    font-size: 18px;
    outline: none;
    padding: 5px;
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

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcela Afonso\Desktop\Marcela\dev\github_projects\google-recaptcha\pages\index.tsx */"./pages/index.tsx");


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