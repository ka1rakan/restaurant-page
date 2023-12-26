"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openAbout: () => (/* binding */ openAbout)
/* harmony export */ });
function openAbout(){
    const openBtn = document.querySelector('#about');
    const main = document.querySelector("main");
    const page = document.createElement("div")
    page.className = "page";


    main.innerHTML = "";
    main.appendChild(page);

    const title = document.createElement("h1");
    title.innerText = "About Us"
    page.appendChild(title);
    const text = document.createElement("p");
    text.innerText = "ANIMEATS is a lofi inpired restaurant found in Sydney, Australia. Our aim is to ensure our customers are having good time while they eat the foods of their favorite anime characters' favorite foods!"
    page.appendChild(text);

    
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBvcGVuQWJvdXQoKXtcbiAgICBjb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcGFnZS5jbGFzc05hbWUgPSBcInBhZ2VcIjtcblxuXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocGFnZSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkFib3V0IFVzXCJcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBcIkFOSU1FQVRTIGlzIGEgbG9maSBpbnBpcmVkIHJlc3RhdXJhbnQgZm91bmQgaW4gU3lkbmV5LCBBdXN0cmFsaWEuIE91ciBhaW0gaXMgdG8gZW5zdXJlIG91ciBjdXN0b21lcnMgYXJlIGhhdmluZyBnb29kIHRpbWUgd2hpbGUgdGhleSBlYXQgdGhlIGZvb2RzIG9mIHRoZWlyIGZhdm9yaXRlIGFuaW1lIGNoYXJhY3RlcnMnIGZhdm9yaXRlIGZvb2RzIVwiXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9