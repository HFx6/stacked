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
exports.id = "pages/api/history";
exports.ids = ["pages/api/history"];
exports.modules = {

/***/ "./pages/api/history.js":
/*!******************************!*\
  !*** ./pages/api/history.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ history)\n/* harmony export */ });\nasync function history(req, res1) {\n    if (req.method === 'POST') {\n        fetch(\"https://query1.finance.yahoo.com/v7/finance/download/\" + req.body.tickers + \"?period1=\" + req.body.earliestDate + \"&period2=\" + req.body.today + \"&interval=1d&events=history\").then((res)=>res.text()\n        ).then((data)=>{\n            res1.status(200).json({\n                data\n            });\n        }).catch((error)=>{\n            res1.json(error);\n            res1.status(404).end();\n            return resolve();\n        });\n        ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLElBQUcsRUFBRSxDQUFDO0lBQy9DLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUJDLEtBQUssQ0FBQyxDQUF1RCx5REFBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQU8sR0FBQyxDQUFXLGFBQUNMLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRSxZQUFZLEdBQUMsQ0FBVyxhQUFDTixHQUFHLENBQUNJLElBQUksQ0FBQ0csS0FBSyxHQUFDLENBQTZCLDhCQUN4S0MsSUFBSSxFQUFDUCxHQUFHLEdBQUlBLEdBQUcsQ0FBQ1EsSUFBSTtVQUNwQkQsSUFBSSxFQUFDRSxJQUFJLEdBQUksQ0FBQztZQUNiVCxJQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDRixJQUFJO1lBQUMsQ0FBQztRQUMvQixDQUFDLEVBQ0FHLEtBQUssRUFBQ0MsS0FBSyxHQUFJLENBQUM7WUFDZmIsSUFBRyxDQUFDVyxJQUFJLENBQUNFLEtBQUs7WUFDZGIsSUFBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFSSxHQUFHO1lBQ25CLE1BQU0sQ0FBQ0MsT0FBTztRQUNoQixDQUFDOztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tlZC8uL3BhZ2VzL2FwaS9oaXN0b3J5LmpzPzgzODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGlzdG9yeShyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9xdWVyeTEuZmluYW5jZS55YWhvby5jb20vdjcvZmluYW5jZS9kb3dubG9hZC9cIityZXEuYm9keS50aWNrZXJzK1wiP3BlcmlvZDE9XCIrcmVxLmJvZHkuZWFybGllc3REYXRlK1wiJnBlcmlvZDI9XCIrcmVxLmJvZHkudG9kYXkrXCImaW50ZXJ2YWw9MWQmZXZlbnRzPWhpc3RvcnlcIilcclxuICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICByZXMuanNvbihlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgIH0pOztcclxuICB9XHJcbn1cclxuICAiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZldGNoIiwiYm9keSIsInRpY2tlcnMiLCJlYXJsaWVzdERhdGUiLCJ0b2RheSIsInRoZW4iLCJ0ZXh0IiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiZW5kIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/history.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/history.js"));
module.exports = __webpack_exports__;

})();