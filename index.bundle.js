"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGsetter: () => (/* binding */ BGsetter),
/* harmony export */   locationsWeather: () => (/* binding */ locationsWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const BGsetter = async condition => {
  const createIMG = document.createElement("img");
  createIMG.classList.add("bg-img");
  const body = document.querySelector("body");
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=${condition + " weather"}`, {
      mode: "cors"
    });
    const cat = await response.json();
    createIMG.src = cat.data.images.original.url;
    body.style.backgroundImage = `url('${createIMG.src}')`;
  } catch (error) {
    console.log(error);
  }
};
const locationsWeather = async location => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c40142647fab4af380442559231506&q=${location}&days=10`, {
      mode: "cors"
    });
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  height: 100%;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;
  line-height: 1.6;
  font-weight: 400;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: auto;
}
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-screen__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-screen__circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-top-color: #777;
  animation: loading-circle 1s infinite linear;
}

.loading-screen__text {
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
}

@keyframes loading-circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 0.5fr 1fr 64px;
  grid-template-areas:
    "header header"
    "main main"
    "forcast other"
    "footer footer";
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

.search-container {
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
}

.search-btn {
  width: 50px;
  height: 50px;
}

.search-btn:hover {
  cursor: pointer;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

input {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  background-color: transparent;
  outline: none;
  padding: 10px;
  font-size: 16px;
  width: 300px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #6c63ff;
}

input::placeholder {
  color: #999;
}

.unit-convertor-toggle {
  display: inline-block;
}

.unit-convertor-toggle__checkbox {
  display: none;
}

.unit-convertor-toggle__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.unit-convertor-toggle__text {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 0 10px;
}

.unit-convertor-toggle__slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s;
}

.unit-convertor-toggle__checkbox:checked + .unit-convertor-toggle__label {
  background-color: #2196f3;
}

.unit-convertor-toggle__checkbox:checked
  + .unit-convertor-toggle__label
  .unit-convertor-toggle__slider {
  transform: translateX(40px);
}

.error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(153, 55, 55, 0.6);
  z-index: 9999;
}

.error__box {
  background-color: #ff6464;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.error__text {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.weather-info-container {
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
  backdrop-filter: blur(7px);
  border-radius: 8px;
  margin: 1rem;
  width: 35%;
  backdrop-filter: blur(7px);
}

.weather-info__temp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather-info__temp-value {
  font-size: 3rem;
  font-weight: 100;
}

.weather-info__temp-unit,
.forecast-info__temp-unit {
  align-self: flex-start;
}

.weather-info__condition {
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather-info__condition-img {
  width: 50px;
  height: 50px;
  align-self: flex-start;
}

.forecast-container {
  grid-area: forcast;
  padding: 2rem;
  font-size: 1rem;
  border-radius: 8px;
  margin: 1rem;
  backdrop-filter: blur(7px);
  width: 80%;
  justify-self: center;
  align-self: center;
}

.forecast {
  width: 100%;
}

.forecast__title,
.other-metrics__humidity-text,
.other-metrics__wind-text,
.other-metrics__pressure-text,
.other-metrics__uv-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  border-bottom: #fff 1px solid;
  align-self: flex-start;
  width: 100%;
}

.forecast__day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #fff 1px solid;
}

.forecast__day-temp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50px;
}

.forecast__day:last-child {
  border-bottom: none;
}

.other-metrics-container {
  grid-area: other;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
}

.other-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  grid-template-areas:
    "humidity wind"
    "pressure visibility";
  width: 100%;
  height: 100%;
}

.other-metrics > div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 90%;
  border-radius: 8px;
  padding: 1rem;
  backdrop-filter: blur(7px);
}

.other-metrics__humidity-value,
.other-metrics__wind-value,
.other-metrics__pressure-value,
.other-metrics__uv-value {
  font-size: 2rem;
  font-weight: 100;
  margin-top: 5rem;
}

.footer {
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  font-size: 1rem;
  backdrop-filter: blur(7px);
}

@media only screen and (max-width: 600px) {
  body {
    background-repeat: repeat;
  }

  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 0.5fr 1fr 1fr 90px;
    grid-template-areas:
      "header"
      "main"
      "forcast"
      "other"
      "footer";
  }

  .search-container {
    justify-content: center;
    padding: 1rem;
    font-size: 0.8rem;
  }

  input {
    width: 100%;
    max-width: 300px;
  }

  .weather-info {
    width: 80%;
    margin: 0;
  }

  .forecast-container {
    width: 100%;
    margin: 0;
  }

  .other-metrics-container {
    width: 100%;
    margin: 0;
  }

  .footer {
    width: 100%;
    margin: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.6rem;\n  color: #fff;\n  line-height: 1.6;\n  font-weight: 400;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  overflow: auto;\n}\n.loading-screen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-screen__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.loading-screen__circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  border-top-color: #777;\n  animation: loading-circle 1s infinite linear;\n}\n\n.loading-screen__text {\n  color: #fff;\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n@keyframes loading-circle {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 60px 0.5fr 1fr 64px;\n  grid-template-areas:\n    \"header header\"\n    \"main main\"\n    \"forcast other\"\n    \"footer footer\";\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.search-container {\n  grid-area: header;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.search-btn {\n  width: 50px;\n  height: 50px;\n}\n\n.search-btn:hover {\n  cursor: pointer;\n  animation: pulse 1s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\ninput {\n  background-color: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(8px);\n  border-radius: 8px;\n  border: none;\n  border-bottom: 2px solid #ddd;\n  background-color: transparent;\n  outline: none;\n  padding: 10px;\n  font-size: 16px;\n  width: 300px;\n  transition: border-color 0.3s ease;\n}\n\ninput:focus {\n  border-color: #6c63ff;\n}\n\ninput::placeholder {\n  color: #999;\n}\n\n.unit-convertor-toggle {\n  display: inline-block;\n}\n\n.unit-convertor-toggle__checkbox {\n  display: none;\n}\n\n.unit-convertor-toggle__label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 70px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #ccc;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.unit-convertor-toggle__text {\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0 10px;\n}\n\n.unit-convertor-toggle__slider {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: transform 0.3s;\n}\n\n.unit-convertor-toggle__checkbox:checked + .unit-convertor-toggle__label {\n  background-color: #2196f3;\n}\n\n.unit-convertor-toggle__checkbox:checked\n  + .unit-convertor-toggle__label\n  .unit-convertor-toggle__slider {\n  transform: translateX(40px);\n}\n\n.error {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(153, 55, 55, 0.6);\n  z-index: 9999;\n}\n\n.error__box {\n  background-color: #ff6464;\n  color: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n\n.error__text {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.weather-info-container {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n  font-size: 1rem;\n  backdrop-filter: blur(7px);\n  border-radius: 8px;\n  margin: 1rem;\n  width: 35%;\n  backdrop-filter: blur(7px);\n}\n\n.weather-info__temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info__temp-value {\n  font-size: 3rem;\n  font-weight: 100;\n}\n\n.weather-info__temp-unit,\n.forecast-info__temp-unit {\n  align-self: flex-start;\n}\n\n.weather-info__condition {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info__condition-img {\n  width: 50px;\n  height: 50px;\n  align-self: flex-start;\n}\n\n.forecast-container {\n  grid-area: forcast;\n  padding: 2rem;\n  font-size: 1rem;\n  border-radius: 8px;\n  margin: 1rem;\n  backdrop-filter: blur(7px);\n  width: 80%;\n  justify-self: center;\n  align-self: center;\n}\n\n.forecast {\n  width: 100%;\n}\n\n.forecast__title,\n.other-metrics__humidity-text,\n.other-metrics__wind-text,\n.other-metrics__pressure-text,\n.other-metrics__uv-text {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  border-bottom: #fff 1px solid;\n  align-self: flex-start;\n  width: 100%;\n}\n\n.forecast__day {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: #fff 1px solid;\n}\n\n.forecast__day-temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 50px;\n}\n\n.forecast__day:last-child {\n  border-bottom: none;\n}\n\n.other-metrics-container {\n  grid-area: other;\n  padding: 2rem;\n  border-radius: 8px;\n  margin: 1rem;\n  width: 100%;\n  height: 100%;\n  justify-self: center;\n  align-self: center;\n}\n\n.other-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1.5rem;\n  grid-template-areas:\n    \"humidity wind\"\n    \"pressure visibility\";\n  width: 100%;\n  height: 100%;\n}\n\n.other-metrics > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1.5rem;\n  width: 100%;\n  height: 90%;\n  border-radius: 8px;\n  padding: 1rem;\n  backdrop-filter: blur(7px);\n}\n\n.other-metrics__humidity-value,\n.other-metrics__wind-value,\n.other-metrics__pressure-value,\n.other-metrics__uv-value {\n  font-size: 2rem;\n  font-weight: 100;\n  margin-top: 5rem;\n}\n\n.footer {\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  background-color: transparent;\n  color: #fff;\n  padding: 2rem 0;\n  text-align: center;\n  font-size: 1rem;\n  backdrop-filter: blur(7px);\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    background-repeat: repeat;\n  }\n\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px 0.5fr 1fr 1fr 90px;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"forcast\"\n      \"other\"\n      \"footer\";\n  }\n\n  .search-container {\n    justify-content: center;\n    padding: 1rem;\n    font-size: 0.8rem;\n  }\n\n  input {\n    width: 100%;\n    max-width: 300px;\n  }\n\n  .weather-info {\n    width: 80%;\n    margin: 0;\n  }\n\n  .forecast-container {\n    width: 100%;\n    margin: 0;\n  }\n\n  .other-metrics-container {\n    width: 100%;\n    margin: 0;\n  }\n\n  .footer {\n    width: 100%;\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUVyQixNQUFNQSxRQUFRLEdBQUcsTUFBT0MsU0FBUyxJQUFLO0VBQ3BDLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNqQyxNQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQyxJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsa0ZBQWlGVCxTQUFTLEdBQUcsVUFBVyxFQUFDLEVBQzFHO01BQUVVLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNqQ1gsU0FBUyxDQUFDWSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztJQUM1Q1gsSUFBSSxDQUFDWSxLQUFLLENBQUNDLGVBQWUsR0FBSSxRQUFPbEIsU0FBUyxDQUFDWSxHQUFJLElBQUc7RUFDeEQsQ0FBQyxDQUFDLE9BQU9PLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3BCO0FBQ0YsQ0FBQztBQUVELE1BQU1HLGdCQUFnQixHQUFHLE1BQU9DLFFBQVEsSUFBSztFQUMzQyxJQUFJO0lBQ0YsTUFBTWhCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLG1GQUFrRmUsUUFBUyxVQUFTLEVBQ3JHO01BQUVkLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxNQUFNZSxPQUFPLEdBQUcsTUFBTWpCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDckMsT0FBT2EsT0FBTztFQUNoQixDQUFDLENBQUMsT0FBT0wsS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFNBQVMsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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QUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBCR3NldHRlciA9IGFzeW5jIChjb25kaXRpb24pID0+IHtcbiAgY29uc3QgY3JlYXRlSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY3JlYXRlSU1HLmNsYXNzTGlzdC5hZGQoXCJiZy1pbWdcIik7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9rZXk9R0NUQ2tvSDh1RnIycFBlSkpXcTNDTXB6UUJuNklidHYmcz0ke2NvbmRpdGlvbiArIFwiIHdlYXRoZXJcIn1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjYXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3JlYXRlSU1HLnNyYyA9IGNhdC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NyZWF0ZUlNRy5zcmN9JylgO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgbG9jYXRpb25zV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jNDAxNDI2NDdmYWI0YWYzODA0NDI1NTkyMzE1MDYmcT0ke2xvY2F0aW9ufSZkYXlzPTEwYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IEJHc2V0dGVyLCBsb2NhdGlvbnNXZWF0aGVyIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5sb2FkaW5nLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGluZy1zY3JlZW5fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXNjcmVlbl9fY2lyY2xlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xuICBhbmltYXRpb246IGxvYWRpbmctY2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmxvYWRpbmctc2NyZWVuX190ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nLWNpcmNsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMC41ZnIgMWZyIDY0cHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICBcIm1haW4gbWFpblwiXG4gICAgXCJmb3JjYXN0IG90aGVyXCJcbiAgICBcImZvb3RlciBmb290ZXJcIjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zZWFyY2gtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzZjNjNmZjtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGVfX2NoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGVfX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGVfX2NoZWNrYm94OmNoZWNrZWQgKyAudW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGVfX2NoZWNrYm94OmNoZWNrZWRcbiAgKyAudW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19sYWJlbFxuICAudW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19zbGlkZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG59XG5cbi5lcnJvciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDU1LCA1NSwgMC42KTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmVycm9yX19ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5lcnJvcl9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlYXRoZXItaW5mby1jb250YWluZXIge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhdGhlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDFyZW07XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xufVxuXG4ud2VhdGhlci1pbmZvX190ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLWluZm9fX3RlbXAtdmFsdWUge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi53ZWF0aGVyLWluZm9fX3RlbXAtdW5pdCxcbi5mb3JlY2FzdC1pbmZvX190ZW1wLXVuaXQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ud2VhdGhlci1pbmZvX19jb25kaXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItaW5mb19fY29uZGl0aW9uLWltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGZvcmNhc3Q7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDFyZW07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZm9yZWNhc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcmVjYXN0X190aXRsZSxcbi5vdGhlci1tZXRyaWNzX19odW1pZGl0eS10ZXh0LFxuLm90aGVyLW1ldHJpY3NfX3dpbmQtdGV4dCxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS10ZXh0LFxuLm90aGVyLW1ldHJpY3NfX3V2LXRleHQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1ib3R0b206ICNmZmYgMXB4IHNvbGlkO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcmVjYXN0X19kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206ICNmZmYgMXB4IHNvbGlkO1xufVxuXG4uZm9yZWNhc3RfX2RheS10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5mb3JlY2FzdF9fZGF5Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ub3RoZXItbWV0cmljcy1jb250YWluZXIge1xuICBncmlkLWFyZWE6IG90aGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm90aGVyLW1ldHJpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDEuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImh1bWlkaXR5IHdpbmRcIlxuICAgIFwicHJlc3N1cmUgdmlzaWJpbGl0eVwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3RoZXItbWV0cmljcyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbn1cblxuLm90aGVyLW1ldHJpY3NfX2h1bWlkaXR5LXZhbHVlLFxuLm90aGVyLW1ldHJpY3NfX3dpbmQtdmFsdWUsXG4ub3RoZXItbWV0cmljc19fcHJlc3N1cmUtdmFsdWUsXG4ub3RoZXItbWV0cmljc19fdXYtdmFsdWUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG5cbi5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuNWZyIDFmciAxZnIgOTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJoZWFkZXJcIlxuICAgICAgXCJtYWluXCJcbiAgICAgIFwiZm9yY2FzdFwiXG4gICAgICBcIm90aGVyXCJcbiAgICAgIFwiZm9vdGVyXCI7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLndlYXRoZXItaW5mbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAub3RoZXItbWV0cmljcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0E7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkM7Ozs7bUJBSWlCO0VBQ2pCLGFB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ICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVuX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW5fX2NpcmNsZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbl9fdGV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZy1jaXJjbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuNWZyIDFmciA2NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb3JjYXN0IG90aGVyXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzZjNjNmZjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX190ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi51bml0LWNvbnZlcnRvci10b2dnbGVfX3NsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDJweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19jaGVja2JveDpjaGVja2VkICsgLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3g6Y2hlY2tlZFxcbiAgKyAudW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19sYWJlbFxcbiAgLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fc2xpZGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTUsIDU1LCAwLjYpO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmVycm9yX19ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmVycm9yX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHdpZHRoOiAzNSU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG59XFxuXFxuLndlYXRoZXItaW5mb19fdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvX190ZW1wLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi53ZWF0aGVyLWluZm9fX3RlbXAtdW5pdCxcXG4uZm9yZWNhc3QtaW5mb19fdGVtcC11bml0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi53ZWF0aGVyLWluZm9fX2NvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvX19jb25kaXRpb24taW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGZvcmNhc3Q7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0X190aXRsZSxcXG4ub3RoZXItbWV0cmljc19faHVtaWRpdHktdGV4dCxcXG4ub3RoZXItbWV0cmljc19fd2luZC10ZXh0LFxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS10ZXh0LFxcbi5vdGhlci1tZXRyaWNzX191di10ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAjZmZmIDFweCBzb2xpZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0X19kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAjZmZmIDFweCBzb2xpZDtcXG59XFxuXFxuLmZvcmVjYXN0X19kYXktdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5mb3JlY2FzdF9fZGF5Omxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogb3RoZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaHVtaWRpdHkgd2luZFxcXCJcXG4gICAgXFxcInByZXNzdXJlIHZpc2liaWxpdHlcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vdGhlci1tZXRyaWNzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3NfX2h1bWlkaXR5LXZhbHVlLFxcbi5vdGhlci1tZXRyaWNzX193aW5kLXZhbHVlLFxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS12YWx1ZSxcXG4ub3RoZXItbWV0cmljc19fdXYtdmFsdWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuNWZyIDFmciAxZnIgOTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJtYWluXFxcIlxcbiAgICAgIFxcXCJmb3JjYXN0XFxcIlxcbiAgICAgIFxcXCJvdGhlclxcXCJcXG4gICAgICBcXFwiZm9vdGVyXFxcIjtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5vdGhlci1tZXRyaWNzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJCR3NldHRlciIsImNvbmRpdGlvbiIsImNyZWF0ZUlNRyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJjYXQiLCJqc29uIiwic3JjIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbnNXZWF0aGVyIiwibG9jYXRpb24iLCJ3ZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==