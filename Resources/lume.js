const heroText = document.getElementById('hero-text');
const heroBox = document.getElementById('hero-box');
const titleText = document.getElementById('title-text');
const titleBox = document.getElementById('title-box');
const lumeOutdoorBox = document.getElementById('lume-outdoor-box');
const lumeOutdoorImage = document.getElementById('lume-outdoor-img');
const lumeOutdoorTitle = document.getElementById('lume-outdoor-large-title');
const lumeOutdoorText1 = document.getElementById('lume-outdoor-text-1');
const lumeOutdoorText2 = document.getElementById('lume-outdoor-text-2');
const lumeOutdoorVideo = document.getElementById('lume-outdoor-video');

const lumeHomeBox = document.getElementById('lume-home-box');
const lumeHomeImage = document.getElementById('lume-home-img');
const lumeHomeTitle = document.getElementById('lume-home-large-title');
const lumeHomeText1 = document.getElementById('lume-home-text-1');
const lumeHomeText2 = document.getElementById('lume-home-text-2');

const lumeBriefBox = document.getElementById('lume-brief-box');
const lumeBriefTextLeft = document.getElementById('lume-brief-text-left');
const lumeBriefParagraph1 = document.getElementById('lume-brief-paragraph-1');
const lumeBriefParagraph2 = document.getElementById('lume-brief-paragraph-2');

const lumeOppBox = document.getElementById('lume-opp-box');
const lumeOppTextLeft = document.getElementById('lume-opp-text-left');
const lumeOppParagraph1 = document.getElementById('lume-opp-paragraph-1');
const lumeOppParagraph2 = document.getElementById('lume-opp-paragraph-2');
const lumeOppParagraph3 = document.getElementById('lume-opp-paragraph-3');

const lumeSketchBox = document.getElementById('lume-sketch-box');
const lumeSketchParagraph1 = document.getElementById('lume-sketch-paragraph-1');
const lumeSketchParagraph2 = document.getElementById('lume-sketch-paragraph-2');
const lumeSketchParagraph3 = document.getElementById('lume-sketch-paragraph-3');
const lumeSketchImg1 = document.getElementById('lume-sketch-1');
const lumeSketchImg2 = document.getElementById('lume-sketch-2');
const lumeSketchImg3 = document.getElementById('lume-sketch-3');

const lumeProcessBox = document.getElementById('lume-process-box');
const lumeProcessImg1 = document.getElementById('lume-process-img-1');
const lumeProcessImg2 = document.getElementById('lume-process-img-2');
const lumeProcessImg3 = document.getElementById('lume-process-img-3');
const lumeProcessImg4 = document.getElementById('lume-process-img-4');

const controller = new ScrollMagic.Controller();

//Title
const sceneHero = new ScrollMagic.Scene({
    triggerElement: heroBox,
    duration: "100%",
    triggerHook: 0
})
    //.addIndicators()
    .setPin(heroBox)
    .addTo(controller);

sceneHero.on('update', e=>{
    scrollpos = (e.scrollPos - 70)*(200/window.innerHeight);
    scrollpos2 = (e.scrollPos - 70)*(20/window.innerHeight);
    scrollpos3 = (e.scrollPos - 70 - (window.innerHeight*0.32))*(400/window.innerHeight)+6.4;
    //console.log(e.scrollPos-70, scrollpos, scrollpos2, scrollpos3, window.innerHeight);
    
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

//lume outdoor
// const sceneLumeOutdoorImg = new ScrollMagic.Scene({
//     triggerElement: lumeOutdoorBox,
//     duration: "100%",
//     triggerHook: 0
// })
//     .addIndicators()
//     //.setClassToggle(lumeOutdoorImage, "lume-outdoor-left")
//     .setPin(lumeOutdoorBox)
//     sceneLumeOutdoorImg.setTween(TweenMax.to(lumeOutdoorImage), 1, {backgroundPosition:"left 10vw top 50%", backgroundColor:"#fff"})
//     .addTo(controller);
//     sceneLumeOutdoorImg.on("progress", e=>{
//         console.log(e.progress);
//     })

// const sceneLumeOutdoorTitle = new ScrollMagic.Scene({
//     triggerElement: lumeOutdoorBox,
//     duration: 2000,
//     triggerHook: 0
// })
//     .addIndicators()
//     //.setPin(lumeOutdoorBox)
//     .setClassToggle(lumeOutdoorText, "lume-outdoor-text-animation")
//     //.setClassToggle(lumeOutdoorImage, "lume-outdoor-left")
//     .addTo(controller);


//Lume Outdoor ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

let lumeOutdoortl = gsap.timeline({
    scrollTrigger: {
        trigger:lumeOutdoorBox,
        // end:()=>"+="+(lumeOutdoorBox.offsetHeight*2),
        // markers: true,
        toggleActions:"play pause reverse reset",
        scrub: 1,
        pin: lumeOutdoorBox
    }
});

lumeOutdoortl.to(lumeOutdoorImage, {
    //backgroundColor: "#eee",
    duration: 1.5,
    backgroundPosition: "left 20% top 50%"
})
.to(lumeOutdoorTitle, {
    opacity: "0"
    //left: "10%"
}, 0)
.to(lumeOutdoorBox, {
    backgroundColor: "#eee"
}, 0)
.to(lumeOutdoorText1, {
    display: "flex",
    opacity: "1",
    duration: 2,
    transform: "translateY(0vh)"
}, 0)
.to(lumeOutdoorText1, {
    transform: "translateY(-50vh)",
    display: "none",
    opacity: "0",
    duration: 2
}, 3)
// .to(lumeOutdoorVideo, {
//     setInterval(({
//         lumeOutdoorVideo.currentTime = 
//     }),33.3);
// })
.to(lumeOutdoorText2, {
    display: "flex",
    opacity: "1",
    duration: 2,
    transform: "translateY(0vh)"
})
.to(lumeOutdoorText2, {
    duration: 1
});

//Lume Home ScrollTrigger

let lumeHometl = gsap.timeline({
    scrollTrigger: {
        trigger:lumeHomeBox,
        end:()=>"+="+(lumeHomeBox.offsetHeight*2),
        markers: true,
        toggleActions:"play pause reverse reset",
        scrub: 1,
        pin: lumeHomeBox
    }
});

lumeHometl.to(lumeHomeImage, {
    //backgroundColor: "#eee",
    duration: 1.5,
    backgroundPosition: "left 20% top 50%"
})
.to(lumeHomeTitle, {
    opacity: "0"
    //left: "10%"
}, 0)
.to(lumeHomeBox, {
    backgroundColor: "#eee"
}, 0)
.to(lumeHomeText1, {
    display: "flex",
    opacity: "1",
    duration: 2,
    transform: "translateY(0vh)"
}, 0)
.to(lumeHomeText1, {
    transform: "translateY(-50vh)",
    display: "none",
    opacity: "0",
    duration: 2
}, 3)
.to(lumeHomeText2, {
    display: "flex",
    opacity: "1",
    duration: 2,
    transform: "translateY(0vh)"
})
.to(lumeHomeText2, {
    duration: 1
});



let lumeBrieftl = gsap.timeline({
    scrollTrigger: {
        trigger:lumeBriefBox,
        start: "top top",
        end:"+=350",
        markers:true,
        toggleActions:"play pause reverse reset",
        scrub: true,
        // pin: true
    }
});

lumeBrieftl.to(lumeBriefTextLeft, {
    opacity: "1"
})
.to(lumeBriefTextLeft, {
    transform: "translateY(0)"
}, 0)
.to(lumeBriefParagraph1, {
    opacity: "1",
    transform: "translateY(0)"
}, 0)
.to(lumeBriefParagraph2, {
    opacity: "1",
    transform: "translateY(0)"
});



let lumeOpptl = gsap.timeline({
    scrollTrigger: {
        trigger:lumeOppBox,
        start: "top top",
        end:"+=350",
        markers:true,
        toggleActions:"play pause reverse reset",
        scrub: true
        // pin: true
    }
});

lumeOpptl.to(lumeOppTextLeft, {
    opacity: "1",
    duration: 0.5
})
.to(lumeOppTextLeft, {
    transform: "translateY(0)"
}, 0)
.to(lumeOppParagraph1, {
    opacity: "1",
    transform: "translateY(0)"
}, 0)
.to(lumeOppParagraph2, {
    opacity: "1",
    transform: "translateY(0)"
})
.to(lumeOppParagraph3, {
    opacity: "1",
    transform: "translateY(0)"
});



let lumeSketchtl = gsap.timeline({
    scrollTrigger: {
        trigger: lumeSketchBox,
        start: "top top",
        end: "bottom top",
        markers: true,
        toggleActions:"play pause reverse reset",
        scrub: true
    }
});
lumeSketchtl.to(lumeSketchParagraph1, {
    transform: "translateY(-120px)"
})
.to(lumeSketchParagraph2, {
    transform: "translateY(-120px)"
}, 0)
.to(lumeSketchParagraph3, {
    transform: "translateY(-120px)"
}, 0)
.to(lumeSketchImg1, {
    transform: "scale(1.2)"
}, 0)
.to(lumeSketchImg2, {
    transform: "scale(1.2)"
}, 0)
.to(lumeSketchImg3, {
    transform: "scale(1.2)"
}, 0);


let lumeProcess1tl = gsap.timeline({
    scrollTrigger: {
        trigger: lumeProcessImg1,
        start: "top bottom",
        end: "+=400",
        markers: true,
        toggleActions:"play pause reverse reset",
        scrub: true
    }
});
lumeProcess1tl.to(lumeProcessImg1, {
    opacity: "1"
})
.to(lumeProcessImg2, {
    opacity: "1"
}, 0);

let lumeProcess2tl = gsap.timeline({
    scrollTrigger: {
        trigger: lumeProcessImg3,
        start: "top bottom",
        end: "+=400",
        markers: true,
        toggleActions:"play pause reverse reset",
        scrub: true
    }
});
lumeProcess2tl.to(lumeProcessImg3, {
    opacity: "1"
})
.to(lumeProcessImg4, {
    opacity: "1"
}, 0);