const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// End Section
const section = document.querySelector('section');
const end = section.querySelector('p');

//scrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

//Video
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    video.currentTime = scrollpos;
});

// setInterval(() => {
//     delay += (scrollpos - delay) * accelamount;
//     video.currentTime = delay;
// }, 33.3);

