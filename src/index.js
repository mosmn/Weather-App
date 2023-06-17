//key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv
// key=c40142647fab4af380442559231506
import "./style.css";

const createIMG = document.createElement("img");
createIMG.classList.add("bg-img");

const body = document.querySelector("body");

const BGsetter = async (condition = "Fog") =>{
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
}

const locationsWeather = async (location) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c40142647fab4af380442559231506&q=${location}&days=10`,
      { mode: "cors" }
    );
    const weather = await response.json();
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(error);
  }
};

BGsetter();
console.log(locationsWeather("London"));


export { BGsetter, locationsWeather };
