const heroText = document.getElementById('hero-text');
const heroBox = document.getElementById('hero-box');
const titleText = document.getElementById('title-text');
const titleBox = document.getElementById('title-box');

const controller = new ScrollMagic.Controller();

//Title
const sceneHero = new ScrollMagic.Scene({
    triggerElement: heroBox,
    duration: "100%",
    triggerHook: 0
})
    .addIndicators()
    .setPin(heroBox)
    .addTo(controller);

sceneHero.on('update', e=>{
    console.log((e.scrollPos - 70)*(1000/window.innerHeight));
    heroText.style.fontSize = (e.scrollPos - 70)*(1000/window.innerHeight);
})
