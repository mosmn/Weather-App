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
    locationsWeather("London")
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
    const weatherInfoContainer = document.querySelector(".weather-info-container");
    if (weatherInfoContainer) {
        weatherInfoContainer.remove();
        }
    const weatherInfoContainerNew = CreateNewElement("div", "weather-info-container");
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
        `;
    document.body.appendChild(container);
    defaultWeather();
    weatherSearch();
    footer();
};

document.addEventListener("DOMContentLoaded", loadPage);
