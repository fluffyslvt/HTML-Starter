"use strict";

// Options
const startBtnEl = document.querySelector("#start-btn");
const resetBtnEl = document.querySelector("#reset-btn");
const numberEl = document.querySelector(".interval-amount");
const objectLimitEl = document.querySelector(".objects-amount");
const scoreEl = document.querySelector(".score");
// Game Wrapper
const gameWrapperEl = document.querySelector(".game-wrapper");
// Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let [score, samAmount, xIndex, yIndex] = [0, 0, 0, 0];
let gameTime;

resetBtnEl.addEventListener("click", function () {
  window.location.reload();
});

const startGame = function () {
  if (samAmount < objectLimitEl.value) {
    xIndex = Math.floor(Math.random() * 70);
    yIndex = Math.floor(Math.random() * 45);

    // sam.setAttribute("src", "imgs/jetstream.png");
    let sam = document.createElement("img");

    sam.src = "imgs/jetstream.png";
    sam.classList.add("sam");
    sam.style.left = `${xIndex}rem`;
    sam.style.top = `${yIndex}rem`;
    console.log(xIndex, yIndex);
    gameWrapperEl.appendChild(sam);

    samAmount++;

    sam.addEventListener("click", function () {
      sam.remove();
      scoreEl.value = ++score;
      samAmount--;
    });
  } else {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    clearInterval(gameTime);
  }
};

startBtnEl.addEventListener("click", function () {
  alert("LET'S DANCE");
  gameTime = setInterval(startGame, numberEl.value);
});

// Close Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
