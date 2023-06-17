import "./style.css";
import { BGsetter, locationsWeather } from "./index";

const CreateNewElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const search = () => {
  const search = CreateNewElement("div", "search");
  search.innerHTML = `
    <input type="text" class="search-input" placeholder="Search for location">
    <button class="search-btn">Search</button>
    `;
  return search;
};

const weatherSearch = () => {
  const search = document.querySelector(".search");
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");
  searchBtn.addEventListener("click", () => {
    const location = searchInput.value;
    locationsWeather(location).then((weather) => {
        const weatherInfoContainer = document.querySelector(".weather-info-container");
        if (weatherInfoContainer) {
            weatherInfoContainer.remove();
        }
        const weatherInfoContainerNew = CreateNewElement("div", "weather-info-container");
        weatherInfoContainerNew.appendChild(weatherInfo(weather));
        document.body.appendChild(weatherInfoContainerNew);
        BGsetter(weather.current.condition.text);
        }
    );
  });
};

const weatherInfo = (weather) => {
    const weatherInfo = CreateNewElement("div", "weather-info");
    weatherInfo.innerHTML = `
    <div class="weather-info__location">
        <h1 class="weather-info__location-name">${weather.location.name}</h1>
        <h2 class="weather-info__location-region">${weather.location.region}</h2>
        <h3 class="weather-info__location-country">${weather.location.country}</h3>
    </div>
    <div class="weather-info__condition">
        <img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}" class="weather-info__condition-img">
        <h3 class="weather-info__condition-text">${weather.current.condition.text}</h3>
    </div>
    <div class="weather-info__temp">
        <h1 class="weather-info__temp-value">${weather.current.temp_c}</h1>
        <h3 class="weather-info__temp-unit">°C</h3>
    </div>
    `;
    return weatherInfo;
}


const footer = () => {
  const footer = CreateNewElement("footer", "footer");
  const footerText = CreateNewElement("p", "footer-text");
  footerText.textContent = "Powered by ";
  const footerLink = CreateNewElement("div", "footer-link");
  footerLink.innerHTML =
    '<a href="https://www.weatherapi.com/" title="Free Weather API"><img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0"></a>';
  footer.appendChild(footerText);
  footer.appendChild(footerLink);
  return footer;
};

const loadPage = () => {
  document.body.appendChild(search());
  weatherSearch();
};

document.addEventListener("DOMContentLoaded", loadPage);
