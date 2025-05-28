gsap.registerPlugin(ScrollTrigger);

gsap.to(".fundo", {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".title", {
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".title",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".detalhe", {
  y: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});
