"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menus"],{

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/previous-arrow.png */ "./src/pics/previous-arrow.png");
/* harmony import */ var _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/next-arrow.png */ "./src/pics/next-arrow.png");
/* harmony import */ var _pics_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/onigiri.jpg */ "./src/pics/onigiri.jpg");
/* harmony import */ var _pics_gyoza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pics/gyoza.png */ "./src/pics/gyoza.png");
/* harmony import */ var _pics_japanese_parfait_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pics/japanese-parfait.jpeg */ "./src/pics/japanese-parfait.jpeg");
/* harmony import */ var _pics_katsudon_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pics/katsudon.jpeg */ "./src/pics/katsudon.jpeg");
/* harmony import */ var _pics_melon_pan_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pics/melon-pan.jpg */ "./src/pics/melon-pan.jpg");
/* harmony import */ var _pics_mitarashi_dango_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pics/mitarashi-dango.png */ "./src/pics/mitarashi-dango.png");
/* harmony import */ var _pics_nikuman_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pics/nikuman.jpg */ "./src/pics/nikuman.jpg");
/* harmony import */ var _pics_ramen_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pics/ramen.jpg */ "./src/pics/ramen.jpg");
/* harmony import */ var _pics_sushi_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pics/sushi.png */ "./src/pics/sushi.png");
/* harmony import */ var _pics_yakiniku_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pics/yakiniku.jpg */ "./src/pics/yakiniku.jpg");














function openMenu(){
    const main = document.querySelector("main");
    const menu = document.createElement("div");
    menu.className = "menu";
    main.innerHTML = "";
    main.appendChild(menu)



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

        return card
    }
    
    function addAppetizersSection(){
        const appetizers = document.createElement("div");
        appetizers.className = "section";
        const title = document.createElement("h1");
        title.innerText = "Appetizers";
        appetizers.appendChild(title);
        appetizers.appendChild(addFood(_pics_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__, "Onigiri", "Onigiri is a white rice ball shaped into a triangle. Onigiri are often filled with vegetables or meat and it is wrapped in nori seaweed. Although it resembles sushi, onigiri doesn't use raw fish."));
        appetizers.appendChild(addFood(_pics_nikuman_jpg__WEBPACK_IMPORTED_MODULE_8__, "Nikuman", "Nikuman is a Japanese steamed fluffy bun filled with minced pork. They are steamed in a bamboo steamer and are served hot. Nikuman is the perfect on-the-go savory snack and comfort food for those colder nights."));
        appetizers.appendChild(addFood(_pics_gyoza_png__WEBPACK_IMPORTED_MODULE_3__, "Gyoza", "Originating from China, this dumpling-inspired dish is a thin dough filled with meat like pork or veggies (cabbage, green onions, garlic, and ginger) and served with soy sauce. Gyoza often gets served alongside a bowl of ramen or beforehand as an appetizer"));

        return appetizers
    }
    function addMealsSection(){
        const meals = document.createElement("div");
        meals.className = "section"
        const title = document.createElement("h1");
        title.innerText = "Meals";
        meals.appendChild(title);
        meals.appendChild(addFood(_pics_ramen_jpg__WEBPACK_IMPORTED_MODULE_9__, "Ramen", "The most common and iconic food seen in anime is the bowl of ramen. It's a favorite dish for many popular characters like Naruto, who loves eating miso chashu ramen at Ichiraku Ramen. Ramen is also eaten by Goku and Beerus from Dragon Ball. Senku from Dr. Stone loves it so much, that he even managed to 'invent' it in the stone age."));
        meals.appendChild(addFood(_pics_yakiniku_jpg__WEBPACK_IMPORTED_MODULE_11__, "Yakiniku", "Yakiniku is a style of cooking bite-size meat and vegetables over a flame of wood charcoals. In its broadest sense, refers to grilled meat cuisine."));
        meals.appendChild(addFood(_pics_katsudon_jpeg__WEBPACK_IMPORTED_MODULE_5__, "Katsudon", "Katsudon is a Japanese pork cutlet rice bowl. The pork is breaded and fried before being layered on top of an egg omelet, rice, and sauteed onions."));
        meals.appendChild(addFood(_pics_sushi_png__WEBPACK_IMPORTED_MODULE_10__, "Sushi", "This bite-sized delicacy features seasoned rice topped with various types of seafood, vegetables, and other ingredients. Whether served as nigiri, maki rolls, or sashimi, sushi has become a global sensation that captures the essence of Japanese cuisine."));

        return meals
    }

    function addDesertsSection(){
        const deserts = document.createElement("div");
        deserts.className = "section";
        const title = document.createElement("h1");
        title.innerText = "Deserts";
        deserts.appendChild(title);
        deserts.appendChild(addFood(_pics_melon_pan_jpg__WEBPACK_IMPORTED_MODULE_6__,"Melon Pan", "Sweet, soft, and fluffy Japanese bread with a patterned grid on its sugar cookie crust."));
        deserts.appendChild(addFood(_pics_japanese_parfait_jpeg__WEBPACK_IMPORTED_MODULE_4__, "Japanese Parfait", "Japanese parfait is a popular japanese desert with ice cream, mochi, red beans, cornflakes, fruits, and other toppings like pocky, though other options are available."));
        deserts.appendChild(addFood(_pics_mitarashi_dango_png__WEBPACK_IMPORTED_MODULE_7__, "Mitarashi Dango", "Dango is a dish that basically consists of 4 to 5 balls of rice flour dumplings covered with soy sauce glaze after being grilled. Dango balls are skewed on a bamboo stick and it is mostly eaten during springtime. The delicious, sweet, and chewy snack is often paired with tea or eaten as a dessert."))
        return deserts;
    }



    let sectionIndex = 0;
    menu.appendChild(addAppetizersSection())

    const arrows = (function addArrows(){
        const prevArrow = new Image();
        prevArrow.src = _pics_previous_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
        prevArrow.className = "arrow";
        const nextArrow = new Image();
        nextArrow.src = _pics_next_arrow_png__WEBPACK_IMPORTED_MODULE_1__;
        nextArrow.className = "arrow";
        

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
        
        return {prevArrow, nextArrow}
    })();
    const arrowDiv = document.createElement("div");
    arrowDiv.className = "arrow-div";
    arrowDiv.appendChild(arrows.prevArrow);
    arrowDiv.appendChild(arrows.nextArrow);

    const credits = document.createElement("p");
    credits.innerText = "Arrow buttons taken from banner2.cleanpng.com\nFood explanations taken from gamerant.com";
    credits.className = "credits";
        
    menu.appendChild(credits)
    menu.appendChild(arrowDiv)
}

/***/ }),

/***/ "./src/pics/gyoza.png":
/*!****************************!*\
  !*** ./src/pics/gyoza.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94ec808c7510fff65458.png";

/***/ }),

/***/ "./src/pics/japanese-parfait.jpeg":
/*!****************************************!*\
  !*** ./src/pics/japanese-parfait.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8736d4394c077db0d6fa.jpeg";

/***/ }),

/***/ "./src/pics/katsudon.jpeg":
/*!********************************!*\
  !*** ./src/pics/katsudon.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fde96e7dffb16df6e8f.jpeg";

/***/ }),

/***/ "./src/pics/melon-pan.jpg":
/*!********************************!*\
  !*** ./src/pics/melon-pan.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a81ed6e2e4207949233.jpg";

/***/ }),

/***/ "./src/pics/mitarashi-dango.png":
/*!**************************************!*\
  !*** ./src/pics/mitarashi-dango.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b18697949d7d5469c4b.png";

/***/ }),

/***/ "./src/pics/next-arrow.png":
/*!*********************************!*\
  !*** ./src/pics/next-arrow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa8b4af19416440fd227.png";

/***/ }),

/***/ "./src/pics/nikuman.jpg":
/*!******************************!*\
  !*** ./src/pics/nikuman.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "024e60e8d54da7363008.jpg";

/***/ }),

/***/ "./src/pics/onigiri.jpg":
/*!******************************!*\
  !*** ./src/pics/onigiri.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59acf66e264429fd06a6.jpg";

/***/ }),

/***/ "./src/pics/previous-arrow.png":
/*!*************************************!*\
  !*** ./src/pics/previous-arrow.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6541fdecffda7eec01f.png";

/***/ }),

/***/ "./src/pics/ramen.jpg":
/*!****************************!*\
  !*** ./src/pics/ramen.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22740afb0d297a7105bf.jpg";

/***/ }),

/***/ "./src/pics/sushi.png":
/*!****************************!*\
  !*** ./src/pics/sushi.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322e33cbf62e7f7b21a8.png";

/***/ }),

/***/ "./src/pics/yakiniku.jpg":
/*!*******************************!*\
  !*** ./src/pics/yakiniku.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75ef5ab24d49316e1ad4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menus.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSjtBQUNMO0FBQ0o7QUFDc0I7QUFDZjtBQUNBO0FBQ1k7QUFDZjtBQUNKO0FBQ0E7QUFDTTs7O0FBR3BDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhDQUFPO0FBQzlDLHVDQUF1Qyw4Q0FBTztBQUM5Qyx1Q0FBdUMsNENBQUs7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNENBQUs7QUFDdkMsa0NBQWtDLGdEQUFRO0FBQzFDLGtDQUFrQyxnREFBUTtBQUMxQyxrQ0FBa0MsNkNBQUs7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFRO0FBQzVDLG9DQUFvQyx3REFBZTtBQUNuRCxvQ0FBb0Msc0RBQWM7QUFDbEQ7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixxREFBUztBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLGlEQUFTO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZXZBcnJvdyBmcm9tICcuL3BpY3MvcHJldmlvdXMtYXJyb3cucG5nJztcbmltcG9ydCBOZXh0QXJyb3cgZnJvbSAnLi9waWNzL25leHQtYXJyb3cucG5nJztcbmltcG9ydCBvbmlnaXJpIGZyb20gJy4vcGljcy9vbmlnaXJpLmpwZyc7XG5pbXBvcnQgZ3lvemEgZnJvbSAnLi9waWNzL2d5b3phLnBuZyc7XG5pbXBvcnQgamFwYW5lc2VQYXJmYWl0IGZyb20gJy4vcGljcy9qYXBhbmVzZS1wYXJmYWl0LmpwZWcnO1xuaW1wb3J0IGthdHN1ZG9uIGZyb20gJy4vcGljcy9rYXRzdWRvbi5qcGVnJztcbmltcG9ydCBtZWxvblBhbiBmcm9tICcuL3BpY3MvbWVsb24tcGFuLmpwZyc7XG5pbXBvcnQgbWl0YXJhc2hpRGFuZ28gZnJvbSAnLi9waWNzL21pdGFyYXNoaS1kYW5nby5wbmcnO1xuaW1wb3J0IG5pa3VtYW4gZnJvbSAnLi9waWNzL25pa3VtYW4uanBnJztcbmltcG9ydCByYW1lbiBmcm9tICcuL3BpY3MvcmFtZW4uanBnJztcbmltcG9ydCBzdXNoaSBmcm9tICcuL3BpY3Mvc3VzaGkucG5nJztcbmltcG9ydCB5YWtpbmlrdSBmcm9tICcuL3BpY3MveWFraW5pa3UuanBnJztcblxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcIm1lbnVcIjtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KVxuXG5cblxuICAgIGZ1bmN0aW9uIGFkZEZvb2Qoc3JjLCBuYW1lLCB0ZXh0KXtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2FyZC5jbGFzc05hbWU9XCJjYXJkXCI7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoY29udGV4dCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgICAgIHJldHVybiBjYXJkXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEFwcGV0aXplcnNTZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBldGl6ZXJzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJBcHBldGl6ZXJzXCI7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBhcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFkZEZvb2Qob25pZ2lyaSwgXCJPbmlnaXJpXCIsIFwiT25pZ2lyaSBpcyBhIHdoaXRlIHJpY2UgYmFsbCBzaGFwZWQgaW50byBhIHRyaWFuZ2xlLiBPbmlnaXJpIGFyZSBvZnRlbiBmaWxsZWQgd2l0aCB2ZWdldGFibGVzIG9yIG1lYXQgYW5kIGl0IGlzIHdyYXBwZWQgaW4gbm9yaSBzZWF3ZWVkLiBBbHRob3VnaCBpdCByZXNlbWJsZXMgc3VzaGksIG9uaWdpcmkgZG9lc24ndCB1c2UgcmF3IGZpc2guXCIpKTtcbiAgICAgICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhZGRGb29kKG5pa3VtYW4sIFwiTmlrdW1hblwiLCBcIk5pa3VtYW4gaXMgYSBKYXBhbmVzZSBzdGVhbWVkIGZsdWZmeSBidW4gZmlsbGVkIHdpdGggbWluY2VkIHBvcmsuIFRoZXkgYXJlIHN0ZWFtZWQgaW4gYSBiYW1ib28gc3RlYW1lciBhbmQgYXJlIHNlcnZlZCBob3QuIE5pa3VtYW4gaXMgdGhlIHBlcmZlY3Qgb24tdGhlLWdvIHNhdm9yeSBzbmFjayBhbmQgY29tZm9ydCBmb29kIGZvciB0aG9zZSBjb2xkZXIgbmlnaHRzLlwiKSk7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYWRkRm9vZChneW96YSwgXCJHeW96YVwiLCBcIk9yaWdpbmF0aW5nIGZyb20gQ2hpbmEsIHRoaXMgZHVtcGxpbmctaW5zcGlyZWQgZGlzaCBpcyBhIHRoaW4gZG91Z2ggZmlsbGVkIHdpdGggbWVhdCBsaWtlIHBvcmsgb3IgdmVnZ2llcyAoY2FiYmFnZSwgZ3JlZW4gb25pb25zLCBnYXJsaWMsIGFuZCBnaW5nZXIpIGFuZCBzZXJ2ZWQgd2l0aCBzb3kgc2F1Y2UuIEd5b3phIG9mdGVuIGdldHMgc2VydmVkIGFsb25nc2lkZSBhIGJvd2wgb2YgcmFtZW4gb3IgYmVmb3JlaGFuZCBhcyBhbiBhcHBldGl6ZXJcIikpO1xuXG4gICAgICAgIHJldHVybiBhcHBldGl6ZXJzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1lYWxzU2VjdGlvbigpe1xuICAgICAgICBjb25zdCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lYWxzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIk1lYWxzXCI7XG4gICAgICAgIG1lYWxzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChyYW1lbiwgXCJSYW1lblwiLCBcIlRoZSBtb3N0IGNvbW1vbiBhbmQgaWNvbmljIGZvb2Qgc2VlbiBpbiBhbmltZSBpcyB0aGUgYm93bCBvZiByYW1lbi4gSXQncyBhIGZhdm9yaXRlIGRpc2ggZm9yIG1hbnkgcG9wdWxhciBjaGFyYWN0ZXJzIGxpa2UgTmFydXRvLCB3aG8gbG92ZXMgZWF0aW5nIG1pc28gY2hhc2h1IHJhbWVuIGF0IEljaGlyYWt1IFJhbWVuLiBSYW1lbiBpcyBhbHNvIGVhdGVuIGJ5IEdva3UgYW5kIEJlZXJ1cyBmcm9tIERyYWdvbiBCYWxsLiBTZW5rdSBmcm9tIERyLiBTdG9uZSBsb3ZlcyBpdCBzbyBtdWNoLCB0aGF0IGhlIGV2ZW4gbWFuYWdlZCB0byAnaW52ZW50JyBpdCBpbiB0aGUgc3RvbmUgYWdlLlwiKSk7XG4gICAgICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEZvb2QoeWFraW5pa3UsIFwiWWFraW5pa3VcIiwgXCJZYWtpbmlrdSBpcyBhIHN0eWxlIG9mIGNvb2tpbmcgYml0ZS1zaXplIG1lYXQgYW5kIHZlZ2V0YWJsZXMgb3ZlciBhIGZsYW1lIG9mIHdvb2QgY2hhcmNvYWxzLiBJbiBpdHMgYnJvYWRlc3Qgc2Vuc2UsIHJlZmVycyB0byBncmlsbGVkIG1lYXQgY3Vpc2luZS5cIikpO1xuICAgICAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRGb29kKGthdHN1ZG9uLCBcIkthdHN1ZG9uXCIsIFwiS2F0c3Vkb24gaXMgYSBKYXBhbmVzZSBwb3JrIGN1dGxldCByaWNlIGJvd2wuIFRoZSBwb3JrIGlzIGJyZWFkZWQgYW5kIGZyaWVkIGJlZm9yZSBiZWluZyBsYXllcmVkIG9uIHRvcCBvZiBhbiBlZ2cgb21lbGV0LCByaWNlLCBhbmQgc2F1dGVlZCBvbmlvbnMuXCIpKTtcbiAgICAgICAgbWVhbHMuYXBwZW5kQ2hpbGQoYWRkRm9vZChzdXNoaSwgXCJTdXNoaVwiLCBcIlRoaXMgYml0ZS1zaXplZCBkZWxpY2FjeSBmZWF0dXJlcyBzZWFzb25lZCByaWNlIHRvcHBlZCB3aXRoIHZhcmlvdXMgdHlwZXMgb2Ygc2VhZm9vZCwgdmVnZXRhYmxlcywgYW5kIG90aGVyIGluZ3JlZGllbnRzLiBXaGV0aGVyIHNlcnZlZCBhcyBuaWdpcmksIG1ha2kgcm9sbHMsIG9yIHNhc2hpbWksIHN1c2hpIGhhcyBiZWNvbWUgYSBnbG9iYWwgc2Vuc2F0aW9uIHRoYXQgY2FwdHVyZXMgdGhlIGVzc2VuY2Ugb2YgSmFwYW5lc2UgY3Vpc2luZS5cIikpO1xuXG4gICAgICAgIHJldHVybiBtZWFsc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZERlc2VydHNTZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRlc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNlcnRzLmNsYXNzTmFtZSA9IFwic2VjdGlvblwiO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJEZXNlcnRzXCI7XG4gICAgICAgIGRlc2VydHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QobWVsb25QYW4sXCJNZWxvbiBQYW5cIiwgXCJTd2VldCwgc29mdCwgYW5kIGZsdWZmeSBKYXBhbmVzZSBicmVhZCB3aXRoIGEgcGF0dGVybmVkIGdyaWQgb24gaXRzIHN1Z2FyIGNvb2tpZSBjcnVzdC5cIikpO1xuICAgICAgICBkZXNlcnRzLmFwcGVuZENoaWxkKGFkZEZvb2QoamFwYW5lc2VQYXJmYWl0LCBcIkphcGFuZXNlIFBhcmZhaXRcIiwgXCJKYXBhbmVzZSBwYXJmYWl0IGlzIGEgcG9wdWxhciBqYXBhbmVzZSBkZXNlcnQgd2l0aCBpY2UgY3JlYW0sIG1vY2hpLCByZWQgYmVhbnMsIGNvcm5mbGFrZXMsIGZydWl0cywgYW5kIG90aGVyIHRvcHBpbmdzIGxpa2UgcG9ja3ksIHRob3VnaCBvdGhlciBvcHRpb25zIGFyZSBhdmFpbGFibGUuXCIpKTtcbiAgICAgICAgZGVzZXJ0cy5hcHBlbmRDaGlsZChhZGRGb29kKG1pdGFyYXNoaURhbmdvLCBcIk1pdGFyYXNoaSBEYW5nb1wiLCBcIkRhbmdvIGlzIGEgZGlzaCB0aGF0IGJhc2ljYWxseSBjb25zaXN0cyBvZiA0IHRvIDUgYmFsbHMgb2YgcmljZSBmbG91ciBkdW1wbGluZ3MgY292ZXJlZCB3aXRoIHNveSBzYXVjZSBnbGF6ZSBhZnRlciBiZWluZyBncmlsbGVkLiBEYW5nbyBiYWxscyBhcmUgc2tld2VkIG9uIGEgYmFtYm9vIHN0aWNrIGFuZCBpdCBpcyBtb3N0bHkgZWF0ZW4gZHVyaW5nIHNwcmluZ3RpbWUuIFRoZSBkZWxpY2lvdXMsIHN3ZWV0LCBhbmQgY2hld3kgc25hY2sgaXMgb2Z0ZW4gcGFpcmVkIHdpdGggdGVhIG9yIGVhdGVuIGFzIGEgZGVzc2VydC5cIikpXG4gICAgICAgIHJldHVybiBkZXNlcnRzO1xuICAgIH1cblxuXG5cbiAgICBsZXQgc2VjdGlvbkluZGV4ID0gMDtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpXG5cbiAgICBjb25zdCBhcnJvd3MgPSAoZnVuY3Rpb24gYWRkQXJyb3dzKCl7XG4gICAgICAgIGNvbnN0IHByZXZBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwcmV2QXJyb3cuc3JjID0gUHJldkFycm93O1xuICAgICAgICBwcmV2QXJyb3cuY2xhc3NOYW1lID0gXCJhcnJvd1wiO1xuICAgICAgICBjb25zdCBuZXh0QXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV4dEFycm93LnNyYyA9IE5leHRBcnJvdztcbiAgICAgICAgbmV4dEFycm93LmNsYXNzTmFtZSA9IFwiYXJyb3dcIjtcbiAgICAgICAgXG5cbiAgICAgICAgcHJldkFycm93LnN0eWxlPVwiY3Vyc29yOiBub3QtYWxsb3dlZFwiXG4gICAgICAgIHByZXZBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBpZihzZWN0aW9uSW5kZXghPT0wKXtcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvblwiKSk7XG4gICAgICAgICAgICAgICAgbmV4dEFycm93LnN0eWxlID0gXCJjdXJzb3I6IGFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleC0tO1xuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleD09PTEpe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZE1lYWxzU2VjdGlvbigpKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlY3Rpb25JbmRleD09PTApe1xuICAgICAgICAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZEFwcGV0aXplcnNTZWN0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUgPSBcImN1cnNvcjogbm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCE9PTIpe1xuICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpKVxuICAgICAgICAgICAgICAgIHByZXZBcnJvdy5zdHlsZSA9IFwiY3Vyc29yOiBhbGxvd2VkXCJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uSW5kZXg9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGRNZWFsc1NlY3Rpb24oKSlcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWN0aW9uSW5kZXg9PT0yKXtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGREZXNlcnRzU2VjdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbkluZGV4PT09Mil7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlPVwiY3Vyc29yOm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3ByZXZBcnJvdywgbmV4dEFycm93fVxuICAgIH0pKCk7XG4gICAgY29uc3QgYXJyb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFycm93RGl2LmNsYXNzTmFtZSA9IFwiYXJyb3ctZGl2XCI7XG4gICAgYXJyb3dEaXYuYXBwZW5kQ2hpbGQoYXJyb3dzLnByZXZBcnJvdyk7XG4gICAgYXJyb3dEaXYuYXBwZW5kQ2hpbGQoYXJyb3dzLm5leHRBcnJvdyk7XG5cbiAgICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlZGl0cy5pbm5lclRleHQgPSBcIkFycm93IGJ1dHRvbnMgdGFrZW4gZnJvbSBiYW5uZXIyLmNsZWFucG5nLmNvbVxcbkZvb2QgZXhwbGFuYXRpb25zIHRha2VuIGZyb20gZ2FtZXJhbnQuY29tXCI7XG4gICAgY3JlZGl0cy5jbGFzc05hbWUgPSBcImNyZWRpdHNcIjtcbiAgICAgICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVkaXRzKVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYXJyb3dEaXYpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9