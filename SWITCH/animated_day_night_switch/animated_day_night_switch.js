const sphere = document.querySelector(".sphere");

let background = document.querySelector(".background");
let stars = document.querySelector(".star");
let cloud = document.querySelector(".cloud");
let sphereBackground = document.querySelector(".sphereBackground");
let luna = document.querySelector(".luna");

sphere.addEventListener("click", (event) => {
  background.classList.toggle("black");
  stars.classList.toggle("newstar");
  cloud.classList.toggle("below");
  sphereBackground.classList.toggle("right");
  luna.classList.toggle("center");
});
