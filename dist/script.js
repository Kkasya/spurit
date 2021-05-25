/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoBlock": () => (/* reexport safe */ _video_block__WEBPACK_IMPORTED_MODULE_0__.VideoBlock),
/* harmony export */   "VideoContent": () => (/* reexport safe */ _video_content__WEBPACK_IMPORTED_MODULE_1__.VideoContent)
/* harmony export */ });
/* harmony import */ var _video_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-block */ "./src/js/components/video-block.js");
/* harmony import */ var _video_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-content */ "./src/js/components/video-content.js");




/***/ }),

/***/ "./src/js/components/video-block.js":
/*!******************************************!*\
  !*** ./src/js/components/video-block.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoBlock": () => (/* binding */ VideoBlock)
/* harmony export */ });
/* harmony import */ var _video_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-content */ "./src/js/components/video-content.js");


var VideoBlock = () => {
  var wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  var videoBlock = document.createElement('div');
  videoBlock.className = 'wrapper__video-block';
  videoBlock.append((0,_video_content__WEBPACK_IMPORTED_MODULE_0__.VideoContent)());
  wrapper.append(videoBlock);
  return wrapper;
};



/***/ }),

/***/ "./src/js/components/video-content.js":
/*!********************************************!*\
  !*** ./src/js/components/video-content.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoContent": () => (/* binding */ VideoContent)
/* harmony export */ });
var VideoContent = () => {
  var videoContent = document.createElement('div');
  videoContent.className = 'content';
  var rectangle = document.createElement('div');
  rectangle.className = 'content__rectangle';
  videoContent.append(rectangle);
  return videoContent;
};



/***/ }),

/***/ "./src/js/layouts/app.js":
/*!*******************************!*\
  !*** ./src/js/layouts/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/js/components/index.js");


var App = () => {
  var hi = document.createElement('span');
  hi.innerHTML = 'Hi';
  var app = document.createElement('div');
  app.append((0,_components__WEBPACK_IMPORTED_MODULE_0__.VideoBlock)());
  return app;
};



/***/ }),

/***/ "./src/js/layouts/index.js":
/*!*********************************!*\
  !*** ./src/js/layouts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.App)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/layouts/app.js");



/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/layouts */ "./src/js/layouts/index.js");


document.body.appendChild((0,_js_layouts__WEBPACK_IMPORTED_MODULE_1__.App)());
})();

/******/ })()
;
//# sourceMappingURL=script.js.map