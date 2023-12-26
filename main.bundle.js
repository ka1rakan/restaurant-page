"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Naruto/njnaruto.ttf */ "./src/fonts/Naruto/njnaruto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins/Poppins-Regular.ttf */ "./src/fonts/Poppins/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./pics/background.png */ "./src/pics/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/anime-ace);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: naruto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: poppins;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#content {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  height: 100vh;
}

header {
  width: 100%;
  color: #F5F5DC;
  margin-top: 20px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  font-family: naruto;
}

.tab-link {
  width: 15%;
  height: 50px;
  font-size: 40px;
  transition: 0.1s font-size;
  text-align: center;
}

.tab-link:hover {
  font-size: 48px;
  cursor: pointer;
}

main {
  font-family: poppins;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #452f27;
}
main .main-pic {
  position: absolute;
  bottom: 0;
  height: 800px;
  transition: 0.2s height;
}
main .main-pic:hover {
  height: 830px;
}

.menu {
  width: 600px;
  height: 828px;
  margin: 80px 0 0px 0;
  background-color: burlywood;
  border-radius: 5px;
  position: relative;
}
.menu .arrow-div {
  position: absolute;
  top: 0;
  width: 100%;
  height: 78px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu .arrow-div .arrow {
  height: 50px;
  transition: height 0.2s;
}
.menu .arrow-div .arrow:hover {
  height: 60px;
  cursor: pointer;
}
.menu .credits {
  color: #452f27;
}
.menu .section {
  height: auto;
  margin: 12px;
  display: grid;
  gap: 10px;
  grid-template-rows: min-content repeat(4, 175px);
}
.menu .section h1 {
  text-align: center;
  font-family: naruto;
  margin: 12px 0px 7px 0px;
}
.menu .section .card {
  border: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-content: center;
  padding: 12px;
  background-color: #F5F5DC;
  transition: 0.2s box-shadow;
}
.menu .section .card:hover {
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
}
.menu .section .card img {
  height: 150px;
  width: 200px;
}

.page {
  width: 600px;
  height: 820px;
  margin: 80px 0 0px 0;
  background-color: burlywood;
  border-radius: 5px;
  position: relative;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.page h1 {
  text-align: center;
  font-family: naruto;
}

.credits {
  position: absolute;
  bottom: 0;
  color: beige;
  left: 0;
  right: 0;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,4CAAA;AAEJ;AAAA;EACI,oBAAA;EACA,4CAAA;AAEJ;AAMA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAJJ;;AAQA;EACI,mDAAA;EACA,aAAA;AALJ;;AAQA;EACI,WAAA;EACA,cAjBS;EAkBT,gBAAA;EAEA,eAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AANJ;;AASA;EACI,UAAA;EACA,YAAA;EACA,eAAA;EACA,0BAAA;EACA,kBAAA;AANJ;;AASA;EACI,eAAA;EACA,eAAA;AANJ;;AASA;EACI,oBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,cA3CO;AAqCX;AAOI;EACI,kBAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;AALR;AAOI;EACI,aAAA;AALR;;AASA;EACI,YAAA;EAEA,aAAA;EACA,oBAAA;EACA,2BAAA;EACA,kBAAA;EAEA,kBAAA;AARJ;AASI;EACI,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;AARR;AASQ;EACI,YAAA;EACA,uBAAA;AAPZ;AAQY;EACI,YAAA;EACA,eAAA;AANhB;AAUI;EACI,cApFG;AA4EX;AAWI;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,gDAAA;AATR;AAUQ;EACI,kBAAA;EACA,mBAAA;EACA,wBAAA;AARZ;AAUQ;EACI,uBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EAEA,aAAA;EACA,yBA1GC;EA2GD,2BAAA;AATZ;AAUY;EACI,wDAAA;EACA,qDAAA;EACA,gDAAA;AARhB;AAUY;EACI,aAAA;EACA,YAAA;AARhB;;AAcA;EACI,YAAA;EACA,aAAA;EACA,oBAAA;EACA,2BAAA;EACA,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAZJ;AAaI;EACI,kBAAA;EACA,mBAAA;AAXR;;AAeA;EACI,kBAAA;EACA,SAAA;EACA,YAAA;EACA,OAAA;EACA,QAAA;EACA,kBAAA;AAZJ","sourcesContent":["@font-face {\n    font-family: naruto;\n    src: url(\"./fonts/Naruto/njnaruto.ttf\");\n}\n@font-face{\n    font-family: poppins;\n    src: url(\"./fonts/Poppins/Poppins-Regular.ttf\")\n}\n@import url('https://fonts.cdnfonts.com/css/anime-ace');\n\n\n$header-txt: #F5F5DC;\n$main-txt: #452f27;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n#content{\n    background: url('./pics/background.png');\n    height: 100vh;\n}\n\nheader{\n    width: 100%;\n    color: $header-txt;\n    margin-top: 20px;\n\n    position: fixed;\n    display:flex;\n    justify-content: space-around;\n    font-family: naruto;\n}\n\n.tab-link{\n    width: 15%;\n    height: 50px;\n    font-size: 40px;\n    transition: .1s font-size;\n    text-align: center;\n}\n\n.tab-link:hover{\n    font-size:48px;\n    cursor: pointer;\n}\n\nmain{\n    font-family: poppins;\n    height: 100%;\n    display:flex;\n    justify-content: center;\n    color: $main-txt;\n    .main-pic{\n        position:absolute;\n        bottom: 0;\n        height: 800px;\n        transition: .2s height;\n    }\n    .main-pic:hover{\n        height:830px;\n    }\n}\n\n.menu{\n    width: 600px;\n    //height: 820px;\n    height: 828px;\n    margin: 80px 0 0px 0;\n    background-color: burlywood;\n    border-radius: 5px;\n\n    position: relative;\n    .arrow-div{\n        position: absolute;\n        top:0;\n        width: 100%;\n        height:78px;\n        padding: 0 60px;\n\n        display:flex;\n        justify-content: space-between;\n        align-items: center;\n        .arrow{\n            height: 50px;\n            transition: height .2s ;\n            &:hover{\n                height: 60px;\n                cursor: pointer\n            }\n        }\n    }\n    .credits{\n        color: $main-txt;\n    }\n\n    .section{\n        height: auto;\n        margin: 12px;\n        display:grid;\n        gap: 10px;\n        grid-template-rows: min-content repeat(4, 175px);\n        h1{\n            text-align:center;\n            font-family:naruto;\n            margin: 12px 0px 7px 0px;\n        }\n        .card{\n            border: 1px solid black;\n            display:grid;\n            grid-template-columns: 2fr 3fr;\n            align-content: center;\n\n            padding: 12px;\n            background-color: $header-txt;\n            transition: .2s box-shadow;\n            &:hover{\n                -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n                -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n                box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n            }\n            img{\n                height: 150px;\n                width: 200px;\n            }\n        }\n    }\n}\n\n.page{\n    width: 600px;\n    height: 820px;\n    margin: 80px 0 0px 0;\n    background-color: burlywood;\n    border-radius: 5px;\n    position: relative;\n\n    padding: 18px;\n    display:flex; \n    flex-direction: column;\n    gap: 24px;\n    h1{\n        text-align:center;\n        font-family: naruto;\n    }\n}\n\n.credits{\n    position:absolute;\n    bottom: 0;\n    color: beige;\n    left: 0;\n    right: 0;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openAbout: () => (/* binding */ openAbout)
/* harmony export */ });
function openAbout(){
    const openBtn = document.querySelector('#about');
    const main = document.querySelector("main");
    const page = document.createElement("div")
    page.className = "page";


    main.innerHTML = "";
    main.appendChild(page);

    const title = document.createElement("h1");
    title.innerText = "About Us"
    page.appendChild(title);
    const text = document.createElement("p");
    text.innerText = "ANIMEATS is a lofi inpired restaurant found in Sydney, Australia. Our aim is to ensure our customers are having good time while they eat the foods of their favorite anime characters' favorite foods!"
    page.appendChild(text);

    
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _pics_naruto_ramen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/naruto-ramen.png */ "./src/pics/naruto-ramen.png");
/* harmony import */ var _menus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus.js */ "./src/menus.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");



 

const content = document.querySelector("#content");



const header = document.createElement("header");
for(let i=0;i<3;i++){
    const tabLink = document.createElement("div");
    if(i==0){
        tabLink.id = "menus";
        tabLink.innerText = "Menus"
        tabLink.addEventListener("click", ()=>{
            ;(0,_menus_js__WEBPACK_IMPORTED_MODULE_2__.openMenu)()
        })
    }else if(i==1){
        tabLink.id = "brand";
        tabLink.innerText = "ANIMEATS";
        tabLink.addEventListener("click", ()=>{
            openBrand()
        })
    }else if(i==2){
        tabLink.id = "about";
        tabLink.innerText = "About";
        tabLink.addEventListener("click", ()=>{
            (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.openAbout)();
        })
    }
    tabLink.classList.add("tab-link")
    header.appendChild(tabLink);
}
content.appendChild(header);



function openBrand(){
    main.innerHTML = "";
    main.appendChild(addMainLayout())
}

function addMainLayout(){
    const figure = new Image();
    figure.src = _pics_naruto_ramen_png__WEBPACK_IMPORTED_MODULE_1__;
    figure.className = "main-pic";
    
    return figure
}

const main = document.createElement("main");
main.appendChild(addMainLayout())
content.appendChild(main)

const credits = document.createElement("p");
credits.innerText = "Background image taken from rare-gallery.com";
credits.className = "credits"
content.appendChild(credits)

/***/ }),

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/previous-arrow.png */ "./src/pics/previous-arrow.png");
/* harmony import */ var _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/next-arrow.png */ "./src/pics/next-arrow.png");
/* harmony import */ var _pics_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/onigiri.jpg */ "./src/pics/onigiri.jpg");
/* harmony import */ var _pics_gyoza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pics/gyoza.png */ "./src/pics/gyoza.png");
/* harmony import */ var _pics_japanese_parfait_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pics/japanese-parfait.jpeg */ "./src/pics/japanese-parfait.jpeg");
/* harmony import */ var _pics_katsudon_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pics/katsudon.jpeg */ "./src/pics/katsudon.jpeg");
/* harmony import */ var _pics_melon_pan_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pics/melon-pan.jpg */ "./src/pics/melon-pan.jpg");
/* harmony import */ var _pics_mitarashi_dango_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pics/mitarashi-dango.png */ "./src/pics/mitarashi-dango.png");
/* harmony import */ var _pics_nikuman_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pics/nikuman.jpg */ "./src/pics/nikuman.jpg");
/* harmony import */ var _pics_ramen_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pics/ramen.jpg */ "./src/pics/ramen.jpg");
/* harmony import */ var _pics_sushi_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pics/sushi.png */ "./src/pics/sushi.png");
/* harmony import */ var _pics_yakiniku_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pics/yakiniku.jpg */ "./src/pics/yakiniku.jpg");














function openMenu(){
    const main = document.querySelector("main");
    const menu = document.createElement("div");
    menu.className = "menu";
    main.innerHTML = "";
    main.appendChild(menu)



    function addFood(src, name, text){
        const card = document.createElement("div")
        card.className="card";
        const image = new Image();
        image.src = src;
        const info = document.createElement("div");
        const title = document.createElement("h2");
        title.innerText = name;
        const context = document.createElement("p");
        context.innerText = text;
        info.appendChild(title);
        info.appendChild(context);
        card.appendChild(image);
        card.appendChild(info);

        return card
    }
    
    function addAppetizersSection(){
        const appetizers = document.createElement("div");
        appetizers.className = "section";
        const title = document.createElement("h1");
        title.innerText = "Appetizers";
        appetizers.appendChild(title);
        appetizers.appendChild(addFood(_pics_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__, "Onigiri", "Onigiri is an appetizer"));
        appetizers.appendChild(addFood(_pics_nikuman_jpg__WEBPACK_IMPORTED_MODULE_8__, "Nikuman", "Nikuman is an appetizer"));
        appetizers.appendChild(addFood(_pics_gyoza_png__WEBPACK_IMPORTED_MODULE_3__, "Gyoza", "Gyoza is an appetizer"));

        return appetizers
    }
    function addMealsSection(){
        const meals = document.createElement("div");
        meals.className = "section"
        const title = document.createElement("h1");
        title.innerText = "Meals";
        meals.appendChild(title);
        meals.appendChild(addFood(_pics_ramen_jpg__WEBPACK_IMPORTED_MODULE_9__, "Ramen", "Ramen is a meal"));
        meals.appendChild(addFood(_pics_yakiniku_jpg__WEBPACK_IMPORTED_MODULE_11__, "Yakiniku", "Yakiniku is a meal"));
        meals.appendChild(addFood(_pics_katsudon_jpeg__WEBPACK_IMPORTED_MODULE_5__, "Katsudon", "Katsudon is a meal"));
        meals.appendChild(addFood(_pics_sushi_png__WEBPACK_IMPORTED_MODULE_10__, "Sushi", "Sushi is a meal"));

        return meals
    }

    function addDesertsSection(){
        const deserts = document.createElement("div");
        deserts.className = "section";
        const title = document.createElement("h1");
        title.innerText = "Deserts";
        deserts.appendChild(title);
        deserts.appendChild(addFood(_pics_melon_pan_jpg__WEBPACK_IMPORTED_MODULE_6__,"Melon Pan", "Melon is a desert"));
        deserts.appendChild(addFood(_pics_japanese_parfait_jpeg__WEBPACK_IMPORTED_MODULE_4__, "Japanese Parfait", "Japanese Parfait is a desert"));
        deserts.appendChild(addFood(_pics_mitarashi_dango_png__WEBPACK_IMPORTED_MODULE_7__, "Mitarashi Dango", "Mitarashi Dango is a desert"))
        return deserts;
    }



    let sectionIndex = 0;
    menu.appendChild(addAppetizersSection())

    const arrows = (function addArrows(){
        const prevArrow = new Image();
        prevArrow.src = _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
        prevArrow.className = "arrow";
        const nextArrow = new Image();
        nextArrow.src = _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__;
        nextArrow.className = "arrow";
        

        prevArrow.style="cursor: not-allowed"
        prevArrow.addEventListener("click", (e)=>{
            if(sectionIndex!==0){
                menu.removeChild(document.querySelector(".section"));
                nextArrow.style = "cursor: allowed"
                sectionIndex--;
                if(sectionIndex===1){
                    menu.appendChild(addMealsSection())
                }else if(sectionIndex===0){
                    menu.appendChild(addAppetizersSection());
                }
                
                if(sectionIndex===0){
                    e.target.style = "cursor: not-allowed"
                }
            }
        })
        nextArrow.addEventListener("click", (e)=>{
            if(sectionIndex!==2){
                menu.removeChild(document.querySelector(".section"))
                prevArrow.style = "cursor: allowed"
                sectionIndex++;
                if(sectionIndex===1){
                    menu.appendChild(addMealsSection())
                }else if(sectionIndex===2){
                    menu.appendChild(addDesertsSection());
                }
                
                if(sectionIndex===2){
                    e.target.style="cursor:not-allowed"
                }
            }
        })
        
        return {prevArrow, nextArrow}
    })();
    const arrowDiv = document.createElement("div");
    arrowDiv.className = "arrow-div";
    arrowDiv.appendChild(arrows.prevArrow);
    arrowDiv.appendChild(arrows.nextArrow);

    const credits = document.createElement("p");
    credits.innerText = "Arrow buttons taken from banner2.cleanpng.com";
    credits.className = "credits";
        
    menu.appendChild(credits)
    menu.appendChild(arrowDiv)
}

/***/ }),

/***/ "./src/fonts/Naruto/njnaruto.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Naruto/njnaruto.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb7e0c70752e2f7b008e.ttf";

/***/ }),

/***/ "./src/fonts/Poppins/Poppins-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Poppins/Poppins-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/pics/background.png":
/*!*********************************!*\
  !*** ./src/pics/background.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2de4a2f03e8222e6303d.png";

/***/ }),

/***/ "./src/pics/gyoza.png":
/*!****************************!*\
  !*** ./src/pics/gyoza.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94ec808c7510fff65458.png";

/***/ }),

/***/ "./src/pics/japanese-parfait.jpeg":
/*!****************************************!*\
  !*** ./src/pics/japanese-parfait.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8736d4394c077db0d6fa.jpeg";

/***/ }),

/***/ "./src/pics/katsudon.jpeg":
/*!********************************!*\
  !*** ./src/pics/katsudon.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fde96e7dffb16df6e8f.jpeg";

/***/ }),

/***/ "./src/pics/melon-pan.jpg":
/*!********************************!*\
  !*** ./src/pics/melon-pan.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a81ed6e2e4207949233.jpg";

/***/ }),

/***/ "./src/pics/mitarashi-dango.png":
/*!**************************************!*\
  !*** ./src/pics/mitarashi-dango.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b18697949d7d5469c4b.png";

/***/ }),

/***/ "./src/pics/naruto-ramen.png":
/*!***********************************!*\
  !*** ./src/pics/naruto-ramen.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "884d5cf8ce1444d1a929.png";

/***/ }),

/***/ "./src/pics/next-arrow.png":
/*!*********************************!*\
  !*** ./src/pics/next-arrow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa8b4af19416440fd227.png";

/***/ }),

/***/ "./src/pics/nikuman.jpg":
/*!******************************!*\
  !*** ./src/pics/nikuman.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "024e60e8d54da7363008.jpg";

/***/ }),

/***/ "./src/pics/onigiri.jpg":
/*!******************************!*\
  !*** ./src/pics/onigiri.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59acf66e264429fd06a6.jpg";

/***/ }),

/***/ "./src/pics/previous-arrow.png":
/*!*************************************!*\
  !*** ./src/pics/previous-arrow.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6541fdecffda7eec01f.png";

/***/ }),

/***/ "./src/pics/ramen.jpg":
/*!****************************!*\
  !*** ./src/pics/ramen.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22740afb0d297a7105bf.jpg";

/***/ }),

/***/ "./src/pics/sushi.png":
/*!****************************!*\
  !*** ./src/pics/sushi.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322e33cbf62e7f7b21a8.png";

/***/ }),

/***/ "./src/pics/yakiniku.jpg":
/*!*******************************!*\
  !*** ./src/pics/yakiniku.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75ef5ab24d49316e1ad4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OYXJ1dG8vbmpuYXJ1dG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3BpY3MvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvYW5pbWUtYWNlKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG5hcnV0bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0Y1RjVEQztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1mYW1pbHk6IG5hcnV0bztcbn1cblxuLnRhYi1saW5rIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuMXMgZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWItbGluazpob3ZlciB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWluIHtcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNDUyZjI3O1xufVxubWFpbiAubWFpbi1waWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBoZWlnaHQ7XG59XG5tYWluIC5tYWluLXBpYzpob3ZlciB7XG4gIGhlaWdodDogODMwcHg7XG59XG5cbi5tZW51IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDgyOHB4O1xuICBtYXJnaW46IDgwcHggMCAwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZW51IC5hcnJvdy1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzhweDtcbiAgcGFkZGluZzogMCA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudSAuYXJyb3ctZGl2IC5hcnJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG59XG4ubWVudSAuYXJyb3ctZGl2IC5hcnJvdzpob3ZlciB7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUgLmNyZWRpdHMge1xuICBjb2xvcjogIzQ1MmYyNztcbn1cbi5tZW51IC5zZWN0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCByZXBlYXQoNCwgMTc1cHgpO1xufVxuLm1lbnUgLnNlY3Rpb24gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBuYXJ1dG87XG4gIG1hcmdpbjogMTJweCAwcHggN3B4IDBweDtcbn1cbi5tZW51IC5zZWN0aW9uIC5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNURDO1xuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XG59XG4ubWVudSAuc2VjdGlvbiAuY2FyZDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLm1lbnUgLnNlY3Rpb24gLmNhcmQgaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA4MjBweDtcbiAgbWFyZ2luOiA4MHB4IDAgMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cbi5wYWdlIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbmFydXRvO1xufVxuXG4uY3JlZGl0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogYmVpZ2U7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7QUFFSjtBQUFBO0VBQ0ksb0JBQUE7RUFDQSw0Q0FBQTtBQUVKO0FBTUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBSko7O0FBUUE7RUFDSSxtREFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxjQWpCUztFQWtCVCxnQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBM0NPO0FBcUNYO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFMUjtBQU9JO0VBQ0ksYUFBQTtBQUxSOztBQVNBO0VBQ0ksWUFBQTtFQUVBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQVJKO0FBU0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJSO0FBU1E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFQWjtBQVFZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFOaEI7QUFVSTtFQUNJLGNBcEZHO0FBNEVYO0FBV0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7QUFUUjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUlo7QUFVUTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EseUJBMUdDO0VBMkdELDJCQUFBO0FBVFo7QUFVWTtFQUNJLHdEQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBQVJoQjtBQVVZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFSaEI7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFaSjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVhSOztBQWVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFaSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG5hcnV0bztcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTmFydXRvL25qbmFydXRvLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXFxcIilcXG59XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9hbmltZS1hY2UnKTtcXG5cXG5cXG4kaGVhZGVyLXR4dDogI0Y1RjVEQztcXG4kbWFpbi10eHQ6ICM0NTJmMjc7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL3BpY3MvYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICRoZWFkZXItdHh0O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZvbnQtZmFtaWx5OiBuYXJ1dG87XFxufVxcblxcbi50YWItbGlua3tcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IC4xcyBmb250LXNpemU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhYi1saW5rOmhvdmVye1xcbiAgICBmb250LXNpemU6NDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWlue1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogJG1haW4tdHh0O1xcbiAgICAubWFpbi1waWN7XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGhlaWdodDogODAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgaGVpZ2h0O1xcbiAgICB9XFxuICAgIC5tYWluLXBpYzpob3ZlcntcXG4gICAgICAgIGhlaWdodDo4MzBweDtcXG4gICAgfVxcbn1cXG5cXG4ubWVudXtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICAvL2hlaWdodDogODIwcHg7XFxuICAgIGhlaWdodDogODI4cHg7XFxuICAgIG1hcmdpbjogODBweCAwIDBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAuYXJyb3ctZGl2e1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOjA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDo3OHB4O1xcbiAgICAgICAgcGFkZGluZzogMCA2MHB4O1xcblxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC5hcnJvd3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4ycyA7XFxuICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmNyZWRpdHN7XFxuICAgICAgICBjb2xvcjogJG1haW4tdHh0O1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9ue1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCByZXBlYXQoNCwgMTc1cHgpO1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6bmFydXRvO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwcHggN3B4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci10eHQ7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGJveC1zaGFkb3c7XFxuICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ucGFnZXtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDgyMHB4O1xcbiAgICBtYXJnaW46IDgwcHggMCAwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBoMXtcXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IG5hcnV0bztcXG4gICAgfVxcbn1cXG5cXG4uY3JlZGl0c3tcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY29sb3I6IGJlaWdlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gb3BlbkFib3V0KCl7XG4gICAgY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlXCI7XG5cblxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhZ2UpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gXCJBTklNRUFUUyBpcyBhIGxvZmkgaW5waXJlZCByZXN0YXVyYW50IGZvdW5kIGluIFN5ZG5leSwgQXVzdHJhbGlhLiBPdXIgYWltIGlzIHRvIGVuc3VyZSBvdXIgY3VzdG9tZXJzIGFyZSBoYXZpbmcgZ29vZCB0aW1lIHdoaWxlIHRoZXkgZWF0IHRoZSBmb29kcyBvZiB0aGVpciBmYXZvcml0ZSBhbmltZSBjaGFyYWN0ZXJzJyBmYXZvcml0ZSBmb29kcyFcIlxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBuYXJ1dG8gZnJvbSAnLi9waWNzL25hcnV0by1yYW1lbi5wbmcnO1xuaW1wb3J0IHsgb3Blbk1lbnUgfSBmcm9tICcuL21lbnVzLmpzJztcbmltcG9ydCB7IG9wZW5BYm91dCB9IGZyb20gJy4vYWJvdXQuanMnOyBcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuXG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5mb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICBjb25zdCB0YWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZihpPT0wKXtcbiAgICAgICAgdGFiTGluay5pZCA9IFwibWVudXNcIjtcbiAgICAgICAgdGFiTGluay5pbm5lclRleHQgPSBcIk1lbnVzXCJcbiAgICAgICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIG9wZW5NZW51KClcbiAgICAgICAgfSlcbiAgICB9ZWxzZSBpZihpPT0xKXtcbiAgICAgICAgdGFiTGluay5pZCA9IFwiYnJhbmRcIjtcbiAgICAgICAgdGFiTGluay5pbm5lclRleHQgPSBcIkFOSU1FQVRTXCI7XG4gICAgICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBvcGVuQnJhbmQoKVxuICAgICAgICB9KVxuICAgIH1lbHNlIGlmKGk9PTIpe1xuICAgICAgICB0YWJMaW5rLmlkID0gXCJhYm91dFwiO1xuICAgICAgICB0YWJMaW5rLmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcbiAgICAgICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIG9wZW5BYm91dCgpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICB0YWJMaW5rLmNsYXNzTGlzdC5hZGQoXCJ0YWItbGlua1wiKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJMaW5rKTtcbn1cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG5cbmZ1bmN0aW9uIG9wZW5CcmFuZCgpe1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE1haW5MYXlvdXQoKSlcbn1cblxuZnVuY3Rpb24gYWRkTWFpbkxheW91dCgpe1xuICAgIGNvbnN0IGZpZ3VyZSA9IG5ldyBJbWFnZSgpO1xuICAgIGZpZ3VyZS5zcmMgPSBuYXJ1dG87XG4gICAgZmlndXJlLmNsYXNzTmFtZSA9IFwibWFpbi1waWNcIjtcbiAgICBcbiAgICByZXR1cm4gZmlndXJlXG59XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWRkTWFpbkxheW91dCgpKVxuY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxuXG5jb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jcmVkaXRzLmlubmVyVGV4dCA9IFwiQmFja2dyb3VuZCBpbWFnZSB0YWtlbiBmcm9tIHJhcmUtZ2FsbGVyeS5jb21cIjtcbmNyZWRpdHMuY2xhc3NOYW1lID0gXCJjcmVkaXRzXCJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlZGl0cykiLCJpbXBvcnQgUHJldkFycm93IGZyb20gJy4vcGljcy9wcmV2aW91cy1hcnJvdy5wbmcnO1xuaW1wb3J0IE5leHRBcnJvdyBmcm9tICcuL3BpY3MvbmV4dC1hcnJvdy5wbmcnO1xuaW1wb3J0IG9uaWdpcmkgZnJvbSAnLi9waWNzL29uaWdpcmkuanBnJztcbmltcG9ydCBneW96YSBmcm9tICcuL3BpY3MvZ3lvemEucG5nJztcbmltcG9ydCBqYXBhbmVzZVBhcmZhaXQgZnJvbSAnLi9waWNzL2phcGFuZXNlLXBhcmZhaXQuanBlZyc7XG5pbXBvcnQga2F0c3Vkb24gZnJvbSAnLi9waWNzL2thdHN1ZG9uLmpwZWcnO1xuaW1wb3J0IG1lbG9uUGFuIGZyb20gJy4vcGljcy9tZWxvbi1wYW4uanBnJztcbmltcG9ydCBtaXRhcmFzaGlEYW5nbyBmcm9tICcuL3BpY3MvbWl0YXJhc2hpLWRhbmdvLnBuZyc7XG5pbXBvcnQgbmlrdW1hbiBmcm9tICcuL3BpY3MvbmlrdW1hbi5qcGcnO1xuaW1wb3J0IHJhbWVuIGZyb20gJy4vcGljcy9yYW1lbi5qcGcnO1xuaW1wb3J0IHN1c2hpIGZyb20gJy4vcGljcy9zdXNoaS5wbmcnO1xuaW1wb3J0IHlha2luaWt1IGZyb20gJy4vcGljcy95YWtpbmlrdS5qcGcnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpXG5cblxuXG4gICAgZnVuY3Rpb24gYWRkRm9vZChzcmMsIG5hbWUsIHRleHQpe1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjYXJkLmNsYXNzTmFtZT1cImNhcmRcIjtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChjb250ZXh0KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkQXBwZXRpemVyc1NlY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYXBwZXRpemVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFwcGV0aXplcnMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXCI7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIkFwcGV0aXplcnNcIjtcbiAgICAgICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChvbmlnaXJpLCBcIk9uaWdpcmlcIiwgXCJPbmlnaXJpIGlzIGFuIGFwcGV0aXplclwiKSk7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChuaWt1bWFuLCBcIk5pa3VtYW5cIiwgXCJOaWt1bWFuIGlzIGFuIGFwcGV0aXplclwiKSk7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChneW96YSwgXCJHeW96YVwiLCBcIkd5b3phIGlzIGFuIGFwcGV0aXplclwiKSk7XG5cbiAgICAgICAgcmV0dXJuIGFwcGV0aXplcnNcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTWVhbHNTZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVhbHMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXCJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTWVhbHNcIjtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKHJhbWVuLCBcIlJhbWVuXCIsIFwiUmFtZW4gaXMgYSBtZWFsXCIpKTtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZCh5YWtpbmlrdSwgXCJZYWtpbmlrdVwiLCBcIllha2luaWt1IGlzIGEgbWVhbFwiKSk7XG4gICAgICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2Qoa2F0c3Vkb24sIFwiS2F0c3Vkb25cIiwgXCJLYXRzdWRvbiBpcyBhIG1lYWxcIikpO1xuICAgICAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKHN1c2hpLCBcIlN1c2hpXCIsIFwiU3VzaGkgaXMgYSBtZWFsXCIpKTtcblxuICAgICAgICByZXR1cm4gbWVhbHNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREZXNlcnRzU2VjdGlvbigpe1xuICAgICAgICBjb25zdCBkZXNlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzZXJ0cy5jbGFzc05hbWUgPSBcInNlY3Rpb25cIjtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiRGVzZXJ0c1wiO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChhZGRGb29kKG1lbG9uUGFuLFwiTWVsb24gUGFuXCIsIFwiTWVsb24gaXMgYSBkZXNlcnRcIikpO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoamFwYW5lc2VQYXJmYWl0LCBcIkphcGFuZXNlIFBhcmZhaXRcIiwgXCJKYXBhbmVzZSBQYXJmYWl0IGlzIGEgZGVzZXJ0XCIpKTtcbiAgICAgICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChhZGRGb29kKG1pdGFyYXNoaURhbmdvLCBcIk1pdGFyYXNoaSBEYW5nb1wiLCBcIk1pdGFyYXNoaSBEYW5nbyBpcyBhIGRlc2VydFwiKSlcbiAgICAgICAgcmV0dXJuIGRlc2VydHM7XG4gICAgfVxuXG5cblxuICAgIGxldCBzZWN0aW9uSW5kZXggPSAwO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkQXBwZXRpemVyc1NlY3Rpb24oKSlcblxuICAgIGNvbnN0IGFycm93cyA9IChmdW5jdGlvbiBhZGRBcnJvd3MoKXtcbiAgICAgICAgY29uc3QgcHJldkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHByZXZBcnJvdy5zcmMgPSBQcmV2QXJyb3c7XG4gICAgICAgIHByZXZBcnJvdy5jbGFzc05hbWUgPSBcImFycm93XCI7XG4gICAgICAgIGNvbnN0IG5leHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXh0QXJyb3cuc3JjID0gTmV4dEFycm93O1xuICAgICAgICBuZXh0QXJyb3cuY2xhc3NOYW1lID0gXCJhcnJvd1wiO1xuICAgICAgICBcblxuICAgICAgICBwcmV2QXJyb3cuc3R5bGU9XCJjdXJzb3I6IG5vdC1hbGxvd2VkXCJcbiAgICAgICAgcHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCE9PTApe1xuICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKTtcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3cuc3R5bGUgPSBcImN1cnNvcjogYWxsb3dlZFwiXG4gICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09MSl7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkTWVhbHNTZWN0aW9uKCkpXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VjdGlvbkluZGV4PT09MCl7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkQXBwZXRpemVyc1NlY3Rpb24oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTApe1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZSA9IFwiY3Vyc29yOiBub3QtYWxsb3dlZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgaWYoc2VjdGlvbkluZGV4IT09Mil7XG4gICAgICAgICAgICAgICAgbWVudS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25cIikpXG4gICAgICAgICAgICAgICAgcHJldkFycm93LnN0eWxlID0gXCJjdXJzb3I6IGFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTEpe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZE1lYWxzU2VjdGlvbigpKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlY3Rpb25JbmRleD09PTIpe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZERlc2VydHNTZWN0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0yKXtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGU9XCJjdXJzb3I6bm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7cHJldkFycm93LCBuZXh0QXJyb3d9XG4gICAgfSkoKTtcbiAgICBjb25zdCBhcnJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJyb3dEaXYuY2xhc3NOYW1lID0gXCJhcnJvdy1kaXZcIjtcbiAgICBhcnJvd0Rpdi5hcHBlbmRDaGlsZChhcnJvd3MucHJldkFycm93KTtcbiAgICBhcnJvd0Rpdi5hcHBlbmRDaGlsZChhcnJvd3MubmV4dEFycm93KTtcblxuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVkaXRzLmlubmVyVGV4dCA9IFwiQXJyb3cgYnV0dG9ucyB0YWtlbiBmcm9tIGJhbm5lcjIuY2xlYW5wbmcuY29tXCI7XG4gICAgY3JlZGl0cy5jbGFzc05hbWUgPSBcImNyZWRpdHNcIjtcbiAgICAgICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVkaXRzKVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYXJyb3dEaXYpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9