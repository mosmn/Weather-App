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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHLE1BQU9DLFNBQVMsSUFBSztFQUNwQyxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ0YsU0FBUyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakMsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0MsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGtGQUNDVCxTQUFTLEdBQUcsVUFDYixFQUFDLEVBQ0Y7TUFBRVUsSUFBSSxFQUFFO0lBQU8sQ0FDakIsQ0FBQztJQUNELE1BQU1DLEdBQUcsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ2pDWCxTQUFTLENBQUNZLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHO0lBQzVDWCxJQUFJLENBQUNZLEtBQUssQ0FBQ0MsZUFBZSxHQUFJLFFBQU9sQixTQUFTLENBQUNZLEdBQUksSUFBRztFQUN4RCxDQUFDLENBQUMsT0FBT08sS0FBSyxFQUFFO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDcEI7QUFDRixDQUFDO0FBRUQsTUFBTUcsZ0JBQWdCLEdBQUcsTUFBT0MsUUFBUSxJQUFLO0VBQzNDLElBQUk7SUFDRixNQUFNaEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsbUZBQWtGZSxRQUFTLFVBQVMsRUFDckc7TUFBRWQsSUFBSSxFQUFFO0lBQU8sQ0FDakIsQ0FBQztJQUNELE1BQU1lLE9BQU8sR0FBRyxNQUFNakIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNyQyxPQUFPYSxPQUFPO0VBQ2hCLENBQUMsQ0FBQyxPQUFPTCxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztFQUNwQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCR3NldHRlciA9IGFzeW5jIChjb25kaXRpb24pID0+IHtcbiAgY29uc3QgY3JlYXRlSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY3JlYXRlSU1HLmNsYXNzTGlzdC5hZGQoXCJiZy1pbWdcIik7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9rZXk9R0NUQ2tvSDh1RnIycFBlSkpXcTNDTXB6UUJuNklidHYmcz0ke1xuICAgICAgICBjb25kaXRpb24gKyBcIiB3ZWF0aGVyXCJcbiAgICAgIH1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjYXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3JlYXRlSU1HLnNyYyA9IGNhdC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NyZWF0ZUlNRy5zcmN9JylgO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgbG9jYXRpb25zV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jNDAxNDI2NDdmYWI0YWYzODA0NDI1NTkyMzE1MDYmcT0ke2xvY2F0aW9ufSZkYXlzPTEwYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IEJHc2V0dGVyLCBsb2NhdGlvbnNXZWF0aGVyIH07XG4iXSwibmFtZXMiOlsiQkdzZXR0ZXIiLCJjb25kaXRpb24iLCJjcmVhdGVJTUciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiY2F0IiwianNvbiIsInNyYyIsImRhdGEiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb25zV2VhdGhlciIsImxvY2F0aW9uIiwid2VhdGhlciJdLCJzb3VyY2VSb290IjoiIn0=