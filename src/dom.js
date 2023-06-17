import "./style.css";

const CreateNewElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const CreateIMG = (src, className) => {
    const img = CreateNewElement('img', className);
    img.src = src;
    return img;
}

const footer = () => {
    const footer = CreateNewElement('footer', 'footer');
    const footerText = CreateNewElement('p', 'footer-text');
    footerText.textContent = 'Powered by ';
    const footerLink = CreateNewElement('div', 'footer-link');
    footerLink.innerHTML = '<a href="https://www.weatherapi.com/" title="Free Weather API"><img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0"></a>';
    footerText.appendChild(footerLink);
    footer.appendChild(footerText);
    return footer;
}



document.body.appendChild(footer());
