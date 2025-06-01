gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrolltrigger: {
    trigger: ".section",
    start: "top top",
    end: "+=500",
    scrub: true,
  },
});
