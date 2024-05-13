const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navIconEl = document.querySelector(".nav__icon");
const navBgOverlayEl = document.querySelector(".nav__bgOverlay");

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";
});

const navOpen = () => {
  navList.classList.add("show");
  navBgOverlayEl.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width:100vw; overflow:hidden;";
};

const navClose = () => {
  navList.classList.remove("show");
  navBgOverlayEl.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};

navIconEl.addEventListener("click", navOpen);

navCloseEl.addEventListener("click", navClose);

navBgOverlayEl.addEventListener("click", navClose);

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrowBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.id === "left") {
      carousel.scrollLeft -= firstCardWidth;
    } else {
      carousel.scrollLeft += firstCardWidth;
    }
  });
});