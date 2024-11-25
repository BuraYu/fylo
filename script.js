document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close-menu");
  const navLinks = document.querySelectorAll(".menu-element");

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

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      close.style.display = "none";
      hamburger.style.display = "";
    });
  });

  document.querySelector(".btn2").addEventListener("click", function () {
    const emailInput = document.querySelector("#email");
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.querySelector(".error-message");

    if (regex.test(email)) {
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  });
});
