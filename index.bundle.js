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
/* harmony export */   locationsWeather: () => (/* binding */ locationsWeather),
/* harmony export */   unitConverter: () => (/* binding */ unitConverter)
/* harmony export */ });
//error display
// farhenheit to celcius and vice versa
// loading screen

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
const unitConverter = (temp, unit) => {
  if (unit === "°C") {
    return temp * 9 / 5 + 32;
  } else {
    return (temp - 32) * 5 / 9;
  }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBT0MsU0FBUyxJQUFLO0VBQ3BDLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DRixTQUFTLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNqQyxNQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQyxJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsa0ZBQWlGVCxTQUFVLEVBQUMsRUFDN0Y7TUFBRVUsSUFBSSxFQUFFO0lBQU8sQ0FDakIsQ0FBQztJQUNELE1BQU1DLEdBQUcsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ2pDWCxTQUFTLENBQUNZLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHO0lBQzVDWCxJQUFJLENBQUNZLEtBQUssQ0FBQ0MsZUFBZSxHQUFJLFFBQU9sQixTQUFTLENBQUNZLEdBQUksSUFBRztFQUN4RCxDQUFDLENBQUMsT0FBT08sS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDO0FBRUQsTUFBTUcsZ0JBQWdCLEdBQUcsTUFBT0MsUUFBUSxJQUFLO0VBQzNDLElBQUk7SUFDRixNQUFNaEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsbUZBQWtGZSxRQUFTLFVBQVMsRUFDckc7TUFBRWQsSUFBSSxFQUFFO0lBQU8sQ0FDakIsQ0FBQztJQUNELE1BQU1lLE9BQU8sR0FBRyxNQUFNakIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNyQyxPQUFPYSxPQUFPO0VBQ2hCLENBQUMsQ0FBQyxPQUFPTCxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztFQUNwQjtBQUNGLENBQUM7QUFFRCxNQUFNTSxhQUFhLEdBQUdBLENBQUNDLElBQUksRUFBRUMsSUFBSSxLQUFLO0VBQ3BDLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUU7SUFDakIsT0FBUUQsSUFBSSxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsRUFBRTtFQUM1QixDQUFDLE1BQU07SUFDTCxPQUFRLENBQUNBLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFJLENBQUM7RUFDOUI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9lcnJvciBkaXNwbGF5XG4vLyBmYXJoZW5oZWl0IHRvIGNlbGNpdXMgYW5kIHZpY2UgdmVyc2Fcbi8vIGxvYWRpbmcgc2NyZWVuXG5cbmNvbnN0IEJHc2V0dGVyID0gYXN5bmMgKGNvbmRpdGlvbikgPT4ge1xuICBjb25zdCBjcmVhdGVJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjcmVhdGVJTUcuY2xhc3NMaXN0LmFkZChcImJnLWltZ1wiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2tleT1HQ1RDa29IOHVGcjJwUGVKSldxM0NNcHpRQm42SWJ0diZzPSR7Y29uZGl0aW9ufWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGNhdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjcmVhdGVJTUcuc3JjID0gY2F0LmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y3JlYXRlSU1HLnNyY30nKWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBsb2NhdGlvbnNXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWM0MDE0MjY0N2ZhYjRhZjM4MDQ0MjU1OTIzMTUwNiZxPSR7bG9jYXRpb259JmRheXM9MTBgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgdW5pdENvbnZlcnRlciA9ICh0ZW1wLCB1bml0KSA9PiB7XG4gIGlmICh1bml0ID09PSBcIsKwQ1wiKSB7XG4gICAgcmV0dXJuICh0ZW1wICogOSkgLyA1ICsgMzI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgodGVtcCAtIDMyKSAqIDUpIC8gOTtcbiAgfVxufTtcblxuXG5leHBvcnQgeyBCR3NldHRlciwgbG9jYXRpb25zV2VhdGhlciwgdW5pdENvbnZlcnRlciB9O1xuIl0sIm5hbWVzIjpbIkJHc2V0dGVyIiwiY29uZGl0aW9uIiwiY3JlYXRlSU1HIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNhdCIsImpzb24iLCJzcmMiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uc1dlYXRoZXIiLCJsb2NhdGlvbiIsIndlYXRoZXIiLCJ1bml0Q29udmVydGVyIiwidGVtcCIsInVuaXQiXSwic291cmNlUm9vdCI6IiJ9