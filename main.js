const scroll = new SmoothScroll('a[href*="#"]', {
speed: 2000
});

window.sr = ScrollReveal();
sr.reveal('.left-box', { reset: false }, { delay: 1000 });
sr.reveal('.right-box', { reset: false }, { delay: 1000 });
