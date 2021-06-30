/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_preview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/preview.js */ \"./src/js/preview.js\");\n/* harmony import */ var _js_preview_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_preview_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_profiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/profiles.js */ \"./src/js/profiles.js\");\n/* harmony import */ var _js_profiles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_profiles_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_listview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/listview.js */ \"./src/js/listview.js\");\n/* harmony import */ var _js_listview_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_listview_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_sova_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sova.png */ \"./src/assets/sova.png\");\n/* harmony import */ var _assets_add_circle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/add_circle.svg */ \"./src/assets/add_circle.svg\");\n/* harmony import */ var _assets_play_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/play_circle.svg */ \"./src/assets/play_circle.svg\");\n/* harmony import */ var _assets_thumb_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/thumb.svg */ \"./src/assets/thumb.svg\");\n/* harmony import */ var _assets_thumb_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/thumb_down.svg */ \"./src/assets/thumb_down.svg\");\n/* harmony import */ var _assets_remove_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/remove.svg */ \"./src/assets/remove.svg\");\n/* harmony import */ var _assets_arrow_drop_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/arrow_drop.svg */ \"./src/assets/arrow_drop.svg\");\n/* harmony import */ var _assets_avatar_01_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/avatar_01.png */ \"./src/assets/avatar_01.png\");\n/* harmony import */ var _assets_avatar_02_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/avatar_02.png */ \"./src/assets/avatar_02.png\");\n/* harmony import */ var _assets_avatar_03_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/avatar_03.png */ \"./src/assets/avatar_03.png\");\n/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/avatar.png */ \"./src/assets/avatar.png\");\n/* harmony import */ var _assets_starwars_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/starwars.png */ \"./src/assets/starwars.png\");\n/* harmony import */ var _assets_notifications_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/notifications.svg */ \"./src/assets/notifications.svg\");\n/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/search.svg */ \"./src/assets/search.svg\");\n/* harmony import */ var _assets_cavaleiros_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/cavaleiros.png */ \"./src/assets/cavaleiros.png\");\n\n\n\n // Images\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Netflix/./src/js/index.js?");

/***/ }),

/***/ "./src/js/listview.js":
/*!****************************!*\
  !*** ./src/js/listview.js ***!
  \****************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar movies = [{\n  title: 'T1E2 - SOVA',\n  image: './assets/sova.png'\n}, {\n  title: 'T1E2 - Avatar',\n  image: './assets/avatar.png'\n}, {\n  title: 'T1E1 - Cavaleiros',\n  image: './assets/cavaleiros.png'\n}, {\n  title: 'T1E2 - Cavaleiros',\n  image: './assets/cavaleiros.png'\n}, {\n  title: 'T1E2 - Star Wars',\n  image: './assets/starwars.png'\n}];\n\nvar listView = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(listView, _HTMLElement);\n\n  var _super = _createSuper(listView);\n\n  function listView() {\n    var _this;\n\n    _classCallCheck(this, listView);\n\n    _this = _super.call(this);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    var list = '';\n    movies.forEach(component);\n\n    function component(model) {\n      list += \"\\n        <li>\\n          <pre-view title=\\\"\".concat(model.title, \"\\\" image=\\\"\").concat(model.image, \"\\\"></pre-view>\\n        </li>\\n      \");\n    }\n\n    var style = document.createElement('style');\n    style.innerText = \"\\n      .lista {\\n        display: flex;\\n        min-height: 250px;\\n        overflow-x: scroll;\\n        overflow-y: hidden;\\n        white-space: nowrap;\\n        scroll-behavior: smooth;\\n        // margin-right: 47px;\\n        \\n      }\\n\\n      ::-webkit-scrollbar { \\n        display: none; \\n      }\\n\\n      #Right {\\n        position: fixed;\\n        top: 114px;\\n        height: 188px;\\n        right: 0px;\\n        border: none;\\n        width: 60px;\\n        color: red;\\n        background: rgba(0,0,0, 0.4);\\n      }\\n\\n      #left {\\n        position: fixed;\\n        top: 114px;\\n        height: 188px;\\n        left: 0px;\\n        border: none;\\n        width: 60px;\\n        color: red;\\n        background: rgba(0,0,0, 0.4);\\n      }\\n\\n      #arrowleft {\\n        width: 70px;\\n        position: absolute;\\n        bottom: 36%;\\n        right: -6%;\\n        transform: rotate(-90deg);\\n      }\\n\\n      #arrowright {\\n        width: 70px;\\n        position: absolute;\\n        bottom: 36%;\\n        right: -6%;\\n        transform: rotate(90deg);\\n      }\\n    \";\n    var listOrder = document.createElement('ul');\n    var buttonLeft = document.createElement('button');\n    var buttonRight = document.createElement('button');\n    var arrowLeft = document.createElement('img');\n    var arrowright = document.createElement('img');\n    arrowLeft.src = \"../assets/arrow_drop.svg\";\n    arrowLeft.setAttribute('id', 'arrowleft');\n    arrowright.src = \"../assets/arrow_drop.svg\";\n    arrowright.setAttribute('id', 'arrowright');\n    listOrder.setAttribute('class', 'lista');\n    listOrder.setAttribute('id', 'container');\n    buttonLeft.setAttribute('id', 'left');\n    buttonRight.setAttribute('id', 'Right');\n    listOrder.innerHTML = list;\n    buttonRight.appendChild(arrowLeft);\n    buttonLeft.appendChild(arrowright);\n\n    _this.shadowRoot.appendChild(listOrder);\n\n    _this.shadowRoot.appendChild(style);\n\n    _this.shadowRoot.appendChild(buttonLeft);\n\n    _this.shadowRoot.appendChild(buttonRight);\n\n    return _this;\n  }\n\n  _createClass(listView, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var lista = this.shadowRoot.getElementById('container');\n      var scrollBtnRight = this.shadowRoot.getElementById('Right');\n      scrollBtnRight.addEventListener('click', function (event) {\n        event.target.onclick = function () {\n          lista.scrollLeft += 320;\n        };\n      });\n      var scrollBtnLeft = this.shadowRoot.getElementById('left');\n      scrollBtnLeft.addEventListener('click', function (event) {\n        event.target.onclick = function () {\n          lista.scrollLeft -= 400;\n        };\n      });\n    }\n  }, {\n    key: \"disconectedCallback\",\n    value: function disconectedCallback() {\n      var scrollBtnLeft = this.shadowRoot.getElementById('left');\n      scrollBtnLeft.removeEventListener();\n    }\n  }]);\n\n  return listView;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('list-view', listView);\n\n//# sourceURL=webpack://Netflix/./src/js/listview.js?");

/***/ }),

/***/ "./src/js/preview.js":
/*!***************************!*\
  !*** ./src/js/preview.js ***!
  \***************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n<div id=\\\"card-preview\\\" class=\\\"preview\\\">\\n  <div id=\\\"card\\\" class=\\\"card\\\">\\n    <img id=\\\"img-card\\\" class=\\\"card__image\\\" />\\n    <div id=\\\"card-actions\\\" class=\\\"card__actions\\\">\\n      <div id=\\\"btn-card\\\" class=\\\"card__btn\\\">\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/play_circle.svg\\\" />\\n        </button>\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/add_circle.svg\\\" />\\n        </button>\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/thumb.svg\\\" />\\n        </button>\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/thumb_down.svg\\\" />\\n        </button>\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/remove.svg\\\" />\\n        </button>\\n        <button class=\\\"card__btn--card\\\">\\n          <img src=\\\"../assets/arrow_drop.svg\\\" />\\n        </button>\\n      </div>\\n      <div class=\\\"card__text\\\">\\n        <h3 id=\\\"card-title\\\"></h3>\\n      </div>\\n      <div class=\\\"card__progress\\\">\\n        <div class=\\\"card__bar\\\">\\n          <div class=\\\"card__bar card__bar--color\\\"></div>\\n        </div>\\n        <h3 class=\\\"card__text\\\">7 de 21min</h3>\\n      </div>\\n    </div>\\n    <div id=\\\"bar-preview\\\" class=\\\"card__progress card__progress--preview\\\">\\n      <div class=\\\"card__bar\\\">\\n        <div class=\\\"card__bar card__bar--color\\\"></div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\";\n\nvar preview = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(preview, _HTMLElement);\n\n  var _super = _createSuper(preview);\n\n  function preview() {\n    var _this;\n\n    _classCallCheck(this, preview);\n\n    _this = _super.call(this);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    var importSass = document.createElement('style');\n    importSass.innerHTML = \"@import 'preview.css';\"; // SETUP\n\n    _this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.shadowRoot.appendChild(importSass); // COMPONENT\n\n\n    _this.shadowRoot.getElementById('card-title').innerText = _this.getAttribute('title');\n    _this.shadowRoot.querySelector('img').src = _this.getAttribute('image');\n    _this.shadowRoot.querySelector('#img-card').src = _this.getAttribute('image');\n    return _this;\n  }\n\n  _createClass(preview, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var styleSass = document.createElement('style');\n      styleSass.innerHTML = \"\\n    #bar-preview {\\n      display: none;\\n    }\\n\\n    #img-card {\\n      width: 100%;\\n      max-height: 189px;\\n      cursor: pointer; \\n    }\\n\\n    #card-actions{\\n      display: block;\\n    }\\n\\n    // #card-preview {\\n    //   transform: perspective(200px) translate3d(10px, 0, 30px) ;\\n    // }\\n\\n\\n    #card {\\n      width: 350px;\\n      height: 350px;\\n      background-color: #2e2d2d;\\n    };\";\n      var cardAction = this.shadowRoot.querySelector('#card');\n      cardAction.addEventListener('mouseenter', function (event) {\n        event.target.appendChild(styleSass);\n      });\n      cardAction.addEventListener('mouseleave', function (event) {\n        event.target.removeChild(styleSass);\n      });\n    }\n  }, {\n    key: \"disconectedCallback\",\n    value: function disconectedCallback() {}\n  }]);\n\n  return preview;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('pre-view', preview); // TODO mocar dados \n// TODO ver sobre classList\n\n//# sourceURL=webpack://Netflix/./src/js/preview.js?");

/***/ }),

/***/ "./src/js/profiles.js":
/*!****************************!*\
  !*** ./src/js/profiles.js ***!
  \****************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar users = [{\n  label: 'Gabriela',\n  img: 'assets/avatar_01.png',\n  value: 1\n}, {\n  label: 'Jennifer',\n  img: 'assets/avatar_02.png',\n  value: 2\n}, {\n  label: 'Lucas',\n  img: 'assets/avatar_03.png',\n  pageRef: 'dashboard',\n  value: 3\n}];\n\nvar viewProfile = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(viewProfile, _HTMLElement);\n\n  var _super = _createSuper(viewProfile);\n\n  function viewProfile() {\n    var _this;\n\n    _classCallCheck(this, viewProfile);\n\n    _this = _super.call(this);\n    var label = '';\n    users.forEach(userImages);\n\n    function userImages(imgSrc) {\n      label += '<li class=\"profile__user\"><img src=\"' + imgSrc.img + '\"><div><a href=\"' + imgSrc.pageRef + '.html\" >' + imgSrc.label + '</a></div></li>';\n    }\n\n    _this.innerHTML = label; // this.appendChild(userList)\n\n    return _this;\n  }\n\n  return viewProfile;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('view-profile', viewProfile); // TODO criar um comopnente\n\n//# sourceURL=webpack://Netflix/./src/js/profiles.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Netflix/./src/sass/main.scss?");

/***/ }),

/***/ "./src/assets/add_circle.svg":
/*!***********************************!*\
  !*** ./src/assets/add_circle.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/add_circle.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/add_circle.svg?");

/***/ }),

/***/ "./src/assets/arrow_drop.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow_drop.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/arrow_drop.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/arrow_drop.svg?");

/***/ }),

/***/ "./src/assets/avatar.png":
/*!*******************************!*\
  !*** ./src/assets/avatar.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/avatar.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/avatar.png?");

/***/ }),

/***/ "./src/assets/avatar_01.png":
/*!**********************************!*\
  !*** ./src/assets/avatar_01.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/avatar_01.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/avatar_01.png?");

/***/ }),

/***/ "./src/assets/avatar_02.png":
/*!**********************************!*\
  !*** ./src/assets/avatar_02.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/avatar_02.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/avatar_02.png?");

/***/ }),

/***/ "./src/assets/avatar_03.png":
/*!**********************************!*\
  !*** ./src/assets/avatar_03.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/avatar_03.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/avatar_03.png?");

/***/ }),

/***/ "./src/assets/cavaleiros.png":
/*!***********************************!*\
  !*** ./src/assets/cavaleiros.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cavaleiros.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/cavaleiros.png?");

/***/ }),

/***/ "./src/assets/notifications.svg":
/*!**************************************!*\
  !*** ./src/assets/notifications.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/notifications.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/notifications.svg?");

/***/ }),

/***/ "./src/assets/play_circle.svg":
/*!************************************!*\
  !*** ./src/assets/play_circle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/play_circle.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/play_circle.svg?");

/***/ }),

/***/ "./src/assets/remove.svg":
/*!*******************************!*\
  !*** ./src/assets/remove.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/remove.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/remove.svg?");

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/search.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/search.svg?");

/***/ }),

/***/ "./src/assets/sova.png":
/*!*****************************!*\
  !*** ./src/assets/sova.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/sova.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/sova.png?");

/***/ }),

/***/ "./src/assets/starwars.png":
/*!*********************************!*\
  !*** ./src/assets/starwars.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/starwars.png\";\n\n//# sourceURL=webpack://Netflix/./src/assets/starwars.png?");

/***/ }),

/***/ "./src/assets/thumb.svg":
/*!******************************!*\
  !*** ./src/assets/thumb.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/thumb.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/thumb.svg?");

/***/ }),

/***/ "./src/assets/thumb_down.svg":
/*!***********************************!*\
  !*** ./src/assets/thumb_down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/thumb_down.svg\";\n\n//# sourceURL=webpack://Netflix/./src/assets/thumb_down.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;