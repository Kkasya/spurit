/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/constants.js":
/*!************************************!*\
  !*** ./src/js/common/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TITLE1": () => (/* binding */ TITLE1),
/* harmony export */   "TITLE2": () => (/* binding */ TITLE2),
/* harmony export */   "TITLE3": () => (/* binding */ TITLE3),
/* harmony export */   "YOUTUBE": () => (/* binding */ YOUTUBE),
/* harmony export */   "VIDEO": () => (/* binding */ VIDEO)
/* harmony export */ });
var TITLE1 = 'Digestion is';
var TITLE2 = 'the key';
var TITLE3 = 'to overall wellness in Body, Mind and Spirit';
var YOUTUBE = 'https://www.youtube.com/embed/';
var VIDEO = ['Bs3MUHB_o8U', '3aGSqasVPsI', 'u5edb5GVIHY', 'QlgZZkowIOc', 'SEvR78OhGtw', 'Em3GbqQTO80', 'mbA8EQZSjTk', 'XsbCDeCA9p0', 'I_aTbZcH8Do'];


/***/ }),

/***/ "./src/js/common/index.js":
/*!********************************!*\
  !*** ./src/js/common/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TITLE1": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TITLE1),
/* harmony export */   "TITLE2": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TITLE2),
/* harmony export */   "TITLE3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TITLE3),
/* harmony export */   "YOUTUBE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE),
/* harmony export */   "VIDEO": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VIDEO)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/common/constants.js");



/***/ }),

/***/ "./src/js/components/_popup.js":
/*!*************************************!*\
  !*** ./src/js/components/_popup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/js/common/index.js");

var count = _common__WEBPACK_IMPORTED_MODULE_0__.VIDEO.length;
var frame = document.createElement('iframe');
frame.width = '70%';
frame.height = '70%';
frame.className = 'popup__frame';
var closeBtn = document.createElement('div');
closeBtn.className = 'close-btn';

class Popup {
  constructor() {
    this.isPopup = false;
    this.isWork = true;
    this.popup = document.createElement('div');
    this.popup.className = 'popup hidden';

    this.closeListener = () => this.changeIsPopup(false);

    this.escListener = e => {
      if (e.key === 'Escape') this.changeIsPopup(false);
    };
  }

  changeIsPopup(isPopup) {
    if (this.isWork) {
      var popup = document.querySelector('.popup');

      var _frame = document.querySelector('.popup__frame');

      var numberVideo = Math.floor(Math.random() * count);
      _frame.src = "".concat(_common__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE).concat(_common__WEBPACK_IMPORTED_MODULE_0__.VIDEO[numberVideo]);

      if (isPopup) {
        popup.classList.remove('hidden');
      } else popup.classList.add('hidden');
    }
  }

  init() {
    closeBtn.addEventListener('click', this.closeListener);
    document.addEventListener('keydown', this.escListener);
    this.popup.append(closeBtn, frame);
    return this.popup;
  }

  destroy() {
    this.isWork = false;
    closeBtn.removeEventListener('click', this.closeListener);
    document.removeEventListener('keydown', this.escListener);
  }

}



/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoBlock": () => (/* reexport safe */ _video_block__WEBPACK_IMPORTED_MODULE_0__.VideoBlock),
/* harmony export */   "VideoContent": () => (/* reexport safe */ _video_content__WEBPACK_IMPORTED_MODULE_1__.VideoContent),
/* harmony export */   "Popup": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_2__.Popup)
/* harmony export */ });
/* harmony import */ var _video_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-block */ "./src/js/components/video-block.js");
/* harmony import */ var _video_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-content */ "./src/js/components/video-content.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_popup */ "./src/js/components/_popup.js");





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


var VideoBlock = showPopup => {
  var wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  var videoBlock = document.createElement('div');
  videoBlock.className = 'wrapper__video-block';
  videoBlock.append((0,_video_content__WEBPACK_IMPORTED_MODULE_0__.VideoContent)(showPopup));
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/js/common/index.js");


var VideoContent = showPopup => {
  var videoContent = document.createElement('div');
  videoContent.className = 'content';
  var rectangle = document.createElement('div');
  rectangle.className = 'content__rectangle';
  var title = document.createElement('p');
  var titleStart = document.createElement('span');
  titleStart.append(_common__WEBPACK_IMPORTED_MODULE_0__.TITLE1);
  titleStart.className = 'content__title-common';
  var titleEnd = document.createElement('span');
  titleEnd.append(_common__WEBPACK_IMPORTED_MODULE_0__.TITLE3);
  titleEnd.className = 'content__title-common';
  var titleMiddle = document.createElement('span');
  titleMiddle.append(_common__WEBPACK_IMPORTED_MODULE_0__.TITLE2);
  titleMiddle.className = 'content__title-middle';
  title.append(titleStart, titleMiddle, titleEnd);
  var playBtn = document.createElement('button');
  playBtn.className = 'content__btn-play';
  playBtn.addEventListener('click', showPopup);
  videoContent.append(rectangle, title, playBtn);
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
  var popupIns = new _components__WEBPACK_IMPORTED_MODULE_0__.Popup();
  var popup = popupIns.init();

  var showPopup = () => popupIns.changeIsPopup(true); //popupIns.destroy();


  var app = document.createElement('main');
  app.append(popup, (0,_components__WEBPACK_IMPORTED_MODULE_0__.VideoBlock)(showPopup));
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