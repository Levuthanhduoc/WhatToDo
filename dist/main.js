/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#content-box{\r\n    display: flex;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n#menu,#menu-tool{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-shrink: 0;\r\n    gap: 10px;\r\n    width: 250px;\r\n    background-color: rgba(209, 206, 206, 0.5);\r\n    box-shadow: 1px 0px 0 2px rgba(187, 179, 179,0.6);\r\n}\r\n#menu >button{\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-size: 1em;\r\n}\r\n.icon{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.logo{\r\n    width: 100px;\r\n    height: 80px;\r\n    opacity: 0.5;\r\n}\r\n#navigator{\r\n    border-top: rgba(187, 179, 179,0.6) 1px solid ;\r\n    padding: 10px;\r\n    overflow: auto;\r\n    gap: 10px;\r\n}\r\n#navigator>div{\r\n    text-align: center;\r\n}\r\n.selected{\r\n    border: 1px rgba(187, 179, 179,0.6) solid;\r\n    background-color: white;\r\n}\r\n#tool{\r\n    display: flex;\r\n    position: fixed;\r\n    background-color: white;\r\n    bottom: 0;\r\n    width: 100vw;\r\n    height: 50px;\r\n}\r\n#menu-tool{\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n#menu-tool>button,#content-tool>button {\r\n    display: flex;\r\n    border: none;\r\n    align-items: center;\r\n    font-size: 1em;\r\n    gap: 10px;\r\n}\r\n#content-tool{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n\r\n}\r\n#content-tool>button{\r\n    background-color: white;\r\n}\r\n#content-tool>button:hover{\r\n    background-color: rgba(187, 179, 179,0.6);\r\n}\r\n#infoList{\r\n    position: absolute;\r\n    border: black 1px solid;\r\n    background-color: rgb(153, 206, 250);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    width: 220px;\r\n    height: 100px;\r\n    bottom: 50px;\r\n    left:10px;\r\n}\r\n#infoList>form{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n}\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 90px 10px 90px 10px;\r\n    width: 100%;\r\n    overflow: auto;\r\n    align-items: center;\r\n\r\n}\r\n.inlineInput{\r\n    border: none;\r\n    background:none;\r\n}\r\n.todo-box{\r\n    border: black 1px solid;\r\n    padding: 10px 10px 10px 10px;\r\n    width: 500px;\r\n}\r\n.list-title{\r\n    font-size: 1.1em;\r\n}\r\n#blockAll{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(85, 83, 83,0.5);\r\n    position: absolute;\r\n}\r\n#editOption{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 250px;\r\n    background-color: rgb(235, 180, 98);\r\n    padding: 10px;\r\n    border: 1px black solid;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://whattodo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://whattodo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://whattodo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://whattodo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://whattodo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Create: () => (/* binding */ Create),\n/* harmony export */   NewList: () => (/* binding */ NewList),\n/* harmony export */   addToDo: () => (/* binding */ addToDo),\n/* harmony export */   delToDo: () => (/* binding */ delToDo),\n/* harmony export */   deleteList: () => (/* binding */ deleteList),\n/* harmony export */   enableAllButton: () => (/* binding */ enableAllButton),\n/* harmony export */   removePopup: () => (/* binding */ removePopup),\n/* harmony export */   save: () => (/* binding */ save),\n/* harmony export */   today: () => (/* binding */ today)\n/* harmony export */ });\n/* harmony import */ var _addElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElement */ \"./src/addElement.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\r\n\r\n\r\nfunction today(){ \r\n    let target = document.querySelector(\"#today\");\r\n    target.addEventListener(\"click\",()=>{\r\n        _clearContent();\r\n        _clearNav();\r\n        let nav = document.querySelector(\"#navigator\");\r\n        let date = (0,_list__WEBPACK_IMPORTED_MODULE_1__.getToday)();\r\n        if(!isDataExit(date)){\r\n            emptyMessage();\r\n            return;\r\n        }\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.todoList)(date);\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.addToNav)(date);\r\n    })\r\n}\r\n\r\nfunction NewList(){\r\n    let target = document.querySelector(\"#newList\");\r\n    target.addEventListener(\"click\",()=>{\r\n        let form = document.querySelector(\"#infoList\");\r\n        form !== null?form.remove():\"\";\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.infoList)(target);\r\n    })\r\n}\r\n\r\nfunction deleteList(target){\r\n    target.addEventListener(\"click\",(e)=>{\r\n        let list = document.querySelector(\".selected\");\r\n        let [id,date] = list.dataset.id.split(\" \");\r\n        let data = (0,_list__WEBPACK_IMPORTED_MODULE_1__.getLocalData)();\r\n        (data[date]).splice(Number(id),1);\r\n        localStorage.setItem(\"data\",JSON.stringify(data));\r\n        _clearContent();\r\n        _clearNav();\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.todoList)(date);\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.addToNav)(date);\r\n        e.target.parentNode.parentNode.remove();\r\n    })\r\n}\r\n\r\nfunction addToDo(target){\r\n    target.addEventListener(\"click\",()=>{\r\n        let place = document.querySelector(\"#editOption>ul\");\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.addNewTodo)(place,\"new todo\");\r\n    })\r\n}\r\n\r\nfunction delToDo(target){\r\n    target.addEventListener(\"click\",(e)=>{\r\n        e.target.parentNode.remove();\r\n    })\r\n}\r\n\r\nfunction Create(target){\r\n    target.addEventListener(\"click\",(e)=>{\r\n        let date = document.querySelector(\"#DateInput\");\r\n        let title = document.querySelector(\"#TitleInput\");\r\n        if(isInputEmty(date.value) && isInputEmty(title.value)){\r\n            return;\r\n        }\r\n        if(!(0,_list__WEBPACK_IMPORTED_MODULE_1__.popUpOverWrite)(date.value,title.value)){\r\n            return;\r\n        }\r\n        (0,_list__WEBPACK_IMPORTED_MODULE_1__.setLocalData)(date.value,title.value,\"\",[]);\r\n        (0,_list__WEBPACK_IMPORTED_MODULE_1__.selfDes)(e);\r\n    })\r\n}\r\n\r\nfunction listEdit(){\r\n    let target = document.querySelector(\"#listEdit\");\r\n    let place = document.querySelector(\"#content-box\");\r\n    target.addEventListener(\"click\",()=>{\r\n        let nav = document.querySelector(\"#navigator\");\r\n        let content = nav.childNodes;\r\n        let listIndex = _getSelectedID(content);\r\n        if(listIndex){\r\n            (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.addEditTable)(place,listIndex);\r\n        }\r\n    })\r\n}\r\n\r\nfunction save(target){\r\n    target.addEventListener(\"click\",(e)=>{\r\n        let date = document.querySelector(\".time.inlineInput\");\r\n        let title = document.querySelector(\".title.inlineInput\");\r\n        let content = document.querySelectorAll(\".content.inlineInput\");\r\n        content = Array.from(content);\r\n        let dateData = (0,_list__WEBPACK_IMPORTED_MODULE_1__.checkInlineInput)(date.value,date.placeholder);\r\n        let titleData = (0,_list__WEBPACK_IMPORTED_MODULE_1__.checkInlineInput)(title.value,title.placeholder);\r\n        let contentData = [];\r\n        for(let i of content){\r\n            contentData.push((0,_list__WEBPACK_IMPORTED_MODULE_1__.checkInlineInput)(i.value,i.placeholder));\r\n        }\r\n        (0,_list__WEBPACK_IMPORTED_MODULE_1__.setLocalData)(dateData,titleData,\"\",contentData);\r\n        _clearContent();\r\n        (0,_addElement__WEBPACK_IMPORTED_MODULE_0__.todoList)(dateData);\r\n        e.target.parentNode.parentNode.remove();\r\n    })\r\n}\r\n\r\nfunction removePopup(){\r\n    document.addEventListener(\"click\",(e)=>{\r\n        if(!removeCondition(e.target)){\r\n            setTimeout(()=>{removeItem()},500);\r\n        }\r\n    })\r\n}\r\nfunction removeCondition(target){\r\n    if(target.id ===\"infoList\" || target.id ===\"newList\" || target.nodeName === \"INPUT\" || target.nodeName ===\"LABEL\" \r\n    || target.nodeName === \"FORM\" || target.id === \"Create-button\"){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction _getSelectedID(array){\r\n    for(let i of array){\r\n        if(i.classList == \"selected\"){\r\n            return i.dataset.id.split(\" \");\r\n        }\r\n    }\r\n    return false\r\n}\r\nfunction _clearContent(){\r\n    let content = document.querySelector(\"#content\");\r\n    content.innerHTML=\"\";\r\n}\r\n\r\nfunction _clearNav(){\r\n    let nav = document.querySelector(\"#navigator\");\r\n    nav.innerHTML =\"\";\r\n}\r\n\r\nfunction removeItem(){\r\n    let infoList = document.querySelector(\"#infoList\");\r\n    infoList !== null?infoList.remove():\"\";\r\n\r\n}\r\nfunction isInputEmty(value){\r\n    if(value ===\"\"){\r\n        return true\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction isDataExit(value){\r\n    let data = (0,_list__WEBPACK_IMPORTED_MODULE_1__.getLocalData)();\r\n    if(data.hasOwnProperty(value)){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction emptyMessage(){\r\n    let nav = document.querySelector(\"#navigator\");\r\n    nav.textContent = \"WOW so empty! Let create new list!\"\r\n}\r\n\r\nfunction enableAllButton() {\r\n    today();\r\n    NewList();\r\n    removePopup();\r\n    listEdit();\r\n}\r\n\n\n//# sourceURL=webpack://whattodo/./src/Button.js?");

/***/ }),

/***/ "./src/addElement.js":
/*!***************************!*\
  !*** ./src/addElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEditTable: () => (/* binding */ addEditTable),\n/* harmony export */   addInlineInput: () => (/* binding */ addInlineInput),\n/* harmony export */   addNewTodo: () => (/* binding */ addNewTodo),\n/* harmony export */   addToNav: () => (/* binding */ addToNav),\n/* harmony export */   infoList: () => (/* binding */ infoList),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/Button.js\");\n\r\n\r\nconst addDiv= (target,name,type)=>{\r\n    let newDiv = document.createElement(\"div\");\r\n    if(name != \"\" && name != null){\r\n        newDiv.setAttribute(type,name);\r\n    }\r\n    target.appendChild(newDiv);\r\n    return newDiv\r\n}\r\nconst addList = (target)=>{\r\n    let newList = document.createElement(\"ul\");\r\n    newList.setAttribute(\"class\",\"list\");\r\n    target.appendChild(newList);\r\n    return newList;\r\n}\r\nconst addListContent =(target,array)=>{\r\n    for(let i of array){\r\n        let content = document.createElement(\"li\");\r\n        content.textContent = i;\r\n        target.appendChild(content);\r\n    } \r\n}\r\nconst infoList = (target)=>{\r\n    let content = document.querySelector(\"#content-box\");\r\n    let info = addDiv(target,\"infoList\",\"id\");\r\n    let form = document.createElement(\"form\");\r\n    content.appendChild(info);\r\n    info.appendChild(form);\r\n    addInput(form,\"Title\",\"text\");\r\n    addInput(form,\"Date\",\"date\");\r\n    addbutton(form,\"Create\",_Button__WEBPACK_IMPORTED_MODULE_1__.Create);\r\n}\r\n\r\nconst todoList=(date)=>{\r\n    let array = (0,_list__WEBPACK_IMPORTED_MODULE_0__.getLocalData)();\r\n    array = array[date];\r\n    let content = document.querySelector(\"#content\");\r\n    let index =0;\r\n    for(let i of array){\r\n        let box = addDiv(content,\"todo-box\",\"class\");\r\n        let title = addDiv(box,\"list-title\",\"class\");\r\n        title.textContent = i.title;\r\n        let list = addList(box);\r\n        list.setAttribute(\"id\",`list-${index}`)\r\n        addListContent(list,i.content);\r\n        index++; \r\n    }   \r\n}\r\nconst addToNav = (date)=>{\r\n    let array = (0,_list__WEBPACK_IMPORTED_MODULE_0__.getLocalData)();\r\n    array = array[date];\r\n    let nav = document.querySelector(\"#navigator\");\r\n    let index = 0;\r\n    for(let i of array){\r\n        let tab = addDiv(nav);\r\n        tab.textContent =`${i.title}`;\r\n        tab.setAttribute(\"data-id\",`${index} ${date}`);\r\n        (0,_list__WEBPACK_IMPORTED_MODULE_0__.selectedOnClick)(tab);\r\n        index++;\r\n    }   \r\n}\r\n\r\nconst addInlineInput = (target,name,placeholder)=>{\r\n    let input = document.createElement(\"input\");\r\n    input.setAttribute(\"type\",\"text\");\r\n    input.classList =`${name} inlineInput`;\r\n    input.setAttribute(\"placeholder\",`${placeholder}`);\r\n    target.appendChild(input);\r\n    return input;\r\n}\r\n\r\nconst addEditTable = (target,info)=>{\r\n    let day =info[1],id = info[0];\r\n    let block = addDiv(target,\"blockAll\",\"id\");\r\n    let box = addDiv(block,\"editOption\",\"id\");\r\n    let data = (0,_list__WEBPACK_IMPORTED_MODULE_0__.getLocalData)();\r\n    data = data[day][id];\r\n    let time = addInlineInput(box,\"time\",day);\r\n    time.setAttribute(\"onfocus\",`this.type =\"date\"`);\r\n    addInlineInput(box,\"title\",data.title);\r\n    let list = addList(box);\r\n    if(data.content.length === 0){\r\n        addNewTodo(list,\"new todo\");\r\n    }else{\r\n        for(let i of data.content){\r\n            addNewTodo(list,i);\r\n        }\r\n    }\r\n    addbutton(box,\"NewTodo\",_Button__WEBPACK_IMPORTED_MODULE_1__.addToDo);\r\n    addbutton(box,\"SAVE\",_Button__WEBPACK_IMPORTED_MODULE_1__.save);\r\n    addbutton(box,\"DELETE\",_Button__WEBPACK_IMPORTED_MODULE_1__.deleteList);\r\n}\r\n\r\nconst addNewTodo = (target,placeholder)=>{\r\n    let smallBox = addDiv(target,\"small-todo-box\",\"class\");\r\n    addInlineInput(smallBox,\"content\",placeholder);\r\n    addbutton(smallBox,\"-\",_Button__WEBPACK_IMPORTED_MODULE_1__.delToDo);\r\n}\r\n\r\nconst addbutton = (target,name,event)=>{\r\n    let Button = document.createElement(\"button\");\r\n    Button.setAttribute(\"type\",\"Button\");\r\n    Button.setAttribute(\"id\",`${name}-button`);\r\n    Button.textContent = `${name}`;\r\n    target.appendChild(Button);\r\n    event(Button);\r\n}\r\n\r\nconst addListNote = (target)=>{\r\n    let newNote= document.createElement(\"li\");\r\n    newNote.setAttribute(\"class\",\"Note\");\r\n    target.appendChild(newList);\r\n    return newNote;\r\n}\r\nconst addInput=(target,name,type)=>{\r\n    let NameLabel= document.createElement(\"label\");\r\n    NameLabel.setAttribute(\"for\",`${name}Input`);\r\n    NameLabel.textContent = `${name}: `; \r\n    let nameInput = document.createElement(\"input\");\r\n    nameInput.setAttribute(\"type\",type);\r\n    nameInput.setAttribute(\"id\",`${name}Input`);\r\n    target.appendChild(NameLabel);\r\n    target.appendChild(nameInput);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://whattodo/./src/addElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/Button.js\");\n\r\n\r\n\r\n\r\nfunction palcehoder(){\r\n    let data = localStorage.getItem(\"data\");\r\n    let obj = {};\r\n    data === null?localStorage.setItem(\"data\",JSON.stringify(obj)):\"\";\r\n}palcehoder();\r\n\r\nfunction page(){\r\n\r\n    (0,_Button__WEBPACK_IMPORTED_MODULE_2__.enableAllButton)();\r\n}page();\n\n//# sourceURL=webpack://whattodo/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkInlineInput: () => (/* binding */ checkInlineInput),\n/* harmony export */   getLocalData: () => (/* binding */ getLocalData),\n/* harmony export */   getToday: () => (/* binding */ getToday),\n/* harmony export */   popUpOverWrite: () => (/* binding */ popUpOverWrite),\n/* harmony export */   selectedOnClick: () => (/* binding */ selectedOnClick),\n/* harmony export */   selfDes: () => (/* binding */ selfDes),\n/* harmony export */   setLocalData: () => (/* binding */ setLocalData)\n/* harmony export */ });\nfunction setLocalData(date,title,note,content){\r\n    let data = getLocalData();\r\n    let newdata = {title,note,content};\r\n    if(!data.hasOwnProperty(`${date}`)){\r\n        data[`${date}`] = [];\r\n    }\r\n    for(let i of data[`${date}`]){\r\n        if(i.title === title && data[`${date}`] != \"\"){\r\n            i.note = note;\r\n            i.content = content;\r\n            localStorage.setItem(\"data\",JSON.stringify(data));\r\n            return;\r\n        }\r\n    }\r\n    data[`${date}`].push(newdata);\r\n    localStorage.setItem(\"data\",JSON.stringify(data));\r\n}\r\nfunction getLocalData(){\r\n    let data = localStorage.getItem(\"data\");\r\n    data = JSON.parse(data);\r\n    return data;\r\n}\r\n\r\nfunction getToday(){\r\n    let calendar = new Date();\r\n    let day = calendar.getDate(),month =calendar.getMonth() + 1, year = calendar.getFullYear();\r\n    if(Number(month) < 10){\r\n        month = `0${month}`;\r\n    }\r\n    return `${year}-${month}-${day}`;\r\n}\r\n\r\nfunction selectedOnClick(target){\r\n    target.addEventListener(\"click\",(e)=>{\r\n        _deSelectedAll(e.target.parentNode);\r\n        e.target.classList = \"selected\";\r\n    })\r\n}\r\n\r\nfunction _deSelectedAll(target){\r\n    let arr = target.childNodes;\r\n    for(let i of arr){\r\n        i.classList =\"\";\r\n    }\r\n}\r\n\r\nfunction popUpOverWrite(date,key){\r\n    let data = localStorage.getItem(\"data\");\r\n    data = JSON.parse(data);\r\n    if(data.hasOwnProperty(date)){\r\n        data = data[date];\r\n        for(let i of data){\r\n            if(i.title === key){\r\n                if(confirm(\"This List aready exist! Overwrite ?\")){\r\n                    return true;\r\n                }else{\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nfunction checkInlineInput(value,oldValue){\r\n    if(value === \"\"){\r\n        return oldValue;\r\n    }\r\n    return value;\r\n}\r\n\r\nfunction selfDes(event){\r\n    event.target.parentNode.parentNode.remove();\r\n}\r\n\n\n//# sourceURL=webpack://whattodo/./src/list.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;