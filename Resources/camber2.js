const camber711 = document.getElementById("camber711");
const camber794 = document.getElementById("camber794");
const intro = document.querySelector('.content1');
const text1 = intro.querySelector('.content2');
const end = text1.querySelector('p');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addIndicators()
    .addTo(controller);


//Video
let accelamount = 0.1;
let scrollpos = 0;
let videoHeight = 4500;
let screenHeight = 1000;

scene.on("update", e => {
    scrollpos = e.scrollPos;

    console.log(scrollpos);

    if (scrollpos > 0 && scrollpos <= videoHeight) {
        camber711.currentTime = scrollpos % videoHeight / 100;
    }

    if (scrollpos > videoHeight + screenHeight && scrollpos <= videoHeight * 2 + screenHeight) {
        camber794.currentTime = scrollpos % videoHeight / 100;
    }
})

setInterval(() => {
    console.log(scrollpos);
    camber711.currentTime = scrollpos;
})