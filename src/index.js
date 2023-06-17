import "./style.css";
const createIMG = document.createElement("img");
const body = document.querySelector("body");
//key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv
async function BGsetter() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/t7Qb8655Z1VfBGr5XB?api_key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv",
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
  } catch (error) {
    console.log(error);
  }
}

BGsetter();
locationsWeather("London");
locationsWeather("new york");

export { BGsetter };