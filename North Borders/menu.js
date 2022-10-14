"use strict";

document.querySelector(".nav-header").style.display = "none";

document.querySelector(".nav-btn").addEventListener("click", function () {
  document.querySelector(".nav-header").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".nav-header").style.display = "none";
});
