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
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv&s=${condition + " weather"}`, {
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
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c40142647fab4af380442559231506&q=${location}&days=3`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHLE1BQU9DLFNBQVMsSUFBSztFQUNwQyxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ0YsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakMsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0MsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGtGQUFpRlQsU0FBUyxHQUFHLFVBQVcsRUFBQyxFQUMxRztNQUFFVSxJQUFJLEVBQUU7SUFBTyxDQUNqQixDQUFDO0lBQ0QsTUFBTUMsR0FBRyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDakNYLFNBQVMsQ0FBQ1ksR0FBRyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLEdBQUc7SUFDNUNYLElBQUksQ0FBQ1ksS0FBSyxDQUFDQyxlQUFlLEdBQUksUUFBT2xCLFNBQVMsQ0FBQ1ksR0FBSSxJQUFHO0VBQ3hELENBQUMsQ0FBQyxPQUFPTyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztFQUNwQjtBQUNGLENBQUM7QUFFRCxNQUFNRyxnQkFBZ0IsR0FBRyxNQUFPQyxRQUFRLElBQUs7RUFDM0MsSUFBSTtJQUNGLE1BQU1oQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN6QixtRkFBa0ZlLFFBQVMsU0FBUSxFQUNwRztNQUFFZCxJQUFJLEVBQUU7SUFBTyxDQUNqQixDQUFDO0lBQ0QsTUFBTWUsT0FBTyxHQUFHLE1BQU1qQixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3JDLE9BQU9hLE9BQU87RUFDaEIsQ0FBQyxDQUFDLE9BQU9MLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3BCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJHc2V0dGVyID0gYXN5bmMgKGNvbmRpdGlvbikgPT4ge1xuICBjb25zdCBjcmVhdGVJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjcmVhdGVJTUcuY2xhc3NMaXN0LmFkZChcImJnLWltZ1wiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2tleT1HQ1RDa29IOHVGcjJwUGVKSldxM0NNcHpRQm42SWJ0diZzPSR7Y29uZGl0aW9uICsgXCIgd2VhdGhlclwifWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGNhdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjcmVhdGVJTUcuc3JjID0gY2F0LmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y3JlYXRlSU1HLnNyY30nKWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBsb2NhdGlvbnNXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWM0MDE0MjY0N2ZhYjRhZjM4MDQ0MjU1OTIzMTUwNiZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgeyBCR3NldHRlciwgbG9jYXRpb25zV2VhdGhlciB9O1xuIl0sIm5hbWVzIjpbIkJHc2V0dGVyIiwiY29uZGl0aW9uIiwiY3JlYXRlSU1HIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNhdCIsImpzb24iLCJzcmMiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uc1dlYXRoZXIiLCJsb2NhdGlvbiIsIndlYXRoZXIiXSwic291cmNlUm9vdCI6IiJ9