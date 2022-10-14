"use strict";

let passwordGuess;

while (passwordGuess !== "zaliczenie") {
  passwordGuess = prompt("Wprowadź hasło", "zaliczenie");
}

// Menu
document.querySelector(".nav-header").style.display = "none";

document.querySelector(".nav-btn").addEventListener("click", function () {
  document.querySelector(".nav-header").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".nav-header").style.display = "none";
});

// ///////
// Zadania
const viewContent = document.querySelector(".view-content");

// Wyświetlanie liczb od 1 do 1000
document.querySelector(".odd-nums").addEventListener("click", function () {
  viewContent.style.fontSize = "1.2rem";
  let oddNumbers = [];

  for (let i = 1; i <= 1000; i += 2) {
    oddNumbers.push(i, " ");
  }

  viewContent.textContent = oddNumbers;
});

// Kalkulator
document.querySelector(".calculator").addEventListener("click", function () {
  viewContent.style.fontSize = "4.5rem";
  const num1 = parseFloat(prompt("Podaj pierwszą liczbę"));
  const num2 = parseFloat(prompt("Podaj drugą liczbę"));
  const calcChar = prompt("Podaj znak działania[+, -, *, /]");

  switch (calcChar) {
    case "+":
      viewContent.textContent = `Suma: ${num1 + num2}`;
      break;
    case "-":
      viewContent.textContent = `Różnica: ${num1 - num2}`;
      break;
    case "*":
      viewContent.textContent = `Iloczyn: ${num1 * num2}`;
      break;
    case "/":
      viewContent.textContent =
        num2 > 0 ? `Iloraz: ${num1 / num2}` : "Nie dziel przez zero";
      break;
    default:
      viewContent.textContent = "Błąd";
  }
});

// Pola i Obwody
document.querySelector(".figures").addEventListener("click", function () {
  viewContent.style.fontSize = "4.5rem";
  let a, b, c, h;
  const figure = prompt(
    "Wybierz figurę płaską: \n 1. Kwadrat \n 2. Prostokąt \n 3. Trójkąt [prostokątny] \n 4. Trapez [równoramienny] \n 5. Romb"
  );

  switch (figure) {
    case "1":
      a = parseFloat(prompt("Podaj bok tego kwadratu"));
      viewContent.textContent = `Pole: ${a * a}, Obwód: ${a * 4}`;
      break;
    case "2":
      a = parseFloat(prompt("Podaj pierwszy bok tego prostokąta"));
      b = parseFloat(prompt("Podaj drugi bok tego prostokąta"));
      viewContent.textContent = `Pole: ${a * b}, Obwód: ${2 * a + 2 * b}`;
      break;
    case "3":
      a = parseFloat(prompt("Podaj pierwszy bok tego trójkąta"));
      b = parseFloat(prompt("Podaj drugi bok tego trójkąta"));
      h = parseFloat(prompt("Podaj wysokość tego trójkąta"));
      viewContent.textContent = `Pole: ${(a * h) / 2}, Obwód: ${a + b + h}`;
      break;
    case "4":
      a = parseFloat(prompt("Podaj pierwszy bok tego trapezu"));
      b = parseFloat(prompt("Podaj drugi bok tego trapezu"));
      c = parseFloat(prompt("Podaj trzeci / czwarty bok tego trapezu"));
      h = parseFloat(prompt("Podaj wysokość tego trapezu"));
      console.log(a, b, c, h);
      viewContent.textContent = `
      Pole: ${((a + b) * h) / 2}, Obwód: ${a + b + 2 * c}`;
      break;
    case "5":
      a = parseFloat(prompt("Podaj bok tego rombu"));
      h = parseFloat(prompt("Podaj wysokość tego rombu"));
      viewContent.textContent = `Pole: ${a * h}, Obwód: ${a * 4}`;
      break;
  }
});
