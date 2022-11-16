"use strict";

// function splitScroll() {
//     const controller = new ScrollMagic.Controller();
//     new ScrollMagic.Scene({
//             // duration: '200%',
//             triggerElement: '.about-title',
//             triggerHook: 0,
//         })
//         .setPin('.about-title')
//         .addIndicators()
//         .addTo(controller);
// }
// init controller
var controller = new ScrollMagic.Controller(); // create a scene

new ScrollMagic.Scene({
  duration: '200%',
  // the scne should last for a scroll distance of 100px
  // offset: 50, // start this scene after scrolling for 50px
  triggerElement: '.about-title',
  triggerHook: 0
}).setPin('.about-title') // pins the element for the the scene's duration
.addIndicators().addTo(controller); // assign the scene to the controller

splitScroll(); // var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//         triggerElement: ".redBlock"
//     })
//     .setClassToggle(".redBlock", "show")
//     .addTo(controller);

var sections = document.querySelectorAll(".about-pages");
var navLi = document.querySelectorAll("section nav>ul>li");
window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(function (li) {
    li.classList.remove("active");

    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}); // *********************
// This Code is for only the floating card in right bottom corner
// **********************

var WebCifarIcon = document.querySelector("#webCifar-icon");
var WebCifarEl = document.querySelector("#webCifar");
var close = WebCifarEl.querySelector(".close");
var youtubeLink = document.querySelector(".youtubeLink");
WebCifarIcon.addEventListener("click", function () {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", function () {
  WebCifarEl.classList.remove("active");
});
youtubeLink.setAttribute("href", "https://youtu.be/RsPWEmfOQdU");