document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  console.log(hamburger);
  console.log(menu);
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
