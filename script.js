const someText = document.querySelector(".some-text");
const blank = document.querySelector(".blank");
const navBar = document.querySelector(".navbar");

gsap.from(someText, {
  y: -100,
  autoAlpha: 0,
  duration: 1,
  delay: 0.5,
  ease: "linear",
});

gsap.from(blank, {
  y: -100,
  autoAlpha: 0,
  delay: 0.5,
  duration: 1,
  ease: "linear",
});

gsap.from(navBar, { autoAlpha: 0, duration: 1, ease: "linear" });
