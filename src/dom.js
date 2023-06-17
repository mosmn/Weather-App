import "./style.css";
import { BGsetter, locationsWeather } from "./index";

const CreateNewElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const weatherSearch = () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  searchBtn.addEventListener("click", async () => {
    const location = searchInput.value;
    try {
      const weather = await locationsWeather(location);
      updateWeatherInfo(weather);
      BGsetter(weather.current.condition.text);
    } catch (error) {
      console.log(error);
    }
  });
};

const defaultWeather = () => {
  locationsWeather("New York")
    .then((weather) => {
      updateWeatherInfo(weather);
      BGsetter(weather.current.condition.text);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateWeatherInfo = (weather) => {
  const container = document.querySelector(".container");
  const weatherInfoContainer = document.querySelector(
    ".weather-info-container"
  );
  if (weatherInfoContainer) {
    weatherInfoContainer.remove();
  }
  const weatherInfoContainerNew = CreateNewElement(
    "div",
    "weather-info-container"
  );
  weatherInfoContainerNew.appendChild(weatherInfo(weather));
  container.appendChild(weatherInfoContainerNew);
};

const weatherInfo = (weather) => {
  const weatherInfo = CreateNewElement("div", "weather-info");
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

const forecastSearch = () => {
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

const defaultForecast = () => {
    locationsWeather("New York")
        .then((weather) => {
            updateForecastInfo(weather);
        })
        .catch((error) => {
            console.log(error);
        });
};

const updateForecastInfo = (weather) => {
    const container = document.querySelector(".container");
    const forecastInfoContainer = document.querySelector(".forecast-container");
    if (forecastInfoContainer) {
        forecastInfoContainer.remove();
    }
    const forecastInfoContainerNew = CreateNewElement("div", "forecast-container");
    forecastInfoContainerNew.appendChild(forecastInfo(weather));
    container.appendChild(forecastInfoContainerNew);
};

const forecastInfo = (weather) => {
    const forecast = CreateNewElement("div", "forecast");
    forecast.innerHTML = `
        <h1 class="forecast__title">10 Day Forecast</h1>
        <div class="forecast__container">
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[0].date}</h3>
                <img src="${weather.forecast.forecastday[0].day.condition.icon}" alt="${weather.forecast.forecastday[0].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[0].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[1].date}</h3>
                <img src="${weather.forecast.forecastday[1].day.condition.icon}" alt="${weather.forecast.forecastday[1].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[1].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[2].date}</h3>
                <img src="${weather.forecast.forecastday[2].day.condition.icon}" alt="${weather.forecast.forecastday[2].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[2].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[3].date}</h3>
                <img src="${weather.forecast.forecastday[3].day.condition.icon}" alt="${weather.forecast.forecastday[3].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[3].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[4].date}</h3>
                <img src="${weather.forecast.forecastday[4].day.condition.icon}" alt="${weather.forecast.forecastday[4].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[4].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[5].date}</h3>
                <img src="${weather.forecast.forecastday[5].day.condition.icon}" alt="${weather.forecast.forecastday[5].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[5].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[6].date}</h3>
                <img src="${weather.forecast.forecastday[6].day.condition.icon}" alt="${weather.forecast.forecastday[6].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[6].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[7].date}</h3>
                <img src="${weather.forecast.forecastday[7].day.condition.icon}" alt="${weather.forecast.forecastday[7].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[7].day.avgtemp_c}°C</h3>
            </div>
            <div class="forecast__day">
                <h3 class="forecast__day-name">${weather.forecast.forecastday[8].date}</h3>
                <img src="${weather.forecast.forecastday[8].day.condition.icon}" alt="${weather.forecast.forecastday[8].day.condition.text}" class="forecast__day-img">
                <h3 class="forecast__day-temp">${weather.forecast.forecastday[8].day.avgtemp_c}°C</h3>
            </div>
        </div>
    `;
    return forecast;
}


const footer = () => {
  const footer = document.querySelector(".footer");
  footer.innerHTML = `
    <h3 class="footer__text">Powered by</h3>
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0"></a>
    `;
  return footer;
};

const loadPage = () => {
  const container = CreateNewElement("div", "container");
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
  weatherSearch();
  defaultWeather();
  defaultForecast();
  footer();
};

document.addEventListener("DOMContentLoaded", loadPage);
