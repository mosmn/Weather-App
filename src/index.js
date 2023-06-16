const createIMG = document.createElement("img");
// set it ass bodys background img
const body = document.querySelector("body");

async function BGsetter() {
    try {
        const response = await fetch(
            "https:api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=windy",
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
