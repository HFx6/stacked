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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ history)\n/* harmony export */ });\nasync function history(req, res1) {\n    if (req.method === 'POST') {\n        fetch(\"https://query2.finance.yahoo.com/v1/finance/search?q=\" + req.body.tickers.join(\",\") + \"&quotesCount=0&newsCount=40\").then((res)=>res.text()\n        ).then((data)=>{\n            res1.status(200).json(data);\n        }).catch((error)=>{\n            res1.json(error);\n            res1.status(404).end();\n            return resolve();\n        });\n        ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsSUFBRyxFQUFFLENBQUM7SUFDN0MsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQkMsS0FBSyxDQUFDLENBQXVELHlEQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBRyxNQUFFLENBQTZCLDhCQUNySEMsSUFBSSxFQUFDTixHQUFHLEdBQUlBLEdBQUcsQ0FBQ08sSUFBSTtVQUNwQkQsSUFBSSxFQUFDRSxJQUFJLEdBQUksQ0FBQztZQUNiUixJQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0YsSUFBSTtRQUMzQixDQUFDLEVBQ0FHLEtBQUssRUFBQ0MsS0FBSyxHQUFJLENBQUM7WUFDZlosSUFBRyxDQUFDVSxJQUFJLENBQUNFLEtBQUs7WUFDZFosSUFBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFSSxHQUFHO1lBQ25CLE1BQU0sQ0FBQ0MsT0FBTztRQUNoQixDQUFDOztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tlZC8uL3BhZ2VzL2FwaS9zZWFyY2guanM/NWQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoaXN0b3J5KHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9xdWVyeTIuZmluYW5jZS55YWhvby5jb20vdjEvZmluYW5jZS9zZWFyY2g/cT1cIityZXEuYm9keS50aWNrZXJzLmpvaW4oXCIsXCIpK1wiJnF1b3Rlc0NvdW50PTAmbmV3c0NvdW50PTQwXCIpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICByZXMuanNvbihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgIH0pOztcclxuICAgIH1cclxuICB9XHJcbiAgICAiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZldGNoIiwiYm9keSIsInRpY2tlcnMiLCJqb2luIiwidGhlbiIsInRleHQiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJlbmQiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/search.js"));
module.exports = __webpack_exports__;

})();