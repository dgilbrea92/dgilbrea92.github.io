/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/home.view.ts":
/*!********************************!*\
  !*** ./src/views/home.view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHomeView": () => (/* binding */ makeHomeView)
/* harmony export */ });
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");

function makeHomeView() {
  var view = document.createElement("div");
  var paragraph = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)("Hello, World! This site uses Typescript!");
  view.appendChild(paragraph);
  return view;
}

/***/ }),

/***/ "./src/views/navigation.view.ts":
/*!**************************************!*\
  !*** ./src/views/navigation.view.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavView": () => (/* binding */ makeNavView)
/* harmony export */ });
/* harmony import */ var _home_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.view */ "./src/views/home.view.ts");
/* harmony import */ var _portfolio_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.view */ "./src/views/portfolio.view.ts");
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var NAV_ITEMS = [['Home', _home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView], ['Portfolio', _portfolio_view__WEBPACK_IMPORTED_MODULE_1__.makePortfolioView]];
function makeNavView() {
  var wrapper = document.createElement('div');
  NAV_ITEMS.forEach(function (navItem) {
    var navLink = makeNavLink.apply(void 0, _toConsumableArray(navItem));
    wrapper.appendChild(navLink);
  });
  return wrapper;
}

function makeNavLink(label, viewFn) {
  var link = document.createElement('a');
  link.textContent = label;
  link.addEventListener('click', handleNavClick(viewFn));
  link.setAttribute('style', 'padding: 2px; text-decoration: underline; cursor: pointer');
  return link;
}

function handleNavClick(viewFn) {
  return function (event) {
    event.preventDefault();
    (0,_view_utils__WEBPACK_IMPORTED_MODULE_2__.renderView)(viewFn());
  };
}

/***/ }),

/***/ "./src/views/portfolio.view.ts":
/*!*************************************!*\
  !*** ./src/views/portfolio.view.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePortfolioView": () => (/* binding */ makePortfolioView)
/* harmony export */ });
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");

function makePortfolioView() {
  var view = document.createElement("div");
  var content = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)("My portfolio will go here... one day.");
  view.appendChild(content);
  return view;
}

/***/ }),

/***/ "./src/views/view.utils.ts":
/*!*********************************!*\
  !*** ./src/views/view.utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeParagraph": () => (/* binding */ makeParagraph),
/* harmony export */   "renderView": () => (/* binding */ renderView)
/* harmony export */ });
function makeParagraph() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
function renderView(view) {
  var wrapper = clearMainWrapper();
  wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(view);
}

function clearMainWrapper() {
  var wrapper = document.getElementById("section-content");
  wrapper === null || wrapper === void 0 ? void 0 : wrapper.childNodes.forEach(function (childNode) {
    wrapper.removeChild(childNode);
  });
  return wrapper;
}

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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_home_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home.view */ "./src/views/home.view.ts");
/* harmony import */ var _views_view_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view.utils */ "./src/views/view.utils.ts");
/* harmony import */ var _views_navigation_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/navigation.view */ "./src/views/navigation.view.ts");




function init() {
  var navSection = document.getElementById("section-nav");
  var navView = (0,_views_navigation_view__WEBPACK_IMPORTED_MODULE_2__.makeNavView)();
  navSection === null || navSection === void 0 ? void 0 : navSection.appendChild(navView);
  var homeView = (0,_views_home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView)();
  (0,_views_view_utils__WEBPACK_IMPORTED_MODULE_1__.renderView)(homeView);
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUNqQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBLFNBQVNxQixJQUFULEdBQWdCO0VBQ1osSUFBTUMsVUFBVSxHQUFHOUIsUUFBUSxDQUFDeUIsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtFQUNBLElBQU1NLE9BQU8sR0FBR3hCLG1FQUFXLEVBQTNCO0VBQ0F1QixVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRTNCLFdBQVosQ0FBd0I0QixPQUF4QjtFQUVBLElBQU1DLFFBQVEsR0FBR2xDLDhEQUFZLEVBQTdCO0VBQ0FPLDZEQUFVLENBQUMyQixRQUFELENBQVY7QUFDSDs7QUFFREgsSUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vLi9zcmMvdmlld3MvaG9tZS52aWV3LnRzIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvLy4vc3JjL3ZpZXdzL25hdmlnYXRpb24udmlldy50cyIsIndlYnBhY2s6Ly9kZ2lsYnJlYTkyLmdpdGh1Yi5pby8uL3NyYy92aWV3cy9wb3J0Zm9saW8udmlldy50cyIsIndlYnBhY2s6Ly9kZ2lsYnJlYTkyLmdpdGh1Yi5pby8uL3NyYy92aWV3cy92aWV3LnV0aWxzLnRzIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZ2lsYnJlYTkyLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVBhcmFncmFwaCB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhvbWVWaWV3KCkge1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcGFyYWdyYXBoID0gbWFrZVBhcmFncmFwaChcIkhlbGxvLCBXb3JsZCEgVGhpcyBzaXRlIHVzZXMgVHlwZXNjcmlwdCFcIilcbiAgICB2aWV3LmFwcGVuZENoaWxkKHBhcmFncmFwaClcbiAgICByZXR1cm4gdmlld1xufSIsImltcG9ydCB7IG1ha2VIb21lVmlldyB9IGZyb20gJy4vaG9tZS52aWV3JztcbmltcG9ydCB7IG1ha2VQb3J0Zm9saW9WaWV3IH0gZnJvbSAnLi9wb3J0Zm9saW8udmlldyc7XG5pbXBvcnQgeyByZW5kZXJWaWV3IH0gZnJvbSAnLi92aWV3LnV0aWxzJztcbmltcG9ydCB7IFZpZXdGbiB9IGZyb20gJy4vdmlld3MudHlwZXMnO1xuXG50eXBlIE5hdkl0ZW0gPSBbbGFiZWw6IHN0cmluZywgdmlld0ZuOiBWaWV3Rm5dO1xuXG5jb25zdCBOQVZfSVRFTVM6IE5hdkl0ZW1bXSA9IFtcbiAgICBbJ0hvbWUnLCBtYWtlSG9tZVZpZXddLFxuICAgIFsnUG9ydGZvbGlvJywgbWFrZVBvcnRmb2xpb1ZpZXddLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOYXZWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBOQVZfSVRFTVMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuYXZMaW5rID0gbWFrZU5hdkxpbmsoLi4ubmF2SXRlbSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gbWFrZU5hdkxpbmsobGFiZWw6IHN0cmluZywgdmlld0ZuOiBWaWV3Rm4pOiBIVE1MQW5jaG9yRWxlbWVudCB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2Q2xpY2sodmlld0ZuKSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgICdwYWRkaW5nOiAycHg7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjdXJzb3I6IHBvaW50ZXInXG4gICAgKTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOYXZDbGljayh2aWV3Rm46IFZpZXdGbik6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZW5kZXJWaWV3KHZpZXdGbigpKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgbWFrZVBhcmFncmFwaCB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvcnRmb2xpb1ZpZXcoKSB7XG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjb250ZW50ID0gbWFrZVBhcmFncmFwaChcIk15IHBvcnRmb2xpbyB3aWxsIGdvIGhlcmUuLi4gb25lIGRheS5cIilcbiAgICB2aWV3LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgcmV0dXJuIHZpZXdcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWFrZVBhcmFncmFwaCh0ZXh0ID0gXCJcIikge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBwYXJhZ3JhcGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclZpZXcodmlldzogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY2xlYXJNYWluV3JhcHBlcigpXG4gICAgd3JhcHBlcj8uYXBwZW5kQ2hpbGQodmlldylcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluV3JhcHBlcigpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uLWNvbnRlbnRcIilcbiAgICB3cmFwcGVyPy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChjaGlsZE5vZGUpXG4gICAgfSlcbiAgICByZXR1cm4gd3JhcHBlclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZUhvbWVWaWV3IH0gZnJvbSBcIi4vdmlld3MvaG9tZS52aWV3XCJcbmltcG9ydCB7IHJlbmRlclZpZXcgfSBmcm9tIFwiLi92aWV3cy92aWV3LnV0aWxzXCJcbmltcG9ydCB7IG1ha2VOYXZWaWV3IH0gZnJvbSBcIi4vdmlld3MvbmF2aWdhdGlvbi52aWV3XCJcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBuYXZTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uLW5hdlwiKVxuICAgIGNvbnN0IG5hdlZpZXcgPSBtYWtlTmF2VmlldygpXG4gICAgbmF2U2VjdGlvbj8uYXBwZW5kQ2hpbGQobmF2VmlldylcblxuICAgIGNvbnN0IGhvbWVWaWV3ID0gbWFrZUhvbWVWaWV3KClcbiAgICByZW5kZXJWaWV3KGhvbWVWaWV3KVxufVxuXG5pbml0KClcbiJdLCJuYW1lcyI6WyJtYWtlUGFyYWdyYXBoIiwibWFrZUhvbWVWaWV3IiwidmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZENoaWxkIiwibWFrZVBvcnRmb2xpb1ZpZXciLCJyZW5kZXJWaWV3IiwiTkFWX0lURU1TIiwibWFrZU5hdlZpZXciLCJ3cmFwcGVyIiwiZm9yRWFjaCIsIm5hdkl0ZW0iLCJuYXZMaW5rIiwibWFrZU5hdkxpbmsiLCJsYWJlbCIsInZpZXdGbiIsImxpbmsiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZDbGljayIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwidGV4dCIsImNsZWFyTWFpbldyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZCIsImluaXQiLCJuYXZTZWN0aW9uIiwibmF2VmlldyIsImhvbWVWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==