"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["dom"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");


const createNewElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};
const searchWeather = async () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");
  const searchLocation = async location => {
    loadingScreen();
    try {
      const weather = await (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationsWeather)(location);
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.BGsetter)(weather.current.condition.text);
      updateWeatherInfo(weather);
      updateForecastInfo(weather);
      updateOtherMetricsInfo(weather);
    } catch (error) {
      console.log(error);
      errorDisplay();
    }
    removeLoadingScreen();
  };
  const handleSearch = async () => {
    const location = searchInput.value;
    await searchLocation(location);
  };
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", async event => {
    if (event.key === "Enter") {
      const location = searchInput.value;
      await searchLocation(location);
    }
  });
};
const errorDisplay = () => {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error");
  const errorBox = document.createElement("div");
  errorBox.classList.add("error__box");
  const errorText = document.createElement("h3");
  errorText.classList.add("error__text");
  errorText.textContent = "Please enter a valid location";
  errorBox.appendChild(errorText);
  errorContainer.appendChild(errorBox);
  document.body.appendChild(errorContainer);
  setTimeout(() => {
    errorContainer.remove();
  }, 1500);
};
const defaultWeather = async () => {
  try {
    const weather = await (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationsWeather)("New York");
    updateWeatherInfo(weather);
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.BGsetter)(weather.current.condition.text);
  } catch (error) {
    console.log(error);
  }
};
const updateWeatherInfo = weather => {
  const container = document.querySelector(".container");
  const weatherInfoContainer = document.querySelector(".weather-info-container");
  if (weatherInfoContainer) {
    weatherInfoContainer.remove();
  }
  const weatherInfoContainerNew = createNewElement("div", "weather-info-container");
  weatherInfoContainerNew.appendChild(weatherInfo(weather));
  container.appendChild(weatherInfoContainerNew);
};
const weatherInfo = weather => {
  const weatherInfo = createNewElement("div", "weather-info");
  weatherInfo.innerHTML = `
      <div class="weather-info__location">
          <h1 class="weather-info__location-region">${weather.location.region}</h1>
      </div>
      <div class="weather-info__temp">
          <h1 class="weather-info__temp-value">${weather.current.temp_c}</h1>
          <h3 class="weather-info__temp-unit">°C</h3>
      </div>
      <div class="weather-info__condition">
      <h3 class="weather-info__condition-text">${weather.current.condition.text}</h3>
      <img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}" class="weather-info__condition-img">
  </div>
      `;
  return weatherInfo;
};
const searchForecast = async () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");
  searchBtn.addEventListener("click", async () => {
    const location = searchInput.value;
    try {
      const weather = await (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationsWeather)(location);
      updateForecastInfo(weather);
    } catch (error) {
      console.log(error);
    }
  });
};
const defaultForecast = async () => {
  try {
    const weather = await (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationsWeather)("New York");
    updateForecastInfo(weather);
  } catch (error) {
    console.log(error);
  }
};
const updateForecastInfo = weather => {
  const container = document.querySelector(".container");
  const forecastInfoContainer = document.querySelector(".forecast-container");
  if (forecastInfoContainer) {
    forecastInfoContainer.remove();
  }
  const forecastInfoContainerNew = createNewElement("div", "forecast-container");
  forecastInfoContainerNew.appendChild(forecastInfo(weather));
  container.appendChild(forecastInfoContainerNew);
};
const forecastInfo = weather => {
  const forecast = createNewElement("div", "forecast");
  forecast.innerHTML = `
      <h1 class="forecast__title">10 Day Forecast</h1>
      <div class="forecastdays__container">
          ${weather.forecast.forecastday.slice(0, 9).map(day => `
              <div class="forecast__day">
                  <h3 class="forecast__day-name">${day.date}</h3>
                  <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" class="forecast__day-img">
                  <div class="forecast__day-temp">
                    <h3 class="forecast__day-temp-value">${day.day.avgtemp_c}</h3>
                    <h3 class="forecast-info__temp-unit">°C</h3>
                  </div>
              </div>
          `).join("")}
      </div>
  `;
  return forecast;
};
const defaultOtherMetrics = async () => {
  try {
    const weather = await (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationsWeather)("New York");
    updateOtherMetricsInfo(weather);
  } catch (error) {
    console.log(error);
  }
};
const updateOtherMetricsInfo = weather => {
  const container = document.querySelector(".container");
  const otherMetricsInfoContainer = document.querySelector(".other-metrics-container");
  if (otherMetricsInfoContainer) {
    otherMetricsInfoContainer.remove();
  }
  const otherMetricsInfoContainerNew = createNewElement("div", "other-metrics-container");
  otherMetricsInfoContainerNew.appendChild(otherMetricsInfo(weather));
  container.appendChild(otherMetricsInfoContainerNew);
};
const otherMetricsInfo = weather => {
  const otherMetrics = createNewElement("div", "other-metrics");
  otherMetrics.innerHTML = `
        <div class="other-metrics__humidity">
            <h3 class="other-metrics__humidity-text">Humidity</h3>
            <h3 class="other-metrics__humidity-value">${weather.current.humidity}%</h3>
        </div>
        <div class="other-metrics__wind">
            <h3 class="other-metrics__wind-text">Wind</h3>
            <h3 class="other-metrics__wind-value">${weather.current.wind_kph} kph</h3>
        </div>
        <div class="other-metrics__uv">
            <h3 class="other-metrics__uv-text">UV Index</h3>
            <h3 class="other-metrics__uv-value">${weather.current.uv}</h3>
        </div>
        <div class="other-metrics__pressure">
            <h3 class="other-metrics__pressure-text">Pressure</h3>
            <h3 class="other-metrics__pressure-value">${weather.current.pressure_mb} mb</h3>
        </div>
    `;
  return otherMetrics;
};
const unitTogger = () => {
  const currentWeatherTemp = document.querySelector(".weather-info__temp-value");
  const forecastWeatherTemp = document.querySelectorAll(".forecast__day-temp-value");
  const weatherUnit = document.querySelectorAll(".weather-info__temp-unit");
  const forecastUnit = document.querySelectorAll(".forecast-info__temp-unit");
  if (weatherUnit[0].textContent === "°C") {
    currentWeatherTemp.textContent = Math.round(currentWeatherTemp.textContent * 9 / 5 + 32);
    forecastWeatherTemp.forEach(temp => {
      temp.textContent = Math.round(temp.textContent * 9 / 5 + 32);
    });
    weatherUnit.forEach(unit => {
      unit.textContent = "°F";
    });
    forecastUnit.forEach(unit => {
      unit.textContent = "°F";
    });
  } else {
    currentWeatherTemp.textContent = Math.round((currentWeatherTemp.textContent - 32) * 5 / 9);
    forecastWeatherTemp.forEach(temp => {
      temp.textContent = Math.round((temp.textContent - 32) * 5 / 9);
    });
    weatherUnit.forEach(unit => {
      unit.textContent = "°C";
    });
    forecastUnit.forEach(unit => {
      unit.textContent = "°C";
    });
  }
};
const togglebtn = () => {
  const toggleBtn = document.querySelector(".unit-convertor-toggle__checkbox");
  toggleBtn.addEventListener("change", () => {
    unitTogger();
  });
};
const loadingScreen = () => {
  const loadingScreen = document.createElement("div");
  loadingScreen.classList.add("loading-screen");
  loadingScreen.innerHTML = `
      <div class="loading-screen__container">
          <div class="loading-screen__circle"></div>
          <h3 class="loading-screen__text">Loading.</h3>
      </div>
    `;
  setInterval(() => {
    const loadingText = document.querySelector('.loading-screen__text');
    loadingText.textContent += '.';
    if (loadingText.textContent.length > 13) {
      loadingText.textContent = 'Loading.';
    }
  }, 200);
  document.body.appendChild(loadingScreen);
};
const setFooter = () => {
  const footer = document.querySelector(".footer");
  footer.innerHTML = `
    <h3 class="footer__text">Powered by</h3>
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0"></a>
    `;
};
const removeLoadingScreen = () => {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.remove();
};
const loadPage = async () => {
  const container = createNewElement("div", "container");
  container.innerHTML = `
        <div class="search-container">
        <div class="unit-convertor-toggle">
            <input type="checkbox" class="unit-convertor-toggle__checkbox" id="unit-convertor-toggle">
            <label for="unit-convertor-toggle" class="unit-convertor-toggle__label">
            <span class="unit-convertor-toggle__text">°F</span>
            <span class="unit-convertor-toggle__slider"></span>
            <span class="unit-convertor-toggle__text">°C</span>  
            </label>
        </div>
            <input type="text" class="search-input" placeholder="Search for location">
            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" class="search-btn">
        </div>
        <div class="weather-info-container"></div>
        <div class="footer"></div>
        <div class="forecast-container"></div>
        <div class="other-metrics-container"></div>
        `;
  document.body.appendChild(container);
  togglebtn();
  loadingScreen();
  try {
    await Promise.all([defaultWeather(), defaultForecast(), defaultOtherMetrics()]);
  } catch (error) {
    console.log(error);
  }
  removeLoadingScreen();
  searchWeather();
  setFooter();
};
document.addEventListener("DOMContentLoaded", loadPage);

/***/ }),

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
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c40142647fab4af380442559231506&q=${location}&days=10`, {
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
  background-size: cover !important;
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
  25% {
    border-top-color: #fff;
  }
  50% {
    border-top-color: #777;
  }
  75% {
    border-top-color: #fff;
  }
  100% {
    border-top-color: #777;
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
    width: 100%;
  height: 100%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.6rem;\n  color: #fff;\n  line-height: 1.6;\n  font-weight: 400;\n  height: 100%;\n  background-size: cover !important;\n  background-repeat: no-repeat;\n  background-position: center center;\n  overflow: auto;\n}\n\n.loading-screen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-screen__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.loading-screen__circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  border-top-color: #777;\n  animation: loading-circle 1s infinite linear;\n}\n\n.loading-screen__text {\n  color: #fff;\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n@keyframes loading-circle {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    border-top-color: #fff;\n  }\n  50% {\n    border-top-color: #777;\n  }\n  75% {\n    border-top-color: #fff;\n  }\n  100% {\n    border-top-color: #777;\n    transform: rotate(360deg);\n  }\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 60px 0.5fr 1fr 64px;\n  grid-template-areas:\n    \"header header\"\n    \"main main\"\n    \"forcast other\"\n    \"footer footer\";\n    width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.search-container {\n  grid-area: header;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.search-btn {\n  width: 50px;\n  height: 50px;\n}\n\n.search-btn:hover {\n  cursor: pointer;\n  animation: pulse 1s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\ninput {\n  background-color: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(8px);\n  border-radius: 8px;\n  border: none;\n  border-bottom: 2px solid #ddd;\n  background-color: transparent;\n  outline: none;\n  padding: 10px;\n  font-size: 16px;\n  width: 300px;\n  transition: border-color 0.3s ease;\n}\n\ninput:focus {\n  border-color: #6c63ff;\n}\n\ninput::placeholder {\n  color: #999;\n}\n\n.unit-convertor-toggle {\n  display: inline-block;\n}\n\n.unit-convertor-toggle__checkbox {\n  display: none;\n}\n\n.unit-convertor-toggle__label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 70px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #ccc;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.unit-convertor-toggle__text {\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0 10px;\n}\n\n.unit-convertor-toggle__slider {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: transform 0.3s;\n}\n\n.unit-convertor-toggle__checkbox:checked + .unit-convertor-toggle__label {\n  background-color: #2196f3;\n}\n\n.unit-convertor-toggle__checkbox:checked\n  + .unit-convertor-toggle__label\n  .unit-convertor-toggle__slider {\n  transform: translateX(40px);\n}\n\n.error {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(153, 55, 55, 0.6);\n  z-index: 9999;\n}\n\n.error__box {\n  background-color: #ff6464;\n  color: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n\n.error__text {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.weather-info-container {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n  font-size: 1rem;\n  backdrop-filter: blur(7px);\n  border-radius: 8px;\n  margin: 1rem;\n  width: 35%;\n  backdrop-filter: blur(7px);\n}\n\n.weather-info__temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info__temp-value {\n  font-size: 3rem;\n  font-weight: 100;\n}\n\n.weather-info__temp-unit,\n.forecast-info__temp-unit {\n  align-self: flex-start;\n}\n\n.weather-info__condition {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-info__condition-img {\n  width: 50px;\n  height: 50px;\n  align-self: flex-start;\n}\n\n.forecast-container {\n  grid-area: forcast;\n  padding: 2rem;\n  font-size: 1rem;\n  border-radius: 8px;\n  margin: 1rem;\n  backdrop-filter: blur(7px);\n  width: 80%;\n  justify-self: center;\n  align-self: center;\n}\n\n.forecast {\n  width: 100%;\n}\n\n.forecast__title,\n.other-metrics__humidity-text,\n.other-metrics__wind-text,\n.other-metrics__pressure-text,\n.other-metrics__uv-text {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  border-bottom: #fff 1px solid;\n  align-self: flex-start;\n  width: 100%;\n}\n\n.forecast__day {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: #fff 1px solid;\n}\n\n.forecast__day-temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 50px;\n}\n\n.forecast__day:last-child {\n  border-bottom: none;\n}\n\n.other-metrics-container {\n  grid-area: other;\n  padding: 2rem;\n  border-radius: 8px;\n  margin: 1rem;\n  width: 100%;\n  height: 100%;\n  justify-self: center;\n  align-self: center;\n}\n\n.other-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1.5rem;\n  grid-template-areas:\n    \"humidity wind\"\n    \"pressure visibility\";\n  width: 100%;\n  height: 100%;\n}\n\n.other-metrics > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1.5rem;\n  width: 100%;\n  height: 90%;\n  border-radius: 8px;\n  padding: 1rem;\n  backdrop-filter: blur(7px);\n}\n\n.other-metrics__humidity-value,\n.other-metrics__wind-value,\n.other-metrics__pressure-value,\n.other-metrics__uv-value {\n  font-size: 2rem;\n  font-weight: 100;\n  margin-top: 5rem;\n}\n\n.footer {\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  background-color: transparent;\n  color: #fff;\n  padding: 2rem 0;\n  text-align: center;\n  font-size: 1rem;\n  backdrop-filter: blur(7px);\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    background-repeat: repeat;\n  }\n\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px 0.5fr 1fr 1fr 90px;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"forcast\"\n      \"other\"\n      \"footer\";\n  }\n\n  .search-container {\n    justify-content: center;\n    padding: 1rem;\n    font-size: 0.8rem;\n  }\n\n  input {\n    width: 100%;\n    max-width: 300px;\n  }\n\n  .weather-info {\n    width: 80%;\n    margin: 0;\n  }\n\n  .forecast-container {\n    width: 100%;\n    margin: 0;\n  }\n\n  .other-metrics-container {\n    width: 100%;\n    margin: 0;\n  }\n\n  .footer {\n    width: 100%;\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sU0FBUyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcs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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBCR3NldHRlciwgbG9jYXRpb25zV2VhdGhlciB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGNyZWF0ZU5ld0VsZW1lbnQgPSAodGFnLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3Qgc2VhcmNoV2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xuXG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgbG9hZGluZ1NjcmVlbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgbG9jYXRpb25zV2VhdGhlcihsb2NhdGlvbik7XG4gICAgICBCR3NldHRlcih3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICAgICAgdXBkYXRlV2VhdGhlckluZm8od2VhdGhlcik7XG4gICAgICB1cGRhdGVGb3JlY2FzdEluZm8od2VhdGhlcik7XG4gICAgICB1cGRhdGVPdGhlck1ldHJpY3NJbmZvKHdlYXRoZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBlcnJvckRpc3BsYXkoKTtcbiAgICB9XG4gICAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGF3YWl0IHNlYXJjaExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNlYXJjaCk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgYXdhaXQgc2VhcmNoTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBlcnJvckRpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuXG4gIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXJyb3JCb3guY2xhc3NMaXN0LmFkZChcImVycm9yX19ib3hcIik7XG5cbiAgY29uc3QgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBlcnJvclRleHQuY2xhc3NMaXN0LmFkZChcImVycm9yX190ZXh0XCIpO1xuICBlcnJvclRleHQudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uXCI7XG5cbiAgZXJyb3JCb3guYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JCb3gpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yQ29udGFpbmVyKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlcnJvckNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSwgMTUwMCk7XG59O1xuXG5jb25zdCBkZWZhdWx0V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgbG9jYXRpb25zV2VhdGhlcihcIk5ldyBZb3JrXCIpO1xuICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHdlYXRoZXIpO1xuICAgIEJHc2V0dGVyKHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVXZWF0aGVySW5mbyA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCB3ZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIud2VhdGhlci1pbmZvLWNvbnRhaW5lclwiXG4gICk7XG4gIGlmICh3ZWF0aGVySW5mb0NvbnRhaW5lcikge1xuICAgIHdlYXRoZXJJbmZvQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHdlYXRoZXJJbmZvQ29udGFpbmVyTmV3ID0gY3JlYXRlTmV3RWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwid2VhdGhlci1pbmZvLWNvbnRhaW5lclwiXG4gICk7XG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyTmV3LmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvKHdlYXRoZXIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvQ29udGFpbmVyTmV3KTtcbn07XG5cbmNvbnN0IHdlYXRoZXJJbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwid2VhdGhlci1pbmZvXCIpO1xuICB3ZWF0aGVySW5mby5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvX19sb2NhdGlvblwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cIndlYXRoZXItaW5mb19fbG9jYXRpb24tcmVnaW9uXCI+JHt3ZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbn08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvX190ZW1wXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwid2VhdGhlci1pbmZvX190ZW1wLXZhbHVlXCI+JHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9jfTwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzPVwid2VhdGhlci1pbmZvX190ZW1wLXVuaXRcIj7CsEM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvX19jb25kaXRpb25cIj5cbiAgICAgIDxoMyBjbGFzcz1cIndlYXRoZXItaW5mb19fY29uZGl0aW9uLXRleHRcIj4ke3dlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dH08L2gzPlxuICAgICAgPGltZyBzcmM9XCIke3dlYXRoZXIuY3VycmVudC5jb25kaXRpb24uaWNvbn1cIiBhbHQ9XCIke3dlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dH1cIiBjbGFzcz1cIndlYXRoZXItaW5mb19fY29uZGl0aW9uLWltZ1wiPlxuICA8L2Rpdj5cbiAgICAgIGA7XG4gIHJldHVybiB3ZWF0aGVySW5mbztcbn07XG5cbmNvbnN0IHNlYXJjaEZvcmVjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idG5cIik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIik7XG5cbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGxvY2F0aW9uc1dlYXRoZXIobG9jYXRpb24pO1xuICAgICAgdXBkYXRlRm9yZWNhc3RJbmZvKHdlYXRoZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRlZmF1bHRGb3JlY2FzdCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgbG9jYXRpb25zV2VhdGhlcihcIk5ldyBZb3JrXCIpO1xuICAgIHVwZGF0ZUZvcmVjYXN0SW5mbyh3ZWF0aGVyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUZvcmVjYXN0SW5mbyA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCBmb3JlY2FzdEluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0LWNvbnRhaW5lclwiKTtcbiAgaWYgKGZvcmVjYXN0SW5mb0NvbnRhaW5lcikge1xuICAgIGZvcmVjYXN0SW5mb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBmb3JlY2FzdEluZm9Db250YWluZXJOZXcgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJmb3JlY2FzdC1jb250YWluZXJcIlxuICApO1xuICBmb3JlY2FzdEluZm9Db250YWluZXJOZXcuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJbmZvKHdlYXRoZXIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SW5mb0NvbnRhaW5lck5ldyk7XG59O1xuXG5jb25zdCBmb3JlY2FzdEluZm8gPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBmb3JlY2FzdCA9IGNyZWF0ZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJmb3JlY2FzdFwiKTtcbiAgZm9yZWNhc3QuaW5uZXJIVE1MID0gYFxuICAgICAgPGgxIGNsYXNzPVwiZm9yZWNhc3RfX3RpdGxlXCI+MTAgRGF5IEZvcmVjYXN0PC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdGRheXNfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICR7d2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICAgICAgLnNsaWNlKDAsIDkpXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAoZGF5KSA9PiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdF9fZGF5XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJmb3JlY2FzdF9fZGF5LW5hbWVcIj4ke2RheS5kYXRlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF5LmRheS5jb25kaXRpb24uaWNvbn1cIiBhbHQ9XCIke2RheS5kYXkuY29uZGl0aW9uLnRleHR9XCIgY2xhc3M9XCJmb3JlY2FzdF9fZGF5LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0X19kYXktdGVtcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJmb3JlY2FzdF9fZGF5LXRlbXAtdmFsdWVcIj4ke2RheS5kYXkuYXZndGVtcF9jfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImZvcmVjYXN0LWluZm9fX3RlbXAtdW5pdFwiPsKwQzwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICA8L2Rpdj5cbiAgYDtcbiAgcmV0dXJuIGZvcmVjYXN0O1xufTtcblxuY29uc3QgZGVmYXVsdE90aGVyTWV0cmljcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgbG9jYXRpb25zV2VhdGhlcihcIk5ldyBZb3JrXCIpO1xuICAgIHVwZGF0ZU90aGVyTWV0cmljc0luZm8od2VhdGhlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVPdGhlck1ldHJpY3NJbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IG90aGVyTWV0cmljc0luZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm90aGVyLW1ldHJpY3MtY29udGFpbmVyXCJcbiAgKTtcbiAgaWYgKG90aGVyTWV0cmljc0luZm9Db250YWluZXIpIHtcbiAgICBvdGhlck1ldHJpY3NJbmZvQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IG90aGVyTWV0cmljc0luZm9Db250YWluZXJOZXcgPSBjcmVhdGVOZXdFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJvdGhlci1tZXRyaWNzLWNvbnRhaW5lclwiXG4gICk7XG4gIG90aGVyTWV0cmljc0luZm9Db250YWluZXJOZXcuYXBwZW5kQ2hpbGQob3RoZXJNZXRyaWNzSW5mbyh3ZWF0aGVyKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdGhlck1ldHJpY3NJbmZvQ29udGFpbmVyTmV3KTtcbn07XG5cbmNvbnN0IG90aGVyTWV0cmljc0luZm8gPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBvdGhlck1ldHJpY3MgPSBjcmVhdGVOZXdFbGVtZW50KFwiZGl2XCIsIFwib3RoZXItbWV0cmljc1wiKTtcbiAgb3RoZXJNZXRyaWNzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm90aGVyLW1ldHJpY3NfX2h1bWlkaXR5XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJvdGhlci1tZXRyaWNzX19odW1pZGl0eS10ZXh0XCI+SHVtaWRpdHk8L2gzPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwib3RoZXItbWV0cmljc19faHVtaWRpdHktdmFsdWVcIj4ke3dlYXRoZXIuY3VycmVudC5odW1pZGl0eX0lPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdGhlci1tZXRyaWNzX193aW5kXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJvdGhlci1tZXRyaWNzX193aW5kLXRleHRcIj5XaW5kPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm90aGVyLW1ldHJpY3NfX3dpbmQtdmFsdWVcIj4ke3dlYXRoZXIuY3VycmVudC53aW5kX2twaH0ga3BoPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdGhlci1tZXRyaWNzX191dlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwib3RoZXItbWV0cmljc19fdXYtdGV4dFwiPlVWIEluZGV4PC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm90aGVyLW1ldHJpY3NfX3V2LXZhbHVlXCI+JHt3ZWF0aGVyLmN1cnJlbnQudXZ9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdGhlci1tZXRyaWNzX19wcmVzc3VyZVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwib3RoZXItbWV0cmljc19fcHJlc3N1cmUtdGV4dFwiPlByZXNzdXJlPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm90aGVyLW1ldHJpY3NfX3ByZXNzdXJlLXZhbHVlXCI+JHt3ZWF0aGVyLmN1cnJlbnQucHJlc3N1cmVfbWJ9IG1iPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgcmV0dXJuIG90aGVyTWV0cmljcztcbn07XG5cbmNvbnN0IHVuaXRUb2dnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIud2VhdGhlci1pbmZvX190ZW1wLXZhbHVlXCJcbiAgKTtcbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuZm9yZWNhc3RfX2RheS10ZW1wLXZhbHVlXCJcbiAgKTtcbiAgY29uc3Qgd2VhdGhlclVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYXRoZXItaW5mb19fdGVtcC11bml0XCIpO1xuICBjb25zdCBmb3JlY2FzdFVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LWluZm9fX3RlbXAtdW5pdFwiKTtcblxuICBpZiAod2VhdGhlclVuaXRbMF0udGV4dENvbnRlbnQgPT09IFwiwrBDXCIpIHtcbiAgICBjdXJyZW50V2VhdGhlclRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgICAgKGN1cnJlbnRXZWF0aGVyVGVtcC50ZXh0Q29udGVudCAqIDkpIC8gNSArIDMyXG4gICAgKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJUZW1wLmZvckVhY2goKHRlbXApID0+IHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKCh0ZW1wLnRleHRDb250ZW50ICogOSkgLyA1ICsgMzIpO1xuICAgIH0pO1xuICAgIHdlYXRoZXJVbml0LmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgIHVuaXQudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuICAgIH0pO1xuICAgIGZvcmVjYXN0VW5pdC5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICB1bml0LnRleHRDb250ZW50ID0gXCLCsEZcIjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50V2VhdGhlclRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgICAgKChjdXJyZW50V2VhdGhlclRlbXAudGV4dENvbnRlbnQgLSAzMikgKiA1KSAvIDlcbiAgICApO1xuICAgIGZvcmVjYXN0V2VhdGhlclRlbXAuZm9yRWFjaCgodGVtcCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoKCh0ZW1wLnRleHRDb250ZW50IC0gMzIpICogNSkgLyA5KTtcbiAgICB9KTtcbiAgICB3ZWF0aGVyVW5pdC5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICB1bml0LnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgICB9KTtcbiAgICBmb3JlY2FzdFVuaXQuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgdW5pdC50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZWJ0biA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0LWNvbnZlcnRvci10b2dnbGVfX2NoZWNrYm94XCIpO1xuICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdW5pdFRvZ2dlcigpO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nLXNjcmVlblwiKTtcbiAgbG9hZGluZ1NjcmVlbi5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1zY3JlZW5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNjcmVlbl9fY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgPGgzIGNsYXNzPVwibG9hZGluZy1zY3JlZW5fX3RleHRcIj5Mb2FkaW5nLjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctc2NyZWVuX190ZXh0Jyk7XG4gICAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCArPSAnLic7XG4gICAgICBpZiAobG9hZGluZ1RleHQudGV4dENvbnRlbnQubGVuZ3RoID4gMTMpIHtcbiAgICAgICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSAnTG9hZGluZy4nO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ1NjcmVlbik7XG59O1xuXG5jb25zdCBzZXRGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICBmb290ZXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMyBjbGFzcz1cImZvb3Rlcl9fdGV4dFwiPlBvd2VyZWQgYnk8L2gzPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cIiB0aXRsZT1cIkZyZWUgV2VhdGhlciBBUElcIj48aW1nIHNyYz1cIi8vY2RuLndlYXRoZXJhcGkuY29tL3Y0L2ltYWdlcy93ZWF0aGVyYXBpX2xvZ28ucG5nXCIgYWx0PVwiV2VhdGhlciBkYXRhIGJ5IFdlYXRoZXJBUEkuY29tXCIgYm9yZGVyPVwiMFwiPjwvYT5cbiAgICBgO1xufTtcblxuY29uc3QgcmVtb3ZlTG9hZGluZ1NjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1zY3JlZW5cIik7XG4gIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXQtY29udmVydG9yLXRvZ2dsZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19jaGVja2JveFwiIGlkPVwidW5pdC1jb252ZXJ0b3ItdG9nZ2xlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidW5pdC1jb252ZXJ0b3ItdG9nZ2xlXCIgY2xhc3M9XCJ1bml0LWNvbnZlcnRvci10b2dnbGVfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXQtY29udmVydG9yLXRvZ2dsZV9fdGV4dFwiPsKwRjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19zbGlkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXQtY29udmVydG9yLXRvZ2dsZV9fdGV4dFwiPsKwQzwvc3Bhbj4gIFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBsb2NhdGlvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvNTAvMDAwMDAwL3NlYXJjaC0tdjEucG5nXCIgY2xhc3M9XCJzZWFyY2gtYnRuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm90aGVyLW1ldHJpY3MtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgdG9nZ2xlYnRuKCk7XG5cbiAgbG9hZGluZ1NjcmVlbigpO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZGVmYXVsdFdlYXRoZXIoKSxcbiAgICAgIGRlZmF1bHRGb3JlY2FzdCgpLFxuICAgICAgZGVmYXVsdE90aGVyTWV0cmljcygpLFxuICAgIF0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIHJlbW92ZUxvYWRpbmdTY3JlZW4oKTtcbiAgc2VhcmNoV2VhdGhlcigpO1xuICBzZXRGb290ZXIoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRQYWdlKTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IEJHc2V0dGVyID0gYXN5bmMgKGNvbmRpdGlvbikgPT4ge1xuICBjb25zdCBjcmVhdGVJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjcmVhdGVJTUcuY2xhc3NMaXN0LmFkZChcImJnLWltZ1wiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2tleT1HQ1RDa29IOHVGcjJwUGVKSldxM0NNcHpRQm42SWJ0diZzPSR7Y29uZGl0aW9uICsgXCIgd2VhdGhlclwifWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGNhdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjcmVhdGVJTUcuc3JjID0gY2F0LmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y3JlYXRlSU1HLnNyY30nKWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBsb2NhdGlvbnNXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jNDAxNDI2NDdmYWI0YWYzODA0NDI1NTkyMzE1MDYmcT0ke2xvY2F0aW9ufSZkYXlzPTEwYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IEJHc2V0dGVyLCBsb2NhdGlvbnNXZWF0aGVyIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubG9hZGluZy1zY3JlZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRpbmctc2NyZWVuX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGluZy1zY3JlZW5fX2NpcmNsZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzc3NztcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5sb2FkaW5nLXNjcmVlbl9fdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy1jaXJjbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjUlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzc3NztcbiAgfVxuICA3NSUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzc3NztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMC41ZnIgMWZyIDY0cHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICBcIm1haW4gbWFpblwiXG4gICAgXCJmb3JjYXN0IG90aGVyXCJcbiAgICBcImZvb3RlciBmb290ZXJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmM2M2ZmO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi51bml0LWNvbnZlcnRvci10b2dnbGVfX3NsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDJweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3g6Y2hlY2tlZCArIC51bml0LWNvbnZlcnRvci10b2dnbGVfX2xhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbn1cblxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3g6Y2hlY2tlZFxuICArIC51bml0LWNvbnZlcnRvci10b2dnbGVfX2xhYmVsXG4gIC51bml0LWNvbnZlcnRvci10b2dnbGVfX3NsaWRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcbn1cblxuLmVycm9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTUsIDU1LCAwLjYpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uZXJyb3JfX2JveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmVycm9yX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG59XG5cbi53ZWF0aGVyLWluZm9fX3RlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItaW5mb19fdGVtcC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLndlYXRoZXItaW5mb19fdGVtcC11bml0LFxuLmZvcmVjYXN0LWluZm9fX3RlbXAtdW5pdCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi53ZWF0aGVyLWluZm9fX2NvbmRpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhdGhlci1pbmZvX19jb25kaXRpb24taW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogZm9yY2FzdDtcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9yZWNhc3RfX3RpdGxlLFxuLm90aGVyLW1ldHJpY3NfX2h1bWlkaXR5LXRleHQsXG4ub3RoZXItbWV0cmljc19fd2luZC10ZXh0LFxuLm90aGVyLW1ldHJpY3NfX3ByZXNzdXJlLXRleHQsXG4ub3RoZXItbWV0cmljc19fdXYtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogI2ZmZiAxcHggc29saWQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9yZWNhc3RfX2RheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogI2ZmZiAxcHggc29saWQ7XG59XG5cbi5mb3JlY2FzdF9fZGF5LXRlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmZvcmVjYXN0X19kYXk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5vdGhlci1tZXRyaWNzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogb3RoZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ub3RoZXItbWV0cmljcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMS41cmVtO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaHVtaWRpdHkgd2luZFwiXG4gICAgXCJwcmVzc3VyZSB2aXNpYmlsaXR5XCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vdGhlci1tZXRyaWNzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xufVxuXG4ub3RoZXItbWV0cmljc19faHVtaWRpdHktdmFsdWUsXG4ub3RoZXItbWV0cmljc19fd2luZC12YWx1ZSxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS12YWx1ZSxcbi5vdGhlci1tZXRyaWNzX191di12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmZvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMC41ZnIgMWZyIDFmciA5MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcImhlYWRlclwiXG4gICAgICBcIm1haW5cIlxuICAgICAgXCJmb3JjYXN0XCJcbiAgICAgIFwib3RoZXJcIlxuICAgICAgXCJmb290ZXJcIjtcbiAgfVxuXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cblxuICAud2VhdGhlci1pbmZvIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5mb3JlY2FzdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5vdGhlci1tZXRyaWNzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JB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aUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVuX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW5fX2NpcmNsZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbl9fdGV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZy1jaXJjbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuNWZyIDFmciA2NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb3JjYXN0IG90aGVyXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzZjNjNmZjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX190ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi51bml0LWNvbnZlcnRvci10b2dnbGVfX3NsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDJweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4udW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19jaGVja2JveDpjaGVja2VkICsgLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fY2hlY2tib3g6Y2hlY2tlZFxcbiAgKyAudW5pdC1jb252ZXJ0b3ItdG9nZ2xlX19sYWJlbFxcbiAgLnVuaXQtY29udmVydG9yLXRvZ2dsZV9fc2xpZGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTUsIDU1LCAwLjYpO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmVycm9yX19ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmVycm9yX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHdpZHRoOiAzNSU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG59XFxuXFxuLndlYXRoZXItaW5mb19fdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvX190ZW1wLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi53ZWF0aGVyLWluZm9fX3RlbXAtdW5pdCxcXG4uZm9yZWNhc3QtaW5mb19fdGVtcC11bml0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi53ZWF0aGVyLWluZm9fX2NvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvX19jb25kaXRpb24taW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGZvcmNhc3Q7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0X190aXRsZSxcXG4ub3RoZXItbWV0cmljc19faHVtaWRpdHktdGV4dCxcXG4ub3RoZXItbWV0cmljc19fd2luZC10ZXh0LFxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS10ZXh0LFxcbi5vdGhlci1tZXRyaWNzX191di10ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAjZmZmIDFweCBzb2xpZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0X19kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAjZmZmIDFweCBzb2xpZDtcXG59XFxuXFxuLmZvcmVjYXN0X19kYXktdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5mb3JlY2FzdF9fZGF5Omxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogb3RoZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaHVtaWRpdHkgd2luZFxcXCJcXG4gICAgXFxcInByZXNzdXJlIHZpc2liaWxpdHlcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vdGhlci1tZXRyaWNzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG59XFxuXFxuLm90aGVyLW1ldHJpY3NfX2h1bWlkaXR5LXZhbHVlLFxcbi5vdGhlci1tZXRyaWNzX193aW5kLXZhbHVlLFxcbi5vdGhlci1tZXRyaWNzX19wcmVzc3VyZS12YWx1ZSxcXG4ub3RoZXItbWV0cmljc19fdXYtdmFsdWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDAuNWZyIDFmciAxZnIgOTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJtYWluXFxcIlxcbiAgICAgIFxcXCJmb3JjYXN0XFxcIlxcbiAgICAgIFxcXCJvdGhlclxcXCJcXG4gICAgICBcXFwiZm9vdGVyXFxcIjtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5vdGhlci1tZXRyaWNzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJCR3NldHRlciIsImxvY2F0aW9uc1dlYXRoZXIiLCJjcmVhdGVOZXdFbGVtZW50IiwidGFnIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNlYXJjaFdlYXRoZXIiLCJzZWFyY2hCdG4iLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoSW5wdXQiLCJzZWFyY2hMb2NhdGlvbiIsImxvY2F0aW9uIiwibG9hZGluZ1NjcmVlbiIsIndlYXRoZXIiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGV4dCIsInVwZGF0ZVdlYXRoZXJJbmZvIiwidXBkYXRlRm9yZWNhc3RJbmZvIiwidXBkYXRlT3RoZXJNZXRyaWNzSW5mbyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImVycm9yRGlzcGxheSIsInJlbW92ZUxvYWRpbmdTY3JlZW4iLCJoYW5kbGVTZWFyY2giLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsImVycm9yQ29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXJyb3JCb3giLCJlcnJvclRleHQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJkZWZhdWx0V2VhdGhlciIsImNvbnRhaW5lciIsIndlYXRoZXJJbmZvQ29udGFpbmVyIiwid2VhdGhlckluZm9Db250YWluZXJOZXciLCJ3ZWF0aGVySW5mbyIsImlubmVySFRNTCIsInJlZ2lvbiIsInRlbXBfYyIsImljb24iLCJzZWFyY2hGb3JlY2FzdCIsImRlZmF1bHRGb3JlY2FzdCIsImZvcmVjYXN0SW5mb0NvbnRhaW5lciIsImZvcmVjYXN0SW5mb0NvbnRhaW5lck5ldyIsImZvcmVjYXN0SW5mbyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJzbGljZSIsIm1hcCIsImRheSIsImRhdGUiLCJhdmd0ZW1wX2MiLCJqb2luIiwiZGVmYXVsdE90aGVyTWV0cmljcyIsIm90aGVyTWV0cmljc0luZm9Db250YWluZXIiLCJvdGhlck1ldHJpY3NJbmZvQ29udGFpbmVyTmV3Iiwib3RoZXJNZXRyaWNzSW5mbyIsIm90aGVyTWV0cmljcyIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJ1diIsInByZXNzdXJlX21iIiwidW5pdFRvZ2dlciIsImN1cnJlbnRXZWF0aGVyVGVtcCIsImZvcmVjYXN0V2VhdGhlclRlbXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2VhdGhlclVuaXQiLCJmb3JlY2FzdFVuaXQiLCJNYXRoIiwicm91bmQiLCJmb3JFYWNoIiwidGVtcCIsInVuaXQiLCJ0b2dnbGVidG4iLCJ0b2dnbGVCdG4iLCJzZXRJbnRlcnZhbCIsImxvYWRpbmdUZXh0IiwibGVuZ3RoIiwic2V0Rm9vdGVyIiwiZm9vdGVyIiwibG9hZFBhZ2UiLCJQcm9taXNlIiwiYWxsIiwiY3JlYXRlSU1HIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJjYXQiLCJqc29uIiwic3JjIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9