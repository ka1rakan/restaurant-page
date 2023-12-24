"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menus"],{

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/previous-arrow.png */ "./src/pics/previous-arrow.png");
/* harmony import */ var _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/next-arrow.png */ "./src/pics/next-arrow.png");



const openBtn = document.querySelector('#menus');
const main = document.querySelector("main");
const menu = document.createElement("div");
menu.className = "menu";

//openBtn.addEventListener("click", ()=>{
    main.innerHTML = "";
    main.appendChild(menu)
//})

const sections = ["appetizers", "meals", "deserts"];
const prevArrow = new Image();
prevArrow.src = _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
prevArrow.id = "prev-arrow"
prevArrow.className = "arrow";
const nextArrow = new Image();
nextArrow.src = _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__;
nextArrow.id = "next-arrow"
nextArrow.className = "arrow";
const arrowDiv = document.createElement("div");
arrowDiv.className = "arrow-div";
arrowDiv.appendChild(prevArrow);
arrowDiv.appendChild(nextArrow);

let sectionIndex = 0;

prevArrow.style="cursor: not-allowed"
prevArrow.addEventListener("click", (e)=>{
    if(sectionIndex!==0){
        nextArrow.style = "cursor: allowed"
        sectionIndex--;
        console.log(sectionIndex)
        if(sectionIndex===0){
            e.target.style = "cursor: not-allowed"
        }
    }
})
nextArrow.addEventListener("click", (e)=>{
    if(sectionIndex!==2){
        prevArrow.style = "cursor: allowed"
        sectionIndex++;
        console.log(sectionIndex)
        if(sectionIndex===2){
            e.target.style="cursor:not-allowed"
        }
    }
})
menu.appendChild(arrowDiv)


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

/***/ }),

/***/ "./src/pics/next-arrow.png":
/*!*********************************!*\
  !*** ./src/pics/next-arrow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f1af87554443130109b.png";

/***/ }),

/***/ "./src/pics/previous-arrow.png":
/*!*************************************!*\
  !*** ./src/pics/previous-arrow.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "923e061103b331e42bd8.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menus.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQUk7QUFDaEI7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZXZBcnJvdyBmcm9tICcuL3BpY3MvcHJldmlvdXMtYXJyb3cucG5nJztcbmltcG9ydCBOZXh0QXJyb3cgZnJvbSAnLi9waWNzL25leHQtYXJyb3cucG5nJztcblxuY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51cycpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4vL29wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSlcbi8vfSlcblxuY29uc3Qgc2VjdGlvbnMgPSBbXCJhcHBldGl6ZXJzXCIsIFwibWVhbHNcIiwgXCJkZXNlcnRzXCJdO1xuY29uc3QgcHJldkFycm93ID0gbmV3IEltYWdlKCk7XG5wcmV2QXJyb3cuc3JjID0gUHJldkFycm93O1xucHJldkFycm93LmlkID0gXCJwcmV2LWFycm93XCJcbnByZXZBcnJvdy5jbGFzc05hbWUgPSBcImFycm93XCI7XG5jb25zdCBuZXh0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbm5leHRBcnJvdy5zcmMgPSBOZXh0QXJyb3c7XG5uZXh0QXJyb3cuaWQgPSBcIm5leHQtYXJyb3dcIlxubmV4dEFycm93LmNsYXNzTmFtZSA9IFwiYXJyb3dcIjtcbmNvbnN0IGFycm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFycm93RGl2LmNsYXNzTmFtZSA9IFwiYXJyb3ctZGl2XCI7XG5hcnJvd0Rpdi5hcHBlbmRDaGlsZChwcmV2QXJyb3cpO1xuYXJyb3dEaXYuYXBwZW5kQ2hpbGQobmV4dEFycm93KTtcblxubGV0IHNlY3Rpb25JbmRleCA9IDA7XG5cbnByZXZBcnJvdy5zdHlsZT1cImN1cnNvcjogbm90LWFsbG93ZWRcIlxucHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBpZihzZWN0aW9uSW5kZXghPT0wKXtcbiAgICAgICAgbmV4dEFycm93LnN0eWxlID0gXCJjdXJzb3I6IGFsbG93ZWRcIlxuICAgICAgICBzZWN0aW9uSW5kZXgtLTtcbiAgICAgICAgY29uc29sZS5sb2coc2VjdGlvbkluZGV4KVxuICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0wKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlID0gXCJjdXJzb3I6IG5vdC1hbGxvd2VkXCJcbiAgICAgICAgfVxuICAgIH1cbn0pXG5uZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgIGlmKHNlY3Rpb25JbmRleCE9PTIpe1xuICAgICAgICBwcmV2QXJyb3cuc3R5bGUgPSBcImN1cnNvcjogYWxsb3dlZFwiXG4gICAgICAgIHNlY3Rpb25JbmRleCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWN0aW9uSW5kZXgpXG4gICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTIpe1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGU9XCJjdXJzb3I6bm90LWFsbG93ZWRcIlxuICAgICAgICB9XG4gICAgfVxufSlcbm1lbnUuYXBwZW5kQ2hpbGQoYXJyb3dEaXYpXG5cblxuZnVuY3Rpb24gYWRkRm9vZChzcmMsIG5hbWUsIHRleHQpe1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY2FyZC5jbGFzc05hbWU9XCJjYXJkXCI7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250ZXh0LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChjb250ZXh0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYXBwZXRpemVycy5jbGFzc05hbWUgPSBcImFwcGV0aXplcnNcIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbnRpdGxlLmlubmVyVGV4dCA9IFwiQXBwZXRpemVyc1wiXG5hcHBldGl6ZXJzLmFwcGVuZENoaWxkKHRpdGxlKVxuYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiT25pZ2lyaVwiLCBcIk9uaWdpcmkgaXMgYW4gYXBwZXRpemVyXCIpKVxuYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiTmlrdW1hblwiLCBcIk5pa3VtYW4gaXMgYW4gYXBwZXRpemVyXCIpKVxuYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiR3lvemFcIiwgXCJHeW96YSBpcyBhbiBhcHBldGl6ZXJcIikpXG5tZW51LmFwcGVuZENoaWxkKGFwcGV0aXplcnMpXG5cblxuY29uc3QgbWVhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9yKGxldCBpPTA7aTw0O2krKyl7XG4gICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVhbC5jbGFzc05hbWUgPSBcImNhcmRcIjtcbiAgICBtZWFsLmlkID0gYG1lYWwtJHtpfWBcbiAgICBtZWFscy5hcHBlbmRDaGlsZChtZWFsKTtcbn07XG5jb25zdCBkZXNlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcihsZXQgaT0wO2k8MztpKyspe1xuICAgIGNvbnN0IGRlc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzZXJ0LmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xuICAgIGRlc2VydC5pZCA9IGBkZXNlcnQtJHtpfWBcbiAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGRlc2VydCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==