(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const createIMG = document.createElement("img");
async function getCatImage() {
  const response = await fetch("https:api.giphy.com/v1/gifs/translate?key=GCTCkoH8uFr2pPeJJWq3CMpzQBn6Ibtv=cats", {
    mode: "cors"
  });
  const cat = await response.json();
  createIMG.src = cat.data.images.original.url;
  document.body.appendChild(createIMG);
}
getCatImage();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUUvQyxlQUFlQyxXQUFXQSxDQUFBLEVBQUc7RUFDM0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsaUZBQWlGLEVBQ2pGO0lBQUVDLElBQUksRUFBRTtFQUFPLENBQ2pCLENBQUM7RUFDRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztFQUNqQ1IsU0FBUyxDQUFDUyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztFQUM1Q1osUUFBUSxDQUFDYSxJQUFJLENBQUNDLFdBQVcsQ0FBQ2YsU0FBUyxDQUFDO0FBQ3RDO0FBRUFHLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0SW1hZ2UoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczphcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2tleT1HQ1RDa29IOHVGcjJwUGVKSldxM0NNcHpRQm42SWJ0dj1jYXRzXCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGNhdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY3JlYXRlSU1HLnNyYyA9IGNhdC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSU1HKTtcbn1cblxuZ2V0Q2F0SW1hZ2UoKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVJTUciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDYXRJbWFnZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiY2F0IiwianNvbiIsInNyYyIsImRhdGEiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=