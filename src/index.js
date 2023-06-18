//error display
// farhenheit to celcius and vice versa
// loading screen

const BGsetter = async (condition) => {
  const createIMG = document.createElement("img");
  createIMG.classList.add("bg-img");
  const body = document.querySelector("body");
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=${condition}`,
      { mode: "cors" }
    );
    const cat = await response.json();
    createIMG.src = cat.data.images.original.url;
    body.style.backgroundImage = `url('${createIMG.src}')`;
  } catch (error) {
    console.log(error);
  }
};

const locationsWeather = async (location) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c40142647fab4af380442559231506&q=${location}&days=10`,
      { mode: "cors" }
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
  }
};

const unitConverter = (temp, unit) => {
  if (unit === "°C") {
    return (temp * 9) / 5 + 32;
  } else {
    return ((temp - 32) * 5) / 9;
  }
};


export { BGsetter, locationsWeather, unitConverter };
