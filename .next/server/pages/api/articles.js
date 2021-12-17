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
exports.id = "pages/api/articles";
exports.ids = ["pages/api/articles"];
exports.modules = {

/***/ "./pages/api/articles.js":
/*!*******************************!*\
  !*** ./pages/api/articles.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ history)\n/* harmony export */ });\nasync function history(req, res1) {\n    if (req.method === 'POST') {\n        fetch(\"https://finance.yahoo.com/caas/content/article/?uuid=\" + req.body.uuids.join(\",\")).then((res)=>res.text()\n        ).then((data)=>{\n            res1.status(200).json(data);\n        }).catch((error)=>{\n            res1.json(error);\n            res1.status(404).end();\n            return resolve();\n        });\n        ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxJQUFHLEVBQUUsQ0FBQztJQUM3QyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCQyxLQUFLLENBQUMsQ0FBdUQseURBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFHLEtBQ3BGQyxJQUFJLEVBQUNOLEdBQUcsR0FBSUEsR0FBRyxDQUFDTyxJQUFJO1VBQ3BCRCxJQUFJLEVBQUNFLElBQUksR0FBSSxDQUFDO1lBQ2JSLElBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRixJQUFJO1FBQzNCLENBQUMsRUFDQUcsS0FBSyxFQUFDQyxLQUFLLEdBQUksQ0FBQztZQUNmWixJQUFHLENBQUNVLElBQUksQ0FBQ0UsS0FBSztZQUNkWixJQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVJLEdBQUc7WUFDbkIsTUFBTSxDQUFDQyxPQUFPO1FBQ2hCLENBQUM7O0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFja2VkLy4vcGFnZXMvYXBpL2FydGljbGVzLmpzP2Q4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGlzdG9yeShyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICBmZXRjaChcImh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vY2Fhcy9jb250ZW50L2FydGljbGUvP3V1aWQ9XCIrcmVxLmJvZHkudXVpZHMuam9pbihcIixcIikpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICByZXMuanNvbihlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgIH0pOztcclxuICAgIH1cclxuICB9XHJcbiAgICAiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZldGNoIiwiYm9keSIsInV1aWRzIiwiam9pbiIsInRoZW4iLCJ0ZXh0IiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiZW5kIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/articles.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/articles.js"));
module.exports = __webpack_exports__;

})();