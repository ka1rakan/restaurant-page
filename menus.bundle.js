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
function addAppetizersSection(){
    const appetizers = document.createElement("div");
    appetizers.id = "appetizers"
    appetizers.className = "section"
    const title = document.createElement("h1")
    title.innerText = "Appetizers"
    appetizers.appendChild(title)
    appetizers.appendChild(addFood("", "Onigiri", "Onigiri is an appetizer"))
    appetizers.appendChild(addFood("", "Nikuman", "Nikuman is an appetizer"))
    appetizers.appendChild(addFood("", "Gyoza", "Gyoza is an appetizer"))
    return appetizers;
}


function addMealsSection(){
    const meals = document.createElement("div");
    meals.className = "section"
    meals.id = "meals";
    const title = document.createElement("h1");
    title.innerText = "Meals";
    meals.appendChild(title);
    meals.appendChild(addFood("", "Ramen", "Ramen is a meal"));
    meals.appendChild(addFood("", "Yakiniku", "Yakiniku is a meal"));
    meals.appendChild(addFood("", "Katsudon", "Katsudon is a meal"));
    meals.appendChild(addFood("", "Sushi", "Sushi is a meal"));
    return meals
}

function addDesertsSection(){
    const deserts = document.createElement("div");
    deserts.className = "section";
    deserts.id = "deserts"
    const title = document.createElement("h1");
    title.innerText = "Deserts";
    deserts.appendChild(title);
    deserts.appendChild(addFood("","Melon Pan", "Melon is a desert"));
    deserts.appendChild(addFood("", "Japanese Parfeit", "Japanese Parfeit is a desert"));
    deserts.appendChild(addFood("", "Mitarashi Dango", "Mitarashi Dango is a desert"))
    return deserts
}


const sections = ["appetizers", "meals", "deserts"];
let sectionIndex = 0;
const currentSection = sections[0]
menu.appendChild(addAppetizersSection())

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

prevArrow.style="cursor: not-allowed"
prevArrow.addEventListener("click", (e)=>{
    if(sectionIndex!==0){
        menu.removeChild(document.querySelector(".section"))
        nextArrow.style = "cursor: allowed"
        sectionIndex--;
        if(sectionIndex===1){
            menu.appendChild(addMealsSection())
        }else if(sectionIndex===0){
            menu.appendChild(addAppetizersSection());
        }
        if(sectionIndex===0){
            e.target.style = "cursor: not-allowed"
        }
    }
})
nextArrow.addEventListener("click", (e)=>{
    if(sectionIndex!==2){
        menu.removeChild(document.querySelector(".section"))
        prevArrow.style = "cursor: allowed"
        sectionIndex++;
        if(sectionIndex===1){
            menu.appendChild(addMealsSection())
        }else if(sectionIndex===2){
            menu.appendChild(addDesertsSection());
        }
        
        if(sectionIndex===2){
            e.target.style="cursor:not-allowed"
        }
    }
})
menu.appendChild(arrowDiv)

/***/ }),

/***/ "./src/pics/next-arrow.png":
/*!*********************************!*\
  !*** ./src/pics/next-arrow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa8b4af19416440fd227.png";

/***/ }),

/***/ "./src/pics/previous-arrow.png":
/*!*************************************!*\
  !*** ./src/pics/previous-arrow.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6541fdecffda7eec01f.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menus.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7O0FBSUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHFEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZXZBcnJvdyBmcm9tICcuL3BpY3MvcHJldmlvdXMtYXJyb3cucG5nJztcbmltcG9ydCBOZXh0QXJyb3cgZnJvbSAnLi9waWNzL25leHQtYXJyb3cucG5nJztcblxuY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51cycpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4vL29wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSlcbi8vfSlcblxuXG5cbmZ1bmN0aW9uIGFkZEZvb2Qoc3JjLCBuYW1lLCB0ZXh0KXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNhcmQuY2xhc3NOYW1lPVwiY2FyZFwiO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoY29udGV4dCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjYXJkO1xufVxuZnVuY3Rpb24gYWRkQXBwZXRpemVyc1NlY3Rpb24oKXtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBldGl6ZXJzLmlkID0gXCJhcHBldGl6ZXJzXCJcbiAgICBhcHBldGl6ZXJzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkFwcGV0aXplcnNcIlxuICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiT25pZ2lyaVwiLCBcIk9uaWdpcmkgaXMgYW4gYXBwZXRpemVyXCIpKVxuICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIk5pa3VtYW5cIiwgXCJOaWt1bWFuIGlzIGFuIGFwcGV0aXplclwiKSlcbiAgICBhcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJHeW96YVwiLCBcIkd5b3phIGlzIGFuIGFwcGV0aXplclwiKSlcbiAgICByZXR1cm4gYXBwZXRpemVycztcbn1cblxuXG5mdW5jdGlvbiBhZGRNZWFsc1NlY3Rpb24oKXtcbiAgICBjb25zdCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVhbHMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXCJcbiAgICBtZWFscy5pZCA9IFwibWVhbHNcIjtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIk1lYWxzXCI7XG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJSYW1lblwiLCBcIlJhbWVuIGlzIGEgbWVhbFwiKSk7XG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIllha2luaWt1XCIsIFwiWWFraW5pa3UgaXMgYSBtZWFsXCIpKTtcbiAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiS2F0c3Vkb25cIiwgXCJLYXRzdWRvbiBpcyBhIG1lYWxcIikpO1xuICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJTdXNoaVwiLCBcIlN1c2hpIGlzIGEgbWVhbFwiKSk7XG4gICAgcmV0dXJuIG1lYWxzXG59XG5cbmZ1bmN0aW9uIGFkZERlc2VydHNTZWN0aW9uKCl7XG4gICAgY29uc3QgZGVzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzZXJ0cy5jbGFzc05hbWUgPSBcInNlY3Rpb25cIjtcbiAgICBkZXNlcnRzLmlkID0gXCJkZXNlcnRzXCJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkRlc2VydHNcIjtcbiAgICBkZXNlcnRzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIixcIk1lbG9uIFBhblwiLCBcIk1lbG9uIGlzIGEgZGVzZXJ0XCIpKTtcbiAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJKYXBhbmVzZSBQYXJmZWl0XCIsIFwiSmFwYW5lc2UgUGFyZmVpdCBpcyBhIGRlc2VydFwiKSk7XG4gICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiTWl0YXJhc2hpIERhbmdvXCIsIFwiTWl0YXJhc2hpIERhbmdvIGlzIGEgZGVzZXJ0XCIpKVxuICAgIHJldHVybiBkZXNlcnRzXG59XG5cblxuY29uc3Qgc2VjdGlvbnMgPSBbXCJhcHBldGl6ZXJzXCIsIFwibWVhbHNcIiwgXCJkZXNlcnRzXCJdO1xubGV0IHNlY3Rpb25JbmRleCA9IDA7XG5jb25zdCBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25zWzBdXG5tZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpXG5cbmNvbnN0IHByZXZBcnJvdyA9IG5ldyBJbWFnZSgpO1xucHJldkFycm93LnNyYyA9IFByZXZBcnJvdztcbnByZXZBcnJvdy5pZCA9IFwicHJldi1hcnJvd1wiXG5wcmV2QXJyb3cuY2xhc3NOYW1lID0gXCJhcnJvd1wiO1xuY29uc3QgbmV4dEFycm93ID0gbmV3IEltYWdlKCk7XG5uZXh0QXJyb3cuc3JjID0gTmV4dEFycm93O1xubmV4dEFycm93LmlkID0gXCJuZXh0LWFycm93XCJcbm5leHRBcnJvdy5jbGFzc05hbWUgPSBcImFycm93XCI7XG5jb25zdCBhcnJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hcnJvd0Rpdi5jbGFzc05hbWUgPSBcImFycm93LWRpdlwiO1xuYXJyb3dEaXYuYXBwZW5kQ2hpbGQocHJldkFycm93KTtcbmFycm93RGl2LmFwcGVuZENoaWxkKG5leHRBcnJvdyk7XG5cbnByZXZBcnJvdy5zdHlsZT1cImN1cnNvcjogbm90LWFsbG93ZWRcIlxucHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBpZihzZWN0aW9uSW5kZXghPT0wKXtcbiAgICAgICAgbWVudS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25cIikpXG4gICAgICAgIG5leHRBcnJvdy5zdHlsZSA9IFwiY3Vyc29yOiBhbGxvd2VkXCJcbiAgICAgICAgc2VjdGlvbkluZGV4LS07XG4gICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTEpe1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGRNZWFsc1NlY3Rpb24oKSlcbiAgICAgICAgfWVsc2UgaWYoc2VjdGlvbkluZGV4PT09MCl7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTApe1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUgPSBcImN1cnNvcjogbm90LWFsbG93ZWRcIlxuICAgICAgICB9XG4gICAgfVxufSlcbm5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgaWYoc2VjdGlvbkluZGV4IT09Mil7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKVxuICAgICAgICBwcmV2QXJyb3cuc3R5bGUgPSBcImN1cnNvcjogYWxsb3dlZFwiXG4gICAgICAgIHNlY3Rpb25JbmRleCsrO1xuICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0xKXtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkTWVhbHNTZWN0aW9uKCkpXG4gICAgICAgIH1lbHNlIGlmKHNlY3Rpb25JbmRleD09PTIpe1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGREZXNlcnRzU2VjdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09Mil7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZT1cImN1cnNvcjpub3QtYWxsb3dlZFwiXG4gICAgICAgIH1cbiAgICB9XG59KVxubWVudS5hcHBlbmRDaGlsZChhcnJvd0RpdikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=