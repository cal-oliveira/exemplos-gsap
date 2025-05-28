/* gsap.from(".box", {
  x: 300, // Move 300px no eixo X
  duration: 2, // Dura 2 segundos
  ease: "power1.out", // Tipo de aceleração
});
 */

/* gsap.fromTo(
  ".box",
  { x: 0, opacity: 0 },
  { x: 300, opacity: 1, height: 300, width: 300, rotate: "180deg", duration: 3 }
); */

/* Timeline */

const timeline = gsap.timeline({ repeat: 3, yoyo: true });

timeline
  .to(".box", { x: 200, duration: 1 }) //Move
  .to(".box", { rotation: 360, duration: 1 }) //Gira
  .to(".box", { scale: 1.5, duration: 1 }) //Aumenta
  .to(".box", { opacity: 0, duration: 1 });

/* ScrollTrigger */

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bloco", //Marca o bloco como gatilho
    start: "top 80%", //Quando o topo do bloco chega a 80% da tela
    end: "top 30%", //Quando o topo do bloco chega a 30% da tela
    scrub: true, //Sincroniza com o scroll
    markers: false, //Mostra marcadores (ótimo para testes)
  },
});

tl.to(".bloco", {
  opacity: 1,
  y: -50,
  scale: 1.2,
  duration: 2,
  background: "blue",
  rotate: 360,
});

/* Exercicio com gatilhos */

const bloco1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

bloco1.to(".box1", {
  opacity: 1,
  rotate: 720,
  duration: 3,
});

const bloco2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box2",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

bloco2.to(".box2", {
  opacity: 1,
  x: 500,
});

const bloco3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box3",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

bloco3.to(".box3", {
  opacity: 1,
  background: "orange",
});
