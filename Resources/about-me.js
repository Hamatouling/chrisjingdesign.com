const mainCard = document.getElementById('main-card');
const education = document.getElementById('education');
const contact = document.getElementById('contact');
const passion = document.getElementById('passion');

const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: mainCard,
    duration: 10000,
    triggerHook: 0
})
    //.addIndicators()
    .setClassToggle(education, "visible")
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: mainCard,
    duration: 10000,
    triggerHook: 0
})
    //.addIndicators()
    .setClassToggle(contact, "visible")
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: contact,
    offset: contact.offsetHeight,
    duration: 10000,
    triggerHook: 0.8
})
    /.addIndicators()
    .setClassToggle(passion, "visible")
    .addTo(controller);