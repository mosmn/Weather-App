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

BGsetter();
