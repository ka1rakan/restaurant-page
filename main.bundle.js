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
  height: 835px;
  margin: 80px 0 0px 0;
  background-color: burlywood;
  border-radius: 5px;
  position: relative;
}
.menu p {
  font-size: 12px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,4CAAA;AAEJ;AAAA;EACI,oBAAA;EACA,4CAAA;AAEJ;AAMA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAJJ;;AAQA;EACI,mDAAA;EACA,aAAA;AALJ;;AAQA;EACI,WAAA;EACA,cAjBS;EAkBT,gBAAA;EAEA,eAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AANJ;;AASA;EACI,UAAA;EACA,YAAA;EACA,eAAA;EACA,0BAAA;EACA,kBAAA;AANJ;;AASA;EACI,eAAA;EACA,eAAA;AANJ;;AASA;EACI,oBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,cA3CO;AAqCX;AAOI;EACI,kBAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;AALR;AAOI;EACI,aAAA;AALR;;AASA;EACI,YAAA;EACA,aAAA;EACA,oBAAA;EACA,2BAAA;EACA,kBAAA;EAEA,kBAAA;AAPJ;AAQI;EACI,eAAA;AANR;AAQI;EACI,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;AAPR;AAQQ;EACI,YAAA;EACA,uBAAA;AANZ;AAOY;EACI,YAAA;EACA,eAAA;AALhB;AASI;EACI,cAtFG;AA+EX;AAUI;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,gDAAA;AARR;AASQ;EACI,kBAAA;EACA,mBAAA;EACA,wBAAA;AAPZ;AASQ;EACI,uBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EAEA,aAAA;EACA,yBA5GC;EA6GD,2BAAA;AARZ;AASY;EACI,wDAAA;EACA,qDAAA;EACA,gDAAA;AAPhB;AASY;EACI,aAAA;EACA,YAAA;AAPhB;;AAaA;EACI,YAAA;EACA,aAAA;EACA,oBAAA;EACA,2BAAA;EACA,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAXJ;AAYI;EACI,kBAAA;EACA,mBAAA;AAVR;;AAcA;EACI,kBAAA;EACA,SAAA;EACA,YAAA;EACA,OAAA;EACA,QAAA;EACA,kBAAA;AAXJ","sourcesContent":["@font-face {\n    font-family: naruto;\n    src: url(\"./fonts/Naruto/njnaruto.ttf\");\n}\n@font-face{\n    font-family: poppins;\n    src: url(\"./fonts/Poppins/Poppins-Regular.ttf\")\n}\n@import url('https://fonts.cdnfonts.com/css/anime-ace');\n\n\n$header-txt: #F5F5DC;\n$main-txt: #452f27;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n#content{\n    background: url('./pics/background.png');\n    height: 100vh;\n}\n\nheader{\n    width: 100%;\n    color: $header-txt;\n    margin-top: 20px;\n\n    position: fixed;\n    display:flex;\n    justify-content: space-around;\n    font-family: naruto;\n}\n\n.tab-link{\n    width: 15%;\n    height: 50px;\n    font-size: 40px;\n    transition: .1s font-size;\n    text-align: center;\n}\n\n.tab-link:hover{\n    font-size:48px;\n    cursor: pointer;\n}\n\nmain{\n    font-family: poppins;\n    height: 100%;\n    display:flex;\n    justify-content: center;\n    color: $main-txt;\n    .main-pic{\n        position:absolute;\n        bottom: 0;\n        height: 800px;\n        transition: .2s height;\n    }\n    .main-pic:hover{\n        height:830px;\n    }\n}\n\n.menu{\n    width: 600px;\n    height: 835px;\n    margin: 80px 0 0px 0;\n    background-color: burlywood;\n    border-radius: 5px;\n\n    position: relative;\n    p{\n        font-size: 12px;\n    }\n    .arrow-div{\n        position: absolute;\n        top:0;\n        width: 100%;\n        height:78px;\n        padding: 0 60px;\n\n        display:flex;\n        justify-content: space-between;\n        align-items: center;\n        .arrow{\n            height: 50px;\n            transition: height .2s ;\n            &:hover{\n                height: 60px;\n                cursor: pointer\n            }\n        }\n    }\n    .credits{\n        color: $main-txt;\n    }\n\n    .section{\n        height: auto;\n        margin: 12px;\n        display:grid;\n        gap: 10px;\n        grid-template-rows: min-content repeat(4, 175px);\n        h1{\n            text-align:center;\n            font-family:naruto;\n            margin: 12px 0px 7px 0px;\n        }\n        .card{\n            border: 1px solid black;\n            display:grid;\n            grid-template-columns: 2fr 3fr;\n            align-content: center;\n\n            padding: 12px;\n            background-color: $header-txt;\n            transition: .2s box-shadow;\n            &:hover{\n                -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n                -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n                box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);\n            }\n            img{\n                height: 150px;\n                width: 200px;\n            }\n        }\n    }\n}\n\n.page{\n    width: 600px;\n    height: 820px;\n    margin: 80px 0 0px 0;\n    background-color: burlywood;\n    border-radius: 5px;\n    position: relative;\n\n    padding: 18px;\n    display:flex; \n    flex-direction: column;\n    gap: 24px;\n    h1{\n        text-align:center;\n        font-family: naruto;\n    }\n}\n\n.credits{\n    position:absolute;\n    bottom: 0;\n    color: beige;\n    left: 0;\n    right: 0;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
        appetizers.appendChild(addFood(_pics_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__, "Onigiri", "Onigiri is a white rice ball shaped into a triangle. Onigiri are often filled with vegetables or meat and it is wrapped in nori seaweed. Although it resembles sushi, onigiri doesn't use raw fish."));
        appetizers.appendChild(addFood(_pics_nikuman_jpg__WEBPACK_IMPORTED_MODULE_8__, "Nikuman", "Nikuman is a Japanese steamed fluffy bun filled with minced pork. They are steamed in a bamboo steamer and are served hot. Nikuman is the perfect on-the-go savory snack and comfort food for those colder nights."));
        appetizers.appendChild(addFood(_pics_gyoza_png__WEBPACK_IMPORTED_MODULE_3__, "Gyoza", "Originating from China, this dumpling-inspired dish is a thin dough filled with meat like pork or veggies (cabbage, green onions, garlic, and ginger) and served with soy sauce. Gyoza often gets served alongside a bowl of ramen or beforehand as an appetizer"));

        return appetizers
    }
    function addMealsSection(){
        const meals = document.createElement("div");
        meals.className = "section"
        const title = document.createElement("h1");
        title.innerText = "Meals";
        meals.appendChild(title);
        meals.appendChild(addFood(_pics_ramen_jpg__WEBPACK_IMPORTED_MODULE_9__, "Ramen", "The most common and iconic food seen in anime is the bowl of ramen. It's a favorite dish for many popular characters like Naruto, who loves eating miso chashu ramen at Ichiraku Ramen. Ramen is also eaten by Goku and Beerus from Dragon Ball. Senku from Dr. Stone loves it so much, that he even managed to 'invent' it in the stone age."));
        meals.appendChild(addFood(_pics_yakiniku_jpg__WEBPACK_IMPORTED_MODULE_11__, "Yakiniku", "Yakiniku is a style of cooking bite-size meat and vegetables over a flame of wood charcoals. In its broadest sense, refers to grilled meat cuisine."));
        meals.appendChild(addFood(_pics_katsudon_jpeg__WEBPACK_IMPORTED_MODULE_5__, "Katsudon", "Katsudon is a Japanese pork cutlet rice bowl. The pork is breaded and fried before being layered on top of an egg omelet, rice, and sauteed onions."));
        meals.appendChild(addFood(_pics_sushi_png__WEBPACK_IMPORTED_MODULE_10__, "Sushi", "This bite-sized delicacy features seasoned rice topped with various types of seafood, vegetables, and other ingredients. Whether served as nigiri, maki rolls, or sashimi, sushi has become a global sensation that captures the essence of Japanese cuisine."));

        return meals
    }

    function addDesertsSection(){
        const deserts = document.createElement("div");
        deserts.className = "section";
        const title = document.createElement("h1");
        title.innerText = "Deserts";
        deserts.appendChild(title);
        deserts.appendChild(addFood(_pics_melon_pan_jpg__WEBPACK_IMPORTED_MODULE_6__,"Melon Pan", "Sweet, soft, and fluffy Japanese bread with a patterned grid on its sugar cookie crust."));
        deserts.appendChild(addFood(_pics_japanese_parfait_jpeg__WEBPACK_IMPORTED_MODULE_4__, "Japanese Parfait", "Japanese parfait is a popular japanese desert with ice cream, mochi, red beans, cornflakes, fruits, and other toppings like pocky, though other options are available."));
        deserts.appendChild(addFood(_pics_mitarashi_dango_png__WEBPACK_IMPORTED_MODULE_7__, "Mitarashi Dango", "Dango is a dish that basically consists of 4 to 5 balls of rice flour dumplings covered with soy sauce glaze after being grilled. Dango balls are skewed on a bamboo stick and it is mostly eaten during springtime. The delicious, sweet, and chewy snack is often paired with tea or eaten as a dessert."))
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
    credits.innerText = "Arrow buttons taken from banner2.cleanpng.com\nFood explanations taken from gamerant.com";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTmFydXRvL25qbmFydXRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9waWNzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2FuaW1lLWFjZSk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBuYXJ1dG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjb250ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGNUY1REM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtZmFtaWx5OiBuYXJ1dG87XG59XG5cbi50YWItbGluayB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjFzIGZvbnQtc2l6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFiLWxpbms6aG92ZXIge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWFpbiB7XG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzQ1MmYyNztcbn1cbm1haW4gLm1haW4tcGljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogODAwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgaGVpZ2h0O1xufVxubWFpbiAubWFpbi1waWM6aG92ZXIge1xuICBoZWlnaHQ6IDgzMHB4O1xufVxuXG4ubWVudSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA4MzVweDtcbiAgbWFyZ2luOiA4MHB4IDAgMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVudSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1lbnUgLmFycm93LWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3OHB4O1xuICBwYWRkaW5nOiAwIDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51IC5hcnJvdy1kaXYgLmFycm93IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbn1cbi5tZW51IC5hcnJvdy1kaXYgLmFycm93OmhvdmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudSAuY3JlZGl0cyB7XG4gIGNvbG9yOiAjNDUyZjI3O1xufVxuLm1lbnUgLnNlY3Rpb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IHJlcGVhdCg0LCAxNzVweCk7XG59XG4ubWVudSAuc2VjdGlvbiBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG5hcnV0bztcbiAgbWFyZ2luOiAxMnB4IDBweCA3cHggMHB4O1xufVxuLm1lbnUgLnNlY3Rpb24gLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1REM7XG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcbn1cbi5tZW51IC5zZWN0aW9uIC5jYXJkOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4ubWVudSAuc2VjdGlvbiAuY2FyZCBpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDgyMHB4O1xuICBtYXJnaW46IDgwcHggMCAwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuLnBhZ2UgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBuYXJ1dG87XG59XG5cbi5jcmVkaXRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiBiZWlnZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtBQUVKO0FBQUE7RUFDSSxvQkFBQTtFQUNBLDRDQUFBO0FBRUo7QUFNQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFRQTtFQUNJLG1EQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGNBakJTO0VBa0JULGdCQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0EzQ087QUFxQ1g7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0FBTFI7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FBUEo7QUFRSTtFQUNJLGVBQUE7QUFOUjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVFRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBTlo7QUFPWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBTGhCO0FBU0k7RUFDSSxjQXRGRztBQStFWDtBQVVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdEQUFBO0FBUlI7QUFTUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQVBaO0FBU1E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLHlCQTVHQztFQTZHRCwyQkFBQTtBQVJaO0FBU1k7RUFDSSx3REFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QUFQaEI7QUFTWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBUGhCOztBQWFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWEo7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFWUjs7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBWEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBuYXJ1dG87XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05hcnV0by9uam5hcnV0by50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlxcXCIpXFxufVxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvYW5pbWUtYWNlJyk7XFxuXFxuXFxuJGhlYWRlci10eHQ6ICNGNUY1REM7XFxuJG1haW4tdHh0OiAjNDUyZjI3O1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuI2NvbnRlbnR7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9waWNzL2JhY2tncm91bmQucG5nJyk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAkaGVhZGVyLXR4dDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmb250LWZhbWlseTogbmFydXRvO1xcbn1cXG5cXG4udGFiLWxpbmt7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgZm9udC1zaXplO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWItbGluazpob3ZlcntcXG4gICAgZm9udC1zaXplOjQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbntcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICRtYWluLXR4dDtcXG4gICAgLm1haW4tcGlje1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGhlaWdodDtcXG4gICAgfVxcbiAgICAubWFpbi1waWM6aG92ZXJ7XFxuICAgICAgICBoZWlnaHQ6ODMwcHg7XFxuICAgIH1cXG59XFxuXFxuLm1lbnV7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA4MzVweDtcXG4gICAgbWFyZ2luOiA4MHB4IDAgMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgLmFycm93LWRpdntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDowO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6NzhweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgNjBweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAuYXJyb3d7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuMnMgO1xcbiAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5jcmVkaXRze1xcbiAgICAgICAgY29sb3I6ICRtYWluLXR4dDtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbntcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1hcmdpbjogMTJweDtcXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgcmVwZWF0KDQsIDE3NXB4KTtcXG4gICAgICAgIGgxe1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5Om5hcnV0bztcXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMHB4IDdweCAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItdHh0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBib3gtc2hhZG93O1xcbiAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnBhZ2V7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA4MjBweDtcXG4gICAgbWFyZ2luOiA4MHB4IDAgMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG4gICAgaDF7XFxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBuYXJ1dG87XFxuICAgIH1cXG59XFxuXFxuLmNyZWRpdHN7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGNvbG9yOiBiZWlnZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5BYm91dCgpe1xuICAgIGNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwYWdlLmNsYXNzTmFtZSA9IFwicGFnZVwiO1xuXG5cbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiQWJvdXQgVXNcIlxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVyVGV4dCA9IFwiQU5JTUVBVFMgaXMgYSBsb2ZpIGlucGlyZWQgcmVzdGF1cmFudCBmb3VuZCBpbiBTeWRuZXksIEF1c3RyYWxpYS4gT3VyIGFpbSBpcyB0byBlbnN1cmUgb3VyIGN1c3RvbWVycyBhcmUgaGF2aW5nIGdvb2QgdGltZSB3aGlsZSB0aGV5IGVhdCB0aGUgZm9vZHMgb2YgdGhlaXIgZmF2b3JpdGUgYW5pbWUgY2hhcmFjdGVycycgZmF2b3JpdGUgZm9vZHMhXCJcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgXG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgbmFydXRvIGZyb20gJy4vcGljcy9uYXJ1dG8tcmFtZW4ucG5nJztcbmltcG9ydCB7IG9wZW5NZW51IH0gZnJvbSAnLi9tZW51cy5qcyc7XG5pbXBvcnQgeyBvcGVuQWJvdXQgfSBmcm9tICcuL2Fib3V0LmpzJzsgXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuZm9yKGxldCBpPTA7aTwzO2krKyl7XG4gICAgY29uc3QgdGFiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYoaT09MCl7XG4gICAgICAgIHRhYkxpbmsuaWQgPSBcIm1lbnVzXCI7XG4gICAgICAgIHRhYkxpbmsuaW5uZXJUZXh0ID0gXCJNZW51c1wiXG4gICAgICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBvcGVuTWVudSgpXG4gICAgICAgIH0pXG4gICAgfWVsc2UgaWYoaT09MSl7XG4gICAgICAgIHRhYkxpbmsuaWQgPSBcImJyYW5kXCI7XG4gICAgICAgIHRhYkxpbmsuaW5uZXJUZXh0ID0gXCJBTklNRUFUU1wiO1xuICAgICAgICB0YWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgb3BlbkJyYW5kKClcbiAgICAgICAgfSlcbiAgICB9ZWxzZSBpZihpPT0yKXtcbiAgICAgICAgdGFiTGluay5pZCA9IFwiYWJvdXRcIjtcbiAgICAgICAgdGFiTGluay5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBvcGVuQWJvdXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdGFiTGluay5jbGFzc0xpc3QuYWRkKFwidGFiLWxpbmtcIilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFiTGluayk7XG59XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblxuXG5mdW5jdGlvbiBvcGVuQnJhbmQoKXtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRNYWluTGF5b3V0KCkpXG59XG5cbmZ1bmN0aW9uIGFkZE1haW5MYXlvdXQoKXtcbiAgICBjb25zdCBmaWd1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaWd1cmUuc3JjID0gbmFydXRvO1xuICAgIGZpZ3VyZS5jbGFzc05hbWUgPSBcIm1haW4tcGljXCI7XG4gICAgXG4gICAgcmV0dXJuIGZpZ3VyZVxufVxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5tYWluLmFwcGVuZENoaWxkKGFkZE1haW5MYXlvdXQoKSlcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcblxuY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY3JlZGl0cy5pbm5lclRleHQgPSBcIkJhY2tncm91bmQgaW1hZ2UgdGFrZW4gZnJvbSByYXJlLWdhbGxlcnkuY29tXCI7XG5jcmVkaXRzLmNsYXNzTmFtZSA9IFwiY3JlZGl0c1wiXG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdHMpIiwiaW1wb3J0IFByZXZBcnJvdyBmcm9tICcuL3BpY3MvcHJldmlvdXMtYXJyb3cucG5nJztcbmltcG9ydCBOZXh0QXJyb3cgZnJvbSAnLi9waWNzL25leHQtYXJyb3cucG5nJztcbmltcG9ydCBvbmlnaXJpIGZyb20gJy4vcGljcy9vbmlnaXJpLmpwZyc7XG5pbXBvcnQgZ3lvemEgZnJvbSAnLi9waWNzL2d5b3phLnBuZyc7XG5pbXBvcnQgamFwYW5lc2VQYXJmYWl0IGZyb20gJy4vcGljcy9qYXBhbmVzZS1wYXJmYWl0LmpwZWcnO1xuaW1wb3J0IGthdHN1ZG9uIGZyb20gJy4vcGljcy9rYXRzdWRvbi5qcGVnJztcbmltcG9ydCBtZWxvblBhbiBmcm9tICcuL3BpY3MvbWVsb24tcGFuLmpwZyc7XG5pbXBvcnQgbWl0YXJhc2hpRGFuZ28gZnJvbSAnLi9waWNzL21pdGFyYXNoaS1kYW5nby5wbmcnO1xuaW1wb3J0IG5pa3VtYW4gZnJvbSAnLi9waWNzL25pa3VtYW4uanBnJztcbmltcG9ydCByYW1lbiBmcm9tICcuL3BpY3MvcmFtZW4uanBnJztcbmltcG9ydCBzdXNoaSBmcm9tICcuL3BpY3Mvc3VzaGkucG5nJztcbmltcG9ydCB5YWtpbmlrdSBmcm9tICcuL3BpY3MveWFraW5pa3UuanBnJztcblxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcIm1lbnVcIjtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KVxuXG5cblxuICAgIGZ1bmN0aW9uIGFkZEZvb2Qoc3JjLCBuYW1lLCB0ZXh0KXtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2FyZC5jbGFzc05hbWU9XCJjYXJkXCI7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoY29udGV4dCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgICAgIHJldHVybiBjYXJkXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEFwcGV0aXplcnNTZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBldGl6ZXJzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJBcHBldGl6ZXJzXCI7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBhcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFkZEZvb2Qob25pZ2lyaSwgXCJPbmlnaXJpXCIsIFwiT25pZ2lyaSBpcyBhIHdoaXRlIHJpY2UgYmFsbCBzaGFwZWQgaW50byBhIHRyaWFuZ2xlLiBPbmlnaXJpIGFyZSBvZnRlbiBmaWxsZWQgd2l0aCB2ZWdldGFibGVzIG9yIG1lYXQgYW5kIGl0IGlzIHdyYXBwZWQgaW4gbm9yaSBzZWF3ZWVkLiBBbHRob3VnaCBpdCByZXNlbWJsZXMgc3VzaGksIG9uaWdpcmkgZG9lc24ndCB1c2UgcmF3IGZpc2guXCIpKTtcbiAgICAgICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKG5pa3VtYW4sIFwiTmlrdW1hblwiLCBcIk5pa3VtYW4gaXMgYSBKYXBhbmVzZSBzdGVhbWVkIGZsdWZmeSBidW4gZmlsbGVkIHdpdGggbWluY2VkIHBvcmsuIFRoZXkgYXJlIHN0ZWFtZWQgaW4gYSBiYW1ib28gc3RlYW1lciBhbmQgYXJlIHNlcnZlZCBob3QuIE5pa3VtYW4gaXMgdGhlIHBlcmZlY3Qgb24tdGhlLWdvIHNhdm9yeSBzbmFjayBhbmQgY29tZm9ydCBmb29kIGZvciB0aG9zZSBjb2xkZXIgbmlnaHRzLlwiKSk7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChneW96YSwgXCJHeW96YVwiLCBcIk9yaWdpbmF0aW5nIGZyb20gQ2hpbmEsIHRoaXMgZHVtcGxpbmctaW5zcGlyZWQgZGlzaCBpcyBhIHRoaW4gZG91Z2ggZmlsbGVkIHdpdGggbWVhdCBsaWtlIHBvcmsgb3IgdmVnZ2llcyAoY2FiYmFnZSwgZ3JlZW4gb25pb25zLCBnYXJsaWMsIGFuZCBnaW5nZXIpIGFuZCBzZXJ2ZWQgd2l0aCBzb3kgc2F1Y2UuIEd5b3phIG9mdGVuIGdldHMgc2VydmVkIGFsb25nc2lkZSBhIGJvd2wgb2YgcmFtZW4gb3IgYmVmb3JlaGFuZCBhcyBhbiBhcHBldGl6ZXJcIikpO1xuXG4gICAgICAgIHJldHVybiBhcHBldGl6ZXJzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1lYWxzU2VjdGlvbigpe1xuICAgICAgICBjb25zdCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lYWxzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIk1lYWxzXCI7XG4gICAgICAgIG1lYWxzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChyYW1lbiwgXCJSYW1lblwiLCBcIlRoZSBtb3N0IGNvbW1vbiBhbmQgaWNvbmljIGZvb2Qgc2VlbiBpbiBhbmltZSBpcyB0aGUgYm93bCBvZiByYW1lbi4gSXQncyBhIGZhdm9yaXRlIGRpc2ggZm9yIG1hbnkgcG9wdWxhciBjaGFyYWN0ZXJzIGxpa2UgTmFydXRvLCB3aG8gbG92ZXMgZWF0aW5nIG1pc28gY2hhc2h1IHJhbWVuIGF0IEljaGlyYWt1IFJhbWVuLiBSYW1lbiBpcyBhbHNvIGVhdGVuIGJ5IEdva3UgYW5kIEJlZXJ1cyBmcm9tIERyYWdvbiBCYWxsLiBTZW5rdSBmcm9tIERyLiBTdG9uZSBsb3ZlcyBpdCBzbyBtdWNoLCB0aGF0IGhlIGV2ZW4gbWFuYWdlZCB0byAnaW52ZW50JyBpdCBpbiB0aGUgc3RvbmUgYWdlLlwiKSk7XG4gICAgICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2QoeWFraW5pa3UsIFwiWWFraW5pa3VcIiwgXCJZYWtpbmlrdSBpcyBhIHN0eWxlIG9mIGNvb2tpbmcgYml0ZS1zaXplIG1lYXQgYW5kIHZlZ2V0YWJsZXMgb3ZlciBhIGZsYW1lIG9mIHdvb2QgY2hhcmNvYWxzLiBJbiBpdHMgYnJvYWRlc3Qgc2Vuc2UsIHJlZmVycyB0byBncmlsbGVkIG1lYXQgY3Vpc2luZS5cIikpO1xuICAgICAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKGthdHN1ZG9uLCBcIkthdHN1ZG9uXCIsIFwiS2F0c3Vkb24gaXMgYSBKYXBhbmVzZSBwb3JrIGN1dGxldCByaWNlIGJvd2wuIFRoZSBwb3JrIGlzIGJyZWFkZWQgYW5kIGZyaWVkIGJlZm9yZSBiZWluZyBsYXllcmVkIG9uIHRvcCBvZiBhbiBlZ2cgb21lbGV0LCByaWNlLCBhbmQgc2F1dGVlZCBvbmlvbnMuXCIpKTtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChzdXNoaSwgXCJTdXNoaVwiLCBcIlRoaXMgYml0ZS1zaXplZCBkZWxpY2FjeSBmZWF0dXJlcyBzZWFzb25lZCByaWNlIHRvcHBlZCB3aXRoIHZhcmlvdXMgdHlwZXMgb2Ygc2VhZm9vZCwgdmVnZXRhYmxlcywgYW5kIG90aGVyIGluZ3JlZGllbnRzLiBXaGV0aGVyIHNlcnZlZCBhcyBuaWdpcmksIG1ha2kgcm9sbHMsIG9yIHNhc2hpbWksIHN1c2hpIGhhcyBiZWNvbWUgYSBnbG9iYWwgc2Vuc2F0aW9uIHRoYXQgY2FwdHVyZXMgdGhlIGVzc2VuY2Ugb2YgSmFwYW5lc2UgY3Vpc2luZS5cIikpO1xuXG4gICAgICAgIHJldHVybiBtZWFsc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZERlc2VydHNTZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRlc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNlcnRzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJEZXNlcnRzXCI7XG4gICAgICAgIGRlc2VydHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QobWVsb25QYW4sXCJNZWxvbiBQYW5cIiwgXCJTd2VldCwgc29mdCwgYW5kIGZsdWZmeSBKYXBhbmVzZSBicmVhZCB3aXRoIGEgcGF0dGVybmVkIGdyaWQgb24gaXRzIHN1Z2FyIGNvb2tpZSBjcnVzdC5cIikpO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoamFwYW5lc2VQYXJmYWl0LCBcIkphcGFuZXNlIFBhcmZhaXRcIiwgXCJKYXBhbmVzZSBwYXJmYWl0IGlzIGEgcG9wdWxhciBqYXBhbmVzZSBkZXNlcnQgd2l0aCBpY2UgY3JlYW0sIG1vY2hpLCByZWQgYmVhbnMsIGNvcm5mbGFrZXMsIGZydWl0cywgYW5kIG90aGVyIHRvcHBpbmdzIGxpa2UgcG9ja3ksIHRob3VnaCBvdGhlciBvcHRpb25zIGFyZSBhdmFpbGFibGUuXCIpKTtcbiAgICAgICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChhZGRGb29kKG1pdGFyYXNoaURhbmdvLCBcIk1pdGFyYXNoaSBEYW5nb1wiLCBcIkRhbmdvIGlzIGEgZGlzaCB0aGF0IGJhc2ljYWxseSBjb25zaXN0cyBvZiA0IHRvIDUgYmFsbHMgb2YgcmljZSBmbG91ciBkdW1wbGluZ3MgY292ZXJlZCB3aXRoIHNveSBzYXVjZSBnbGF6ZSBhZnRlciBiZWluZyBncmlsbGVkLiBEYW5nbyBiYWxscyBhcmUgc2tld2VkIG9uIGEgYmFtYm9vIHN0aWNrIGFuZCBpdCBpcyBtb3N0bHkgZWF0ZW4gZHVyaW5nIHNwcmluZ3RpbWUuIFRoZSBkZWxpY2lvdXMsIHN3ZWV0LCBhbmQgY2hld3kgc25hY2sgaXMgb2Z0ZW4gcGFpcmVkIHdpdGggdGVhIG9yIGVhdGVuIGFzIGEgZGVzc2VydC5cIikpXG4gICAgICAgIHJldHVybiBkZXNlcnRzO1xuICAgIH1cblxuXG5cbiAgICBsZXQgc2VjdGlvbkluZGV4ID0gMDtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpXG5cbiAgICBjb25zdCBhcnJvd3MgPSAoZnVuY3Rpb24gYWRkQXJyb3dzKCl7XG4gICAgICAgIGNvbnN0IHByZXZBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwcmV2QXJyb3cuc3JjID0gUHJldkFycm93O1xuICAgICAgICBwcmV2QXJyb3cuY2xhc3NOYW1lID0gXCJhcnJvd1wiO1xuICAgICAgICBjb25zdCBuZXh0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV4dEFycm93LnNyYyA9IE5leHRBcnJvdztcbiAgICAgICAgbmV4dEFycm93LmNsYXNzTmFtZSA9IFwiYXJyb3dcIjtcbiAgICAgICAgXG5cbiAgICAgICAgcHJldkFycm93LnN0eWxlPVwiY3Vyc29yOiBub3QtYWxsb3dlZFwiXG4gICAgICAgIHByZXZBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBpZihzZWN0aW9uSW5kZXghPT0wKXtcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvblwiKSk7XG4gICAgICAgICAgICAgICAgbmV4dEFycm93LnN0eWxlID0gXCJjdXJzb3I6IGFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleC0tO1xuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTEpe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZE1lYWxzU2VjdGlvbigpKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlY3Rpb25JbmRleD09PTApe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUgPSBcImN1cnNvcjogbm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCE9PTIpe1xuICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKVxuICAgICAgICAgICAgICAgIHByZXZBcnJvdy5zdHlsZSA9IFwiY3Vyc29yOiBhbGxvd2VkXCJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGRNZWFsc1NlY3Rpb24oKSlcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWN0aW9uSW5kZXg9PT0yKXtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGREZXNlcnRzU2VjdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09Mil7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlPVwiY3Vyc29yOm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3ByZXZBcnJvdywgbmV4dEFycm93fVxuICAgIH0pKCk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFycm93RGl2LmNsYXNzTmFtZSA9IFwiYXJyb3ctZGl2XCI7XG4gICAgYXJyb3dEaXYuYXBwZW5kQ2hpbGQoYXJyb3dzLnByZXZBcnJvdyk7XG4gICAgYXJyb3dEaXYuYXBwZW5kQ2hpbGQoYXJyb3dzLm5leHRBcnJvdyk7XG5cbiAgICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlZGl0cy5pbm5lclRleHQgPSBcIkFycm93IGJ1dHRvbnMgdGFrZW4gZnJvbSBiYW5uZXIyLmNsZWFucG5nLmNvbVxcbkZvb2QgZXhwbGFuYXRpb25zIHRha2VuIGZyb20gZ2FtZXJhbnQuY29tXCI7XG4gICAgY3JlZGl0cy5jbGFzc05hbWUgPSBcImNyZWRpdHNcIjtcbiAgICAgICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVkaXRzKVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYXJyb3dEaXYpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9