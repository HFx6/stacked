"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/opti";
exports.ids = ["pages/api/opti"];
exports.modules = {

/***/ "next/dist/shared/lib/utils":
/*!*********************************************!*\
  !*** external "next/dist/shared/lib/utils" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ "./pages/api/opti.js":
/*!***************************!*\
  !*** ./pages/api/opti.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ history)\n/* harmony export */ });\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"next/dist/shared/lib/utils\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function history(req, res1) {\n    if (req.method === 'POST') {\n        fetch(\"https://www.portfoliovisualizer.com/optimize-portfolio?s=y&goal=\" + req.body.version + \"&benchmark=-1&benchmarkSymbol=VOO&constrained=true&lastMonth=12&historicalVolatility=true&endYear=2021&mode=2&comparedAllocation=-1&startYear=2010&timePeriod=4&historicalReturns=true&robustOptimization=false&historicalCorrelations=true&firstMonth=1&groupConstraints=false&\" + req.body.alloc).then((res)=>res.text()\n        ).then((data)=>{\n            res1.status(200).json({\n                data\n            });\n        }).catch((error)=>{\n            res1.json(error);\n            res1.status(404).end();\n            return resolve();\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3B0aS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7QUFHakQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLElBQUcsRUFBRSxDQUFDO0lBQzdDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUJDLEtBQUssQ0FBQyxDQUFrRSxvRUFBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQU8sR0FBQyxDQUFrUixvUkFBQ0wsR0FBRyxDQUFDSSxJQUFJLENBQUNFLEtBQUssRUFDMVhDLElBQUksRUFBQ04sR0FBRyxHQUFJQSxHQUFHLENBQUNPLElBQUk7VUFDcEJELElBQUksRUFBQ0UsSUFBSSxHQUFJLENBQUM7WUFDYlIsSUFBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0Y7Z0JBQUFBLElBQUk7WUFBQSxDQUFDO1FBQzdCLENBQUMsRUFDQUcsS0FBSyxFQUFDQyxLQUFLLEdBQUksQ0FBQztZQUNmWixJQUFHLENBQUNVLElBQUksQ0FBQ0UsS0FBSztZQUNkWixJQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVJLEdBQUc7WUFDbkIsTUFBTSxDQUFDQyxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWNrZWQvLi9wYWdlcy9hcGkvb3B0aS5qcz84NWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoaXN0b3J5KHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cucG9ydGZvbGlvdmlzdWFsaXplci5jb20vb3B0aW1pemUtcG9ydGZvbGlvP3M9eSZnb2FsPVwiK3JlcS5ib2R5LnZlcnNpb24rXCImYmVuY2htYXJrPS0xJmJlbmNobWFya1N5bWJvbD1WT08mY29uc3RyYWluZWQ9dHJ1ZSZsYXN0TW9udGg9MTImaGlzdG9yaWNhbFZvbGF0aWxpdHk9dHJ1ZSZlbmRZZWFyPTIwMjEmbW9kZT0yJmNvbXBhcmVkQWxsb2NhdGlvbj0tMSZzdGFydFllYXI9MjAxMCZ0aW1lUGVyaW9kPTQmaGlzdG9yaWNhbFJldHVybnM9dHJ1ZSZyb2J1c3RPcHRpbWl6YXRpb249ZmFsc2UmaGlzdG9yaWNhbENvcnJlbGF0aW9ucz10cnVlJmZpcnN0TW9udGg9MSZncm91cENvbnN0cmFpbnRzPWZhbHNlJlwiK3JlcS5ib2R5LmFsbG9jKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2RhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICByZXMuanNvbihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAgICJdLCJuYW1lcyI6WyJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaGlzdG9yeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZldGNoIiwiYm9keSIsInZlcnNpb24iLCJhbGxvYyIsInRoZW4iLCJ0ZXh0IiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiZW5kIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/opti.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/opti.js"));
module.exports = __webpack_exports__;

})();