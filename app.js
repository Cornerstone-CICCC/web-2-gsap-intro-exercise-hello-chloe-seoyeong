// PUT YOUR CODE HERE
const timeline = gsap.timeline();

timeline
  .from(".red", {scale: 0, transformOrigin: "left top", duration: .5})
  .from(".green", {scale: 0, transformOrigin: "right top", duration: .5})
  .from(".blue", {scale: 0, transformOrigin: "right bottom", duration: .5})
  .from(".yellow", {scale: 0, transformOrigin: "left bottom", duration: .5})
  .to(".box", {borderRadius: "50%", duration: 1})
  .to(".red", {left: "100vw", x: "-100%", backgroundColor: "green", duration: 1}, "<")
  .to(".green", {top: "100vh", y: "-100%", backgroundColor: "blue", duration: 1}, "<")
  .to(".blue", {right: "100vw", x: "100%", backgroundColor: "yellow", duration: 1}, "<")
  .to(".yellow", {bottom: "100vh", y: "100%", backgroundColor: "red", duration: 1}, "<")
  .to(".red", {x: "+=100%", duration: 1})
  .to(".green", {x: "+=100%", duration: 1}, "<")
  .to(".blue", {x: "-=100%", duration: 1}, "<")
  .to(".yellow", {x: "-=100%", duration: 1}, "<");
