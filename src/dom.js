import "./style.css";
import { BGsetter, locationsWeather } from "./index";

const CreateNewElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const CreateIMG = (src, className) => {
  const img = CreateNewElement("img", className);
  img.src = src;
  return img;
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
        locationsWeather(location);
    });
};

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
