document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close-menu");

  console.log(hamburger);
  console.log(menu);
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.style.display = "none";
    close.style.display = "block";
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
    close.style.display = "none";
    hamburger.style.display = "";
  });
});
