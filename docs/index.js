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




var NAV_ITEMS = [["Home", _home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView], ["Portfolio", _portfolio_view__WEBPACK_IMPORTED_MODULE_1__.makePortfolioView]];
function makeNavView() {
  var wrapper = document.createElement("div");
  NAV_ITEMS.forEach(function (navItem) {
    var navLink = makeNavLink.apply(void 0, _toConsumableArray(navItem));
    wrapper.appendChild(navLink);
  });
  return wrapper;
}

function makeNavLink(label, viewFn) {
  var link = document.createElement("a");
  link.textContent = label;
  link.addEventListener("click", handleNavClick(viewFn));
  link.setAttribute("style", "padding: 2px; text-decoration: underline; cursor: pointer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7Ozs7OztVQ2pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3FCLElBQVQsR0FBZ0I7RUFDWixJQUFNQyxVQUFVLEdBQUc5QixRQUFRLENBQUN5QixjQUFULENBQXdCLGFBQXhCLENBQW5CO0VBQ0EsSUFBTU0sT0FBTyxHQUFHeEIsbUVBQVcsRUFBM0I7RUFDQXVCLFVBQVUsU0FBVixJQUFBQSxVQUFVLFdBQVYsWUFBQUEsVUFBVSxDQUFFM0IsV0FBWixDQUF3QjRCLE9BQXhCO0VBRUEsSUFBTUMsUUFBUSxHQUFHbEMsOERBQVksRUFBN0I7RUFDQU8sNkRBQVUsQ0FBQzJCLFFBQUQsQ0FBVjtBQUNIOztBQUVESCxJQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZ2lsYnJlYTkyLmdpdGh1Yi5pby8uL3NyYy92aWV3cy9ob21lLnZpZXcudHMiLCJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vLi9zcmMvdmlld3MvbmF2aWdhdGlvbi52aWV3LnRzIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvLy4vc3JjL3ZpZXdzL3BvcnRmb2xpby52aWV3LnRzIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvLy4vc3JjL3ZpZXdzL3ZpZXcudXRpbHMudHMiLCJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RnaWxicmVhOTIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGdpbGJyZWE5Mi5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZ2lsYnJlYTkyLmdpdGh1Yi5pby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlUGFyYWdyYXBoIH0gZnJvbSBcIi4vdmlldy51dGlsc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSG9tZVZpZXcoKSB7XG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBtYWtlUGFyYWdyYXBoKFwiSGVsbG8sIFdvcmxkISBUaGlzIHNpdGUgdXNlcyBUeXBlc2NyaXB0IVwiKVxuICAgIHZpZXcuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKVxuICAgIHJldHVybiB2aWV3XG59IiwiaW1wb3J0IHsgbWFrZUhvbWVWaWV3IH0gZnJvbSBcIi4vaG9tZS52aWV3XCJcbmltcG9ydCB7IG1ha2VQb3J0Zm9saW9WaWV3IH0gZnJvbSBcIi4vcG9ydGZvbGlvLnZpZXdcIlxuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIlxuXG50eXBlIE5hdkl0ZW0gPSBbbGFiZWw6IHN0cmluZywgdmlld0ZuOiBGdW5jdGlvbl1cblxuY29uc3QgTkFWX0lURU1TOiBOYXZJdGVtW10gPSBbW1wiSG9tZVwiLCBtYWtlSG9tZVZpZXddLCBbXCJQb3J0Zm9saW9cIiwgbWFrZVBvcnRmb2xpb1ZpZXddXVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5hdlZpZXcoKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIE5BVl9JVEVNUy5mb3JFYWNoKChuYXZJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkxpbmsgPSBtYWtlTmF2TGluayguLi5uYXZJdGVtKVxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hdkxpbmspXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG5mdW5jdGlvbiBtYWtlTmF2TGluayhsYWJlbDogc3RyaW5nLCB2aWV3Rm46IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gIFxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbFxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5hdkNsaWNrKHZpZXdGbikpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBhZGRpbmc6IDJweDsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGN1cnNvcjogcG9pbnRlclwiKVxuICBcbiAgICByZXR1cm4gbGlua1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOYXZDbGljayh2aWV3Rm46IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgcmVuZGVyVmlldyh2aWV3Rm4oKSlcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBtYWtlUGFyYWdyYXBoIH0gZnJvbSBcIi4vdmlldy51dGlsc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9ydGZvbGlvVmlldygpIHtcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlUGFyYWdyYXBoKFwiTXkgcG9ydGZvbGlvIHdpbGwgZ28gaGVyZS4uLiBvbmUgZGF5LlwiKVxuICAgIHZpZXcuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICByZXR1cm4gdmlld1xufSIsImV4cG9ydCBmdW5jdGlvbiBtYWtlUGFyYWdyYXBoKHRleHQgPSBcIlwiKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIHBhcmFncmFwaFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVmlldyh2aWV3OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjbGVhck1haW5XcmFwcGVyKClcbiAgICB3cmFwcGVyPy5hcHBlbmRDaGlsZCh2aWV3KVxufVxuXG5mdW5jdGlvbiBjbGVhck1haW5XcmFwcGVyKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3Rpb24tY29udGVudFwiKVxuICAgIHdyYXBwZXI/LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSlcbiAgICB9KVxuICAgIHJldHVybiB3cmFwcGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlSG9tZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9ob21lLnZpZXdcIlxuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gXCIuL3ZpZXdzL3ZpZXcudXRpbHNcIlxuaW1wb3J0IHsgbWFrZU5hdlZpZXcgfSBmcm9tIFwiLi92aWV3cy9uYXZpZ2F0aW9uLnZpZXdcIlxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IG5hdlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3Rpb24tbmF2XCIpXG4gICAgY29uc3QgbmF2VmlldyA9IG1ha2VOYXZWaWV3KClcbiAgICBuYXZTZWN0aW9uPy5hcHBlbmRDaGlsZChuYXZWaWV3KVxuXG4gICAgY29uc3QgaG9tZVZpZXcgPSBtYWtlSG9tZVZpZXcoKVxuICAgIHJlbmRlclZpZXcoaG9tZVZpZXcpXG59XG5cbmluaXQoKVxuIl0sIm5hbWVzIjpbIm1ha2VQYXJhZ3JhcGgiLCJtYWtlSG9tZVZpZXciLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyYWdyYXBoIiwiYXBwZW5kQ2hpbGQiLCJtYWtlUG9ydGZvbGlvVmlldyIsInJlbmRlclZpZXciLCJOQVZfSVRFTVMiLCJtYWtlTmF2VmlldyIsIndyYXBwZXIiLCJmb3JFYWNoIiwibmF2SXRlbSIsIm5hdkxpbmsiLCJtYWtlTmF2TGluayIsImxhYmVsIiwidmlld0ZuIiwibGluayIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJ0ZXh0IiwiY2xlYXJNYWluV3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZSIsInJlbW92ZUNoaWxkIiwiaW5pdCIsIm5hdlNlY3Rpb24iLCJuYXZWaWV3IiwiaG9tZVZpZXciXSwic291cmNlUm9vdCI6IiJ9