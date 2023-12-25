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

openBtn.addEventListener("click", ()=>{
    main.innerHTML = "";
    main.appendChild(menu)
})



function addFood(src, name, text){
    const card = document.createElement("div")
    card.className="card";
    const image = new Image();
    image.src = src;
    const info = document.createElement("div");
    const title = document.createElement("h2");
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
    const title = document.createElement("h1");
    title.innerText = "Deserts";
    deserts.appendChild(title);
    deserts.appendChild(addFood("","Melon Pan", "Melon is a desert"));
    deserts.appendChild(addFood("", "Japanese Parfeit", "Japanese Parfeit is a desert"));
    deserts.appendChild(addFood("", "Mitarashi Dango", "Mitarashi Dango is a desert"))
    return deserts;
}


const sections = ["appetizers", "meals", "deserts"];
let sectionIndex = 0;
menu.appendChild(addAppetizersSection())

const prevArrow = new Image();
prevArrow.src = _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
prevArrow.className = "arrow";
const nextArrow = new Image();
nextArrow.src = _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__;
nextArrow.className = "arrow";
const arrowDiv = document.createElement("div");
arrowDiv.className = "arrow-div";
arrowDiv.appendChild(prevArrow);
arrowDiv.appendChild(nextArrow);

prevArrow.style="cursor: not-allowed"
prevArrow.addEventListener("click", (e)=>{
    if(sectionIndex!==0){
        menu.removeChild(document.querySelector(".section"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBUztBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJldkFycm93IGZyb20gJy4vcGljcy9wcmV2aW91cy1hcnJvdy5wbmcnO1xuaW1wb3J0IE5leHRBcnJvdyBmcm9tICcuL3BpY3MvbmV4dC1hcnJvdy5wbmcnO1xuXG5jb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVzJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1lbnUuY2xhc3NOYW1lID0gXCJtZW51XCI7XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSlcbn0pXG5cblxuXG5mdW5jdGlvbiBhZGRGb29kKHNyYywgbmFtZSwgdGV4dCl7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjYXJkLmNsYXNzTmFtZT1cImNhcmRcIjtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIGNvbnN0IGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250ZXh0LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChjb250ZXh0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5mdW5jdGlvbiBhZGRBcHBldGl6ZXJzU2VjdGlvbigpe1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcGV0aXplcnMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXCJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiQXBwZXRpemVyc1wiXG4gICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBhcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJPbmlnaXJpXCIsIFwiT25pZ2lyaSBpcyBhbiBhcHBldGl6ZXJcIikpXG4gICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiTmlrdW1hblwiLCBcIk5pa3VtYW4gaXMgYW4gYXBwZXRpemVyXCIpKVxuICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIkd5b3phXCIsIFwiR3lvemEgaXMgYW4gYXBwZXRpemVyXCIpKVxuICAgIHJldHVybiBhcHBldGl6ZXJzO1xufVxuXG5cbmZ1bmN0aW9uIGFkZE1lYWxzU2VjdGlvbigpe1xuICAgIGNvbnN0IG1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZWFscy5jbGFzc05hbWUgPSBcInNlY3Rpb25cIlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTWVhbHNcIjtcbiAgICBtZWFscy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIlJhbWVuXCIsIFwiUmFtZW4gaXMgYSBtZWFsXCIpKTtcbiAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKFwiXCIsIFwiWWFraW5pa3VcIiwgXCJZYWtpbmlrdSBpcyBhIG1lYWxcIikpO1xuICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJLYXRzdWRvblwiLCBcIkthdHN1ZG9uIGlzIGEgbWVhbFwiKSk7XG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIlN1c2hpXCIsIFwiU3VzaGkgaXMgYSBtZWFsXCIpKTtcbiAgICByZXR1cm4gbWVhbHNcbn1cblxuZnVuY3Rpb24gYWRkRGVzZXJ0c1NlY3Rpb24oKXtcbiAgICBjb25zdCBkZXNlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNlcnRzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiRGVzZXJ0c1wiO1xuICAgIGRlc2VydHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGRlc2VydHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLFwiTWVsb24gUGFuXCIsIFwiTWVsb24gaXMgYSBkZXNlcnRcIikpO1xuICAgIGRlc2VydHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChcIlwiLCBcIkphcGFuZXNlIFBhcmZlaXRcIiwgXCJKYXBhbmVzZSBQYXJmZWl0IGlzIGEgZGVzZXJ0XCIpKTtcbiAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoXCJcIiwgXCJNaXRhcmFzaGkgRGFuZ29cIiwgXCJNaXRhcmFzaGkgRGFuZ28gaXMgYSBkZXNlcnRcIikpXG4gICAgcmV0dXJuIGRlc2VydHM7XG59XG5cblxuY29uc3Qgc2VjdGlvbnMgPSBbXCJhcHBldGl6ZXJzXCIsIFwibWVhbHNcIiwgXCJkZXNlcnRzXCJdO1xubGV0IHNlY3Rpb25JbmRleCA9IDA7XG5tZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpXG5cbmNvbnN0IHByZXZBcnJvdyA9IG5ldyBJbWFnZSgpO1xucHJldkFycm93LnNyYyA9IFByZXZBcnJvdztcbnByZXZBcnJvdy5jbGFzc05hbWUgPSBcImFycm93XCI7XG5jb25zdCBuZXh0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbm5leHRBcnJvdy5zcmMgPSBOZXh0QXJyb3c7XG5uZXh0QXJyb3cuY2xhc3NOYW1lID0gXCJhcnJvd1wiO1xuY29uc3QgYXJyb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYXJyb3dEaXYuY2xhc3NOYW1lID0gXCJhcnJvdy1kaXZcIjtcbmFycm93RGl2LmFwcGVuZENoaWxkKHByZXZBcnJvdyk7XG5hcnJvd0Rpdi5hcHBlbmRDaGlsZChuZXh0QXJyb3cpO1xuXG5wcmV2QXJyb3cuc3R5bGU9XCJjdXJzb3I6IG5vdC1hbGxvd2VkXCJcbnByZXZBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgaWYoc2VjdGlvbkluZGV4IT09MCl7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKTtcbiAgICAgICAgbmV4dEFycm93LnN0eWxlID0gXCJjdXJzb3I6IGFsbG93ZWRcIlxuICAgICAgICBzZWN0aW9uSW5kZXgtLTtcbiAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09MSl7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZE1lYWxzU2VjdGlvbigpKVxuICAgICAgICB9ZWxzZSBpZihzZWN0aW9uSW5kZXg9PT0wKXtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkQXBwZXRpemVyc1NlY3Rpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTApe1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUgPSBcImN1cnNvcjogbm90LWFsbG93ZWRcIlxuICAgICAgICB9XG4gICAgfVxufSlcbm5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgaWYoc2VjdGlvbkluZGV4IT09Mil7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKVxuICAgICAgICBwcmV2QXJyb3cuc3R5bGUgPSBcImN1cnNvcjogYWxsb3dlZFwiXG4gICAgICAgIHNlY3Rpb25JbmRleCsrO1xuICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0xKXtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkTWVhbHNTZWN0aW9uKCkpXG4gICAgICAgIH1lbHNlIGlmKHNlY3Rpb25JbmRleD09PTIpe1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGREZXNlcnRzU2VjdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09Mil7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZT1cImN1cnNvcjpub3QtYWxsb3dlZFwiXG4gICAgICAgIH1cbiAgICB9XG59KVxubWVudS5hcHBlbmRDaGlsZChhcnJvd0RpdikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=