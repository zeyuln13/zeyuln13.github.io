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
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: '300%', // the scne should last for a scroll distance of 100px
        // offset: 50, // start this scene after scrolling for 50px
        triggerElement: '.about-title',
        triggerHook: 0,
    })
    .setPin('.about-title') // pins the element for the the scene's duration
    // .addIndicators()
    .addTo(controller); // assign the scene to the controller

splitScroll();


// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//         triggerElement: ".redBlock"
//     })
//     .setClassToggle(".redBlock", "show")
//     .addTo(controller);