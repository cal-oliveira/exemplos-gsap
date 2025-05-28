gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".bloco").forEach((bloco, i) => {
  gsap.fromTo(
    bloco,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: bloco,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true
      },
    }
  );
});

// Fixar o produto enquanto a rolagem acontece
ScrollTrigger.create({
  trigger: ".container",
  start: "top top",
  end: "bottom bottom",
  pin: ".produto",
  // markers: true
});
