gsap.registerPlugin(ScrollTrigger)

gsap.from('.mb', {
    y: 400,
    opacity: 0,
    duration: 4,
    ease: "power4.out",
    stagger: .15,
    scrolltrigger: {
        trigger: ".container-flex",
        start: "top 80%",
        markers: false,
        scrub: true,
    }
});

gsap.from('.paragraph', {
    xPercent: -100,
    opacity: 0,
    duration: 5,
   ease: "power4.out",
});       

gsap.from('', {
    scale: 100,
    duration: 1,
    ease: "power4.out",

});