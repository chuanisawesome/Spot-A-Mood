/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/History/History.js":
/*!*******************************************!*\
  !*** ./src/components/History/History.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HistoryStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HistoryStyles */ \"./src/components/History/HistoryStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/chuan-lichang/Downloads/spot_a_mood/src/components/History/History.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar History = function History() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    id: \"history\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {\n      divider: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {\n      children: \"Spotify Mood History\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionText, {\n      children: [\"View your music history in realtime with Spotify\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 55\n      }, _this), \"Recent Tracks\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: musicHistory.map(function (e, index) {\n          return TableItem(e, index);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = History;\n\nvar RecentlyPlayed = function RecentlyPlayed() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    id: \"recently-played\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionText, {\n      children: [\"Recent Tracks\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 20\n      }, _this), \"song title\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: musicHistory.map(function (e, index) {\n          return TableItem(e, index);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = RecentlyPlayed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (History);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"History\");\n$RefreshReg$(_c2, \"RecentlyPlayed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeS9IaXN0b3J5LmpzPzUzNTUiXSwibmFtZXMiOlsiSGlzdG9yeSIsIm11c2ljSGlzdG9yeSIsIm1hcCIsImUiLCJpbmRleCIsIlRhYmxlSXRlbSIsIlJlY2VudGx5UGxheWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsc0JBQ2QsOERBQUMsNkRBQUQ7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFBLDRCQUNFLDhEQUFDLG9FQUFEO0FBQWdCLGFBQU87QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLGlFQUFEO0FBQUEsa0ZBQ2tEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbEQsZ0NBR0U7QUFBQSxrQkFBUUMsWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLGlCQUFjQyxTQUFTLENBQUNGLENBQUQsRUFBSUMsS0FBSixDQUF2QjtBQUFBLFNBQWpCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O0tBQU1KLE87O0FBWU4sSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNyQiw4REFBQyw2REFBRDtBQUFTLE1BQUUsRUFBQyxpQkFBWjtBQUFBLDJCQUNFLDhEQUFDLGlFQUFEO0FBQUEsK0NBQ2U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURmLDZCQUdFO0FBQUEsa0JBQVFMLFlBQVksQ0FBQ0MsR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSxpQkFBY0MsU0FBUyxDQUFDRixDQUFELEVBQUlDLEtBQUosQ0FBdkI7QUFBQSxTQUFqQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHFCO0FBQUEsQ0FBdkI7O01BQU1FLGM7QUFXTiwrREFBZU4sT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hpc3RvcnkvSGlzdG9yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nIH0gZnJvbSAnLi9IaXN0b3J5U3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBIaXN0b3J5ID0gKCkgPT4gKFxuICA8U2VjdGlvbiBpZD1cImhpc3RvcnlcIj5cbiAgICA8U2VjdGlvbkRpdmlkZXIgZGl2aWRlci8+XG4gICAgPFNlY3Rpb25UaXRsZT5TcG90aWZ5IE1vb2QgSGlzdG9yeTwvU2VjdGlvblRpdGxlPlxuICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgIFZpZXcgeW91ciBtdXNpYyBoaXN0b3J5IGluIHJlYWx0aW1lIHdpdGggU3BvdGlmeTxiciAvPlxuICAgICAgUmVjZW50IFRyYWNrc1xuICAgICAgPHRib2R5PnttdXNpY0hpc3RvcnkubWFwKChlLCBpbmRleCkgPT4gVGFibGVJdGVtKGUsIGluZGV4KSl9PC90Ym9keT5cbiAgICA8L1NlY3Rpb25UZXh0PlxuICA8L1NlY3Rpb24+XG4pO1xuXG5jb25zdCBSZWNlbnRseVBsYXllZCA9ICgpID0+IChcbiAgPFNlY3Rpb24gaWQ9XCJyZWNlbnRseS1wbGF5ZWRcIj5cbiAgICA8U2VjdGlvblRleHQ+XG4gICAgICBSZWNlbnQgVHJhY2tzPGJyIC8+XG4gICAgICBzb25nIHRpdGxlXG4gICAgICA8dGJvZHk+e211c2ljSGlzdG9yeS5tYXAoKGUsIGluZGV4KSA9PiBUYWJsZUl0ZW0oZSwgaW5kZXgpKX08L3Rib2R5PlxuICAgIDwvU2VjdGlvblRleHQ+XG5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/History/History.js\n");

/***/ })

});