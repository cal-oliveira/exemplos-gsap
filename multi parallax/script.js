gsap.registerPlugin(ScrollTrigger);

// Repetir a animação para cada painel
document.querySelectorAll(".painel").forEach((painel, index) => {
  const titulo = painel.querySelector(".titulo");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: painel,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true, // fixa a seção
      },
    })
    .to(titulo, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
});

// Repetir a animação para cada paragrafo
document.querySelectorAll(".painel").forEach((text, index) => {
  const paragrafo = text.querySelector(".paragrafo");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: text,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true, // fixa a seção
      },
    })
    .to(paragrafo, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
});
