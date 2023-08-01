/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   2023
Library / Component: Script file
Description: Virtual Keyboard
(c) Copyright by BRS with Nyros. 
**/

// DOM Elements
const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn = document.getElementById("delete");
const shiftBtn = document.getElementById("shift");
const spaceBtn = document.getElementById("space");

// Default theme
let chathams_blue = "#1A4B84";

// Init char array
let chars = [];

// for each to get the key press
keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

// delete button event
deleteBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

// spacebar button event
spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

// shift button event 
shiftBtn.addEventListener("click", () => {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

// Change Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
