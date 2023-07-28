const title = document.getElementById('title');
const titleBox = document.getElementById('titleBox');

const videoBox1 = document.getElementById('videoBox1');
const v1 = document.getElementById('v1');
const text1 = document.getElementById('text1');
const videoBox2 = document.getElementById('videoBox2');
const v2 = document.getElementById('v2');
const text2 = document.getElementById('text2');
const videoBox3 = document.getElementById('videoBox3');
const v3 = document.getElementById('v3');
const text3 = document.getElementById('text3');

const controller = new ScrollMagic.Controller();

//Title
const sceneTitle = new ScrollMagic.Scene({
    triggerElement: titleBox,
    duration: "100%",
    triggerHook: 0
})
    //.addIndicators()
    .setPin(titleBox)
    .addTo(controller);

sceneTitle.on('update', e=>{
    //console.log(e.scrollPos / 1000 *2);
    title.style.opacity = (e.scrollPos- 70) / window.innerHeight;
    //title.style.fontSize = title.style.fontSize + (e.scrollPos / 1000 *2) *10;
    //console.log(title.style.fontSize);
    //console.log(titleBox.offsetHeight);
})


//Video 1
const scene1 = new ScrollMagic.Scene({
    triggerElement: videoBox1,
    duration: 2000,
    triggerHook: 0
})
    //.addIndicators()
    .setPin(videoBox1)
    .addTo(controller);


let accelamount = 0.1;
let scrollpos1 = 0;
let delay = 0;

scene1.on('update', e=>{
    scrollpos1 = (e.scrollPos - 70 - window.innerHeight - window.innerHeight) / window.innerHeight;
    //console.log(e.scrollPos- 70, window.innerHeight, scrollpos1);
    //scrollpos1 = (e.scrollPos-890);
});

setInterval(() =>{
    delay += (scrollpos1 - delay) * accelamount;
    //console.log(scrollpos1);
    //console.log(videoBox1.offsetHeight);
    v1.currentTime = delay;
}, 33.3);

//Text 1
const sceneText1 = new ScrollMagic.Scene({
    triggerElement: videoBox1,
    duration: "80%",
    triggerHook: 0.5
})
    //.addIndicators()
    .addTo(controller);

sceneText1.on('update', e=>{
    //console.log(e.scrollPos-70, scrollpos1);
    text1.style.opacity = (e.scrollPos - 70 - window.innerHeight - (window.innerHeight / 2)) / window.innerHeight;
})

//Video 2
const scene2 = new ScrollMagic.Scene({
    triggerElement: videoBox2,
    duration: 2500,
    triggerHook: 0
})
    //.addIndicators()
    .setPin(videoBox2)
    .addTo(controller);

let scrollpos2 = 0;
let delay2 = 0;
scene2.on('update', e=>{
    scrollpos2 = (e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight) / window.innerHeight;
    //console.log((e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight) / window.innerHeight);
});

setInterval(() =>{
    delay2 += (scrollpos2 - delay2) * accelamount;
    //console.log(scrollpos2);
    v2.currentTime = delay2;
}, 33.3);

//Text 2
const sceneText2 = new ScrollMagic.Scene({
    triggerElement: videoBox2,
    duration: "80%",
    triggerHook: 0.5
})
    //.addIndicators()
    .addTo(controller);

sceneText2.on('update', e=>{
    //console.log(e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - (window.innerHeight / 2));
    text2.style.opacity = (e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - (window.innerHeight / 2)) / window.innerHeight;
})

//Video 3
const scene3 = new ScrollMagic.Scene({
    triggerElement: videoBox3,
    duration: 5500,
    triggerHook: 0
})
    .addIndicators()
    .setPin(videoBox3)
    .addTo(controller);

let scrollpos3 = 0;
let delay3 = 0;
scene3.on('update', e=>{
    scrollpos3 = (e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight - 2500 - window.innerHeight) / window.innerHeight;
    //console.log(e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight - 2500 - window.innerHeight);
});

setInterval(() =>{
    delay3 += (scrollpos3 - delay3) * accelamount;
    //console.log(scrollpos3);
    v3.currentTime = delay3;
}, 33.3);

//Text 2
const sceneText3 = new ScrollMagic.Scene({
    triggerElement: videoBox3,
    duration: "80%",
    triggerHook: 0.5
})
    .addIndicators()
    .addTo(controller);

sceneText3.on('update', e=>{
    console.log(e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight - 2500 - (window.innerHeight / 2));
    text3.style.opacity = (e.scrollPos - 70 - window.innerHeight - window.innerHeight - 2000 - window.innerHeight - 2500 - (window.innerHeight / 2)) / window.innerHeight;
})
