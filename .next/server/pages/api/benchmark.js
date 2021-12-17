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
exports.id = "pages/api/benchmark";
exports.ids = ["pages/api/benchmark"];
exports.modules = {

/***/ "./pages/api/benchmark.js":
/*!********************************!*\
  !*** ./pages/api/benchmark.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ history)\n/* harmony export */ });\nasync function history(req, res1) {\n    if (req.method === 'POST') {\n        console.log(\"https://query2.finance.yahoo.com/v8/finance/chart/\" + req.body.tickers + \"?period1=\" + req.body.earliestDate + \"&period2=\" + req.body.today + \"&interval=1wk\");\n        fetch(\"https://query2.finance.yahoo.com/v8/finance/chart/\" + req.body.tickers + \"?period1=\" + req.body.earliestDate + \"&period2=\" + req.body.today + \"&interval=1wk\").then((res)=>res.text()\n        ).then((data)=>{\n            res1.status(200).json(data);\n        }).catch((error)=>{\n            res1.json(error);\n            res1.status(404).end();\n            return resolve();\n        });\n        ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYmVuY2htYXJrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsSUFBRyxFQUFFLENBQUM7SUFDN0MsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0Qsc0RBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPLEdBQUMsQ0FBVyxhQUFDTixHQUFHLENBQUNLLElBQUksQ0FBQ0UsWUFBWSxHQUFDLENBQVcsYUFBQ1AsR0FBRyxDQUFDSyxJQUFJLENBQUNHLEtBQUssR0FBQyxDQUFlO1FBQ2hLQyxLQUFLLENBQUMsQ0FBb0Qsc0RBQUNULEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPLEdBQUMsQ0FBVyxhQUFDTixHQUFHLENBQUNLLElBQUksQ0FBQ0UsWUFBWSxHQUFDLENBQVcsYUFBQ1AsR0FBRyxDQUFDSyxJQUFJLENBQUNHLEtBQUssR0FBQyxDQUFlLGdCQUN2SkUsSUFBSSxFQUFDVCxHQUFHLEdBQUlBLEdBQUcsQ0FBQ1UsSUFBSTtVQUNwQkQsSUFBSSxFQUFDRSxJQUFJLEdBQUksQ0FBQztZQUNiWCxJQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0YsSUFBSTtRQUMzQixDQUFDLEVBQ0FHLEtBQUssRUFBQ0MsS0FBSyxHQUFJLENBQUM7WUFDZmYsSUFBRyxDQUFDYSxJQUFJLENBQUNFLEtBQUs7WUFDZGYsSUFBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxFQUFFSSxHQUFHO1lBQ25CLE1BQU0sQ0FBQ0MsT0FBTztRQUNoQixDQUFDOztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tlZC8uL3BhZ2VzL2FwaS9iZW5jaG1hcmsuanM/YjYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoaXN0b3J5KHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJodHRwczovL3F1ZXJ5Mi5maW5hbmNlLnlhaG9vLmNvbS92OC9maW5hbmNlL2NoYXJ0L1wiK3JlcS5ib2R5LnRpY2tlcnMrXCI/cGVyaW9kMT1cIityZXEuYm9keS5lYXJsaWVzdERhdGUrXCImcGVyaW9kMj1cIityZXEuYm9keS50b2RheStcIiZpbnRlcnZhbD0xd2tcIik7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9xdWVyeTIuZmluYW5jZS55YWhvby5jb20vdjgvZmluYW5jZS9jaGFydC9cIityZXEuYm9keS50aWNrZXJzK1wiP3BlcmlvZDE9XCIrcmVxLmJvZHkuZWFybGllc3REYXRlK1wiJnBlcmlvZDI9XCIrcmVxLmJvZHkudG9kYXkrXCImaW50ZXJ2YWw9MXdrXCIpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICByZXMuanNvbihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgIH0pOztcclxuICAgIH1cclxuICB9XHJcbiAgICAiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidGlja2VycyIsImVhcmxpZXN0RGF0ZSIsInRvZGF5IiwiZmV0Y2giLCJ0aGVuIiwidGV4dCIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImVuZCIsInJlc29sdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/benchmark.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/benchmark.js"));
module.exports = __webpack_exports__;

})();