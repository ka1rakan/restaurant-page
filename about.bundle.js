(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {

const openBtn = document.querySelector('#about');
const main = document.querySelector("main");
const page = document.createElement("div")
page.className = "page";

openBtn.addEventListener("click", ()=>{
    main.innerHTML = "";
    main.appendChild(page);
})

const title = document.createElement("h1");
title.innerText = "About Us"
page.appendChild(title);
const text = document.createElement("p");
text.innerText = "ANIMEATS is a lofi inpired restaurant found in Sydney, Australia. Our aim is to ensure our customers are having good time while they eat the foods of their favorite anime characters' favorite foods!"
page.appendChild(text);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlXCI7XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocGFnZSk7XG59KVxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmlubmVyVGV4dCA9IFwiQWJvdXQgVXNcIlxucGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50ZXh0LmlubmVyVGV4dCA9IFwiQU5JTUVBVFMgaXMgYSBsb2ZpIGlucGlyZWQgcmVzdGF1cmFudCBmb3VuZCBpbiBTeWRuZXksIEF1c3RyYWxpYS4gT3VyIGFpbSBpcyB0byBlbnN1cmUgb3VyIGN1c3RvbWVycyBhcmUgaGF2aW5nIGdvb2QgdGltZSB3aGlsZSB0aGV5IGVhdCB0aGUgZm9vZHMgb2YgdGhlaXIgZmF2b3JpdGUgYW5pbWUgY2hhcmFjdGVycycgZmF2b3JpdGUgZm9vZHMhXCJcbnBhZ2UuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==