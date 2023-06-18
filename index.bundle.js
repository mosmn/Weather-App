"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BGsetter: () => (/* binding */ BGsetter),
/* harmony export */   locationsWeather: () => (/* binding */ locationsWeather)
/* harmony export */ });
const BGsetter = async condition => {
  const createIMG = document.createElement("img");
  createIMG.classList.add("bg-img");
  const body = document.querySelector("body");
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=${condition}`, {
      mode: "cors"
    });
    const cat = await response.json();
    createIMG.src = cat.data.images.original.url;
    body.style.backgroundImage = `url('${createIMG.src}')`;
  } catch (error) {
    console.log(error);
  }
};
const locationsWeather = async location => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c40142647fab4af380442559231506&q=${location}&days=10`, {
      mode: "cors"
    });
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
  }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHLE1BQU9DLFNBQVMsSUFBSztFQUNwQyxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ0YsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakMsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0MsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGtGQUFpRlQsU0FBVSxFQUFDLEVBQzdGO01BQUVVLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNqQ1gsU0FBUyxDQUFDWSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztJQUM1Q1gsSUFBSSxDQUFDWSxLQUFLLENBQUNDLGVBQWUsR0FBSSxRQUFPbEIsU0FBUyxDQUFDWSxHQUFJLElBQUc7RUFDeEQsQ0FBQyxDQUFDLE9BQU9PLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3BCO0FBQ0YsQ0FBQztBQUVELE1BQU1HLGdCQUFnQixHQUFHLE1BQU9DLFFBQVEsSUFBSztFQUMzQyxJQUFJO0lBQ0YsTUFBTWhCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLG1GQUFrRmUsUUFBUyxVQUFTLEVBQ3JHO01BQUVkLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxNQUFNZSxPQUFPLEdBQUcsTUFBTWpCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDckMsT0FBT2EsT0FBTztFQUNoQixDQUFDLENBQUMsT0FBT0wsS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkdzZXR0ZXIgPSBhc3luYyAoY29uZGl0aW9uKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUlNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNyZWF0ZUlNRy5jbGFzc0xpc3QuYWRkKFwiYmctaW1nXCIpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/a2V5PUdDVENrb0g4dUZyMnBQZUpKV3EzQ01welFCbjZJYnR2JnM9JHtjb25kaXRpb259YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgY2F0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNyZWF0ZUlNRy5zcmMgPSBjYXQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtjcmVhdGVJTUcuc3JjfScpYDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGxvY2F0aW9uc1dlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YzQwMTQyNjQ3ZmFiNGFmMzgwNDQyNTU5MjMxNTA2JnE9JHtsb2NhdGlvbn0mZGF5cz0xMGAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgeyBCR3NldHRlciwgbG9jYXRpb25zV2VhdGhlciB9O1xuIl0sIm5hbWVzIjpbIkJHc2V0dGVyIiwiY29uZGl0aW9uIiwiY3JlYXRlSU1HIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNhdCIsImpzb24iLCJzcmMiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uc1dlYXRoZXIiLCJsb2NhdGlvbiIsIndlYXRoZXIiXSwic291cmNlUm9vdCI6IiJ9