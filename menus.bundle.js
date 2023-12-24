(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menus"],{

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ (() => {



const openBtn = document.querySelector('#menus');
const main = document.querySelector("main");
const menu = document.createElement("div");
menu.className = "menu";

//openBtn.addEventListener("click", ()=>{
    main.innerHTML = "";
    main.appendChild(menu)
//})

function addFood(src, name, text){
    const card = document.createElement("div")
    card.className="card";
    const image = new Image();
    image.src = src;
    const info = document.createElement("div");
    const title = document.createElement("h2")
    title.innerText = name;
    const context = document.createElement("p");
    context.innerText = text;
    info.appendChild(title);
    info.appendChild(context);
    card.appendChild(image);
    card.appendChild(info);

    return card;
}

const appetizers = document.createElement("div");
appetizers.className = "appetizers"
const title = document.createElement("h1")
title.innerText = "Appetizers"
appetizers.appendChild(title)
appetizers.appendChild(addFood("", "Onigiri", "Onigiri is an appetizer"))
appetizers.appendChild(addFood("", "Nikuman", "Nikuman is an appetizer"))
appetizers.appendChild(addFood("", "Gyoza", "Gyoza is an appetizer"))
menu.appendChild(appetizers)


const meals = document.createElement("div");
for(let i=0;i<4;i++){
    const meal = document.createElement("div");
    meal.className = "card";
    meal.id = `meal-${i}`
    meals.appendChild(meal);
};
const deserts = document.createElement("div");
for(let i=0;i<3;i++){
    const desert = document.createElement("div");
    desert.className = "card";
    desert.id = `desert-${i}`
    deserts.appendChild(desert);
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menus.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQUk7QUFDaEI7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudXMnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWVudS5jbGFzc05hbWUgPSBcIm1lbnVcIjtcblxuLy9vcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpXG4vL30pXG5cbmZ1bmN0aW9uIGFkZEZvb2Qoc3JjLCBuYW1lLCB0ZXh0KXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNhcmQuY2xhc3NOYW1lPVwiY2FyZFwiO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoY29udGV4dCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjYXJkO1xufVxuXG5jb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFwcGV0aXplcnMuY2xhc3NOYW1lID0gXCJhcHBldGl6ZXJzXCJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG50aXRsZS5pbm5lclRleHQgPSBcIkFwcGV0aXplcnNcIlxuYXBwZXRpemVycy5hcHBlbmRDaGlsZCh0aXRsZSlcbmFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIk9uaWdpcmlcIiwgXCJPbmlnaXJpIGlzIGFuIGFwcGV0aXplclwiKSlcbmFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIk5pa3VtYW5cIiwgXCJOaWt1bWFuIGlzIGFuIGFwcGV0aXplclwiKSlcbmFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIkd5b3phXCIsIFwiR3lvemEgaXMgYW4gYXBwZXRpemVyXCIpKVxubWVudS5hcHBlbmRDaGlsZChhcHBldGl6ZXJzKVxuXG5cbmNvbnN0IG1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcihsZXQgaT0wO2k8NDtpKyspe1xuICAgIGNvbnN0IG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lYWwuY2xhc3NOYW1lID0gXCJjYXJkXCI7XG4gICAgbWVhbC5pZCA9IGBtZWFsLSR7aX1gXG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQobWVhbCk7XG59O1xuY29uc3QgZGVzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICBjb25zdCBkZXNlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2VydC5jbGFzc05hbWUgPSBcImNhcmRcIjtcbiAgICBkZXNlcnQuaWQgPSBgZGVzZXJ0LSR7aX1gXG4gICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChkZXNlcnQpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=