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
    scrollpos = (e.scrollPos - 70)*(200/window.innerHeight);
    scrollpos2 = (e.scrollPos - 70)*(20/window.innerHeight);
    scrollpos3 = (e.scrollPos - 70 - (window.innerHeight*0.32))*(400/window.innerHeight)+6.4;
    console.log(e.scrollPos-70, scrollpos, scrollpos2, scrollpos3, window.innerHeight);
    
    if (scrollpos2 >= 1 && scrollpos <= 64){
        heroText.style.transform = "matrix(" + scrollpos2 + ", 0, 0, " + scrollpos2 + ", 0, 0)";
    } else if (scrollpos > 64){
        heroText.style.transform = "matrix(" + scrollpos3 + ", 0, 0, " + scrollpos3 + ", 0, 0)";
    } else {
        heroText.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    }
})

//intro
const sceneTitle = new ScrollMagic.Scene({
    triggerElement: titleBox,
    duration: "100%",
    triggerHook: 0
})
    //.addIndicators()
    .setPin(titleBox)
    .addTo(controller);

addEventListener('scroll',()=>{
    const scrollPos = window.scrollY - 70 - heroBox.scrollHeight - heroBox.scrollHeight;
    const maxScrollPos = window.innerHeight;
    const redScrollFraction = 24 / maxScrollPos;
    const greenScrollFraction = -57 / maxScrollPos;
    const blueScrollFraction = -179 / maxScrollPos;
    const [red, green, blue] = [204, 204, 204];
    if (scrollPos > 0){
        const color2 = `rgb(${Math.round(red + scrollPos * redScrollFraction)}, 
    ${Math.round(green + scrollPos * greenScrollFraction)}, ${Math.round(blue + scrollPos * blueScrollFraction)})`;
    titleText.style.color = color2;
    //console.log(color2);
    }
})