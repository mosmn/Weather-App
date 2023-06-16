(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const createIMG = document.createElement("img");
// set it ass bodys background img
const body = document.querySelector("body");
async function BGsetter() {
  try {
    const response = await fetch("https:api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=windy", {
      mode: "cors"
    });
    const cat = await response.json();
    createIMG.src = cat.data.images.original.url;
    body.style.backgroundImage = `url('${createIMG.src}')`;
  } catch (error) {
    console.log(error);
  }
}
BGsetter();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMvQztBQUNBLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBRTNDLGVBQWVDLFFBQVFBLENBQUEsRUFBRztFQUN4QixJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsb0ZBQW9GLEVBQ3BGO01BQUVDLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNqQ1YsU0FBUyxDQUFDVyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztJQUM1Q1osSUFBSSxDQUFDYSxLQUFLLENBQUNDLGVBQWUsR0FBSSxRQUFPakIsU0FBUyxDQUFDVyxHQUFJLElBQUc7RUFDeEQsQ0FBQyxDQUFDLE9BQU9PLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3BCO0FBQ0Y7QUFFQWIsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gc2V0IGl0IGFzcyBib2R5cyBiYWNrZ3JvdW5kIGltZ1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBCR3NldHRlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczphcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2tleT1HQ1RDa29IOHVGcjJwUGVKSldxM0NNcHpRQm42SWJ0diZzPXdpbmR5XCIsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGNhdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjcmVhdGVJTUcuc3JjID0gY2F0LmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y3JlYXRlSU1HLnNyY30nKWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbkJHc2V0dGVyKCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlSU1HIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJCR3NldHRlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiY2F0IiwianNvbiIsInNyYyIsImRhdGEiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==