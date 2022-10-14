"use strict";

const scrollBtnEl = document.querySelector(".scroll-wrapper");
const scrollImgEl = document.querySelector(".scroll-img");

scrollBtnEl.addEventListener("mouseover", function () {
  scrollImgEl.src = "icons/down-arrow-hover.svg";
});

scrollBtnEl.addEventListener("mouseleave", function () {
  scrollImgEl.src = "icons/down-arrow.svg";
});
