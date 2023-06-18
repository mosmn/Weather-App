import "./style.css";
import { BGsetter, locationsWeather } from "./index";

const createNewElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const searchWeather = async () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  const searchLocation = async (location) => {
    loadingScreen();
    try {
      const weather = await locationsWeather(location);
      BGsetter(weather.current.condition.text);
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

  searchInput.addEventListener("keydown", async (event) => {
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
    const weather = await locationsWeather("New York");
    updateWeatherInfo(weather);
    BGsetter(weather.current.condition.text);
  } catch (error) {
    console.log(error);
  }
};

const updateWeatherInfo = (weather) => {
  const container = document.querySelector(".container");
  const weatherInfoContainer = document.querySelector(
    ".weather-info-container"
  );
  if (weatherInfoContainer) {
    weatherInfoContainer.remove();
  }
  const weatherInfoContainerNew = createNewElement(
    "div",
    "weather-info-container"
  );
  weatherInfoContainerNew.appendChild(weatherInfo(weather));
  container.appendChild(weatherInfoContainerNew);
};

const weatherInfo = (weather) => {
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
      const weather = await locationsWeather(location);
      updateForecastInfo(weather);
    } catch (error) {
      console.log(error);
    }
  });
};

const defaultForecast = async () => {
  try {
    const weather = await locationsWeather("New York");
    updateForecastInfo(weather);
  } catch (error) {
    console.log(error);
  }
};

const updateForecastInfo = (weather) => {
  const container = document.querySelector(".container");
  const forecastInfoContainer = document.querySelector(".forecast-container");
  if (forecastInfoContainer) {
    forecastInfoContainer.remove();
  }
  const forecastInfoContainerNew = createNewElement(
    "div",
    "forecast-container"
  );
  forecastInfoContainerNew.appendChild(forecastInfo(weather));
  container.appendChild(forecastInfoContainerNew);
};

const forecastInfo = (weather) => {
  const forecast = createNewElement("div", "forecast");
  forecast.innerHTML = `
      <h1 class="forecast__title">10 Day Forecast</h1>
      <div class="forecastdays__container">
          ${weather.forecast.forecastday
            .slice(0, 9)
            .map(
              (day) => `
              <div class="forecast__day">
                  <h3 class="forecast__day-name">${day.date}</h3>
                  <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" class="forecast__day-img">
                  <div class="forecast__day-temp">
                    <h3 class="forecast__day-temp-value">${day.day.avgtemp_c}</h3>
                    <h3 class="forecast-info__temp-unit">°C</h3>
                  </div>
              </div>
          `
            )
            .join("")}
      </div>
  `;
  return forecast;
};

const defaultOtherMetrics = async () => {
  try {
    const weather = await locationsWeather("New York");
    updateOtherMetricsInfo(weather);
  } catch (error) {
    console.log(error);
  }
};

const updateOtherMetricsInfo = (weather) => {
  const container = document.querySelector(".container");
  const otherMetricsInfoContainer = document.querySelector(
    ".other-metrics-container"
  );
  if (otherMetricsInfoContainer) {
    otherMetricsInfoContainer.remove();
  }
  const otherMetricsInfoContainerNew = createNewElement(
    "div",
    "other-metrics-container"
  );
  otherMetricsInfoContainerNew.appendChild(otherMetricsInfo(weather));
  container.appendChild(otherMetricsInfoContainerNew);
};

const otherMetricsInfo = (weather) => {
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
  const currentWeatherTemp = document.querySelector(
    ".weather-info__temp-value"
  );
  const forecastWeatherTemp = document.querySelectorAll(
    ".forecast__day-temp-value"
  );
  const weatherUnit = document.querySelectorAll(".weather-info__temp-unit");
  const forecastUnit = document.querySelectorAll(".forecast-info__temp-unit");

  if (weatherUnit[0].textContent === "°C") {
    currentWeatherTemp.textContent = Math.round(
      (currentWeatherTemp.textContent * 9) / 5 + 32
    );
    forecastWeatherTemp.forEach((temp) => {
      temp.textContent = Math.round((temp.textContent * 9) / 5 + 32);
    });
    weatherUnit.forEach((unit) => {
      unit.textContent = "°F";
    });
    forecastUnit.forEach((unit) => {
      unit.textContent = "°F";
    });
  } else {
    currentWeatherTemp.textContent = Math.round(
      ((currentWeatherTemp.textContent - 32) * 5) / 9
    );
    forecastWeatherTemp.forEach((temp) => {
      temp.textContent = Math.round(((temp.textContent - 32) * 5) / 9);
    });
    weatherUnit.forEach((unit) => {
      unit.textContent = "°C";
    });
    forecastUnit.forEach((unit) => {
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
    }, 100);
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
    await Promise.all([
      defaultWeather(),
      defaultForecast(),
      defaultOtherMetrics(),
    ]);
  } catch (error) {
    console.log(error);
  }

  removeLoadingScreen();
  searchWeather();
  setFooter();
};

document.addEventListener("DOMContentLoaded", loadPage);
