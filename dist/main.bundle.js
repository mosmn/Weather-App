(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const createIMG = document.createElement("img");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMvQyxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUUzQyxlQUFlQyxRQUFRQSxDQUFBLEVBQUc7RUFDeEIsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLG9GQUFvRixFQUNwRjtNQUFFQyxJQUFJLEVBQUU7SUFBTyxDQUNqQixDQUFDO0lBQ0QsTUFBTUMsR0FBRyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDakNWLFNBQVMsQ0FBQ1csR0FBRyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLEdBQUc7SUFDNUNaLElBQUksQ0FBQ2EsS0FBSyxDQUFDQyxlQUFlLEdBQUksUUFBT2pCLFNBQVMsQ0FBQ1csR0FBSSxJQUFHO0VBQ3hELENBQUMsQ0FBQyxPQUFPTyxLQUFLLEVBQUU7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztFQUNwQjtBQUNGO0FBRUFiLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYXN5bmMgZnVuY3Rpb24gQkdzZXR0ZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6YXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9rZXk9R0NUQ2tvSDh1RnIycFBlSkpXcTNDTXB6UUJuNklidHYmcz13aW5keVwiLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjYXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY3JlYXRlSU1HLnNyYyA9IGNhdC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NyZWF0ZUlNRy5zcmN9JylgO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5CR3NldHRlcigpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUlNRyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiQkdzZXR0ZXIiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImNhdCIsImpzb24iLCJzcmMiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=