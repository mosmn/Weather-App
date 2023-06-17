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

  searchBtn.addEventListener("click", async () => {
    const location = searchInput.value;
    try {
      const weather = await locationsWeather(location);
      BGsetter(weather.current.condition.text);
      updateWeatherInfo(weather);
      updateForecastInfo(weather);
      updateOtherMetricsInfo(weather);
    } catch (error) {
      console.log(error);
    }
  });
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
                  <h3 class="forecast__day-temp">${day.day.avgtemp_c}°C</h3>
              </div>
          `
            )
            .join("")}
      </div>
  `;
  return forecast;
};

const searchOtherMetrics = async () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  searchBtn.addEventListener("click", async () => {
    const location = searchInput.value;
    try {
      const weather = await locationsWeather(location);
      updateOtherMetricsInfo(weather);
    } catch (error) {
      console.log(error);
    }
  });
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

const setFooter = () => {
  const footer = document.querySelector(".footer");
  footer.innerHTML = `
    <h3 class="footer__text">Powered by</h3>
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0"></a>
    `;
};

const loadPage = () => {
  const container = createNewElement("div", "container");
  container.innerHTML = `
        <div class="search-container">
            <input type="text" class="search-input" placeholder="Search for location">
            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" class="search-btn">
        </div>
        <div class="weather-info-container"></div>
        <div class="footer"></div>
        <div class="forecast-container"></div>
        <div class="other-metrics-container"></div>
        `;
  document.body.appendChild(container);
  searchWeather();
  defaultWeather();
  defaultForecast();
  defaultOtherMetrics();
  setFooter();
};

document.addEventListener("DOMContentLoaded", loadPage);
