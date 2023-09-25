/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Rocket Launch
(c) Copyright by BRS with Nyros. 
**/

// DOM ELEMENTS
let countDownElement = document.getElementById("countdown");
let nervousTxtElement = document.getElementById("nervous");
let cantwaitTxtElement = document.getElementById("cant-wait");

let timer = null;
let countdownNumber = 10;

let changeState = function (state) {
  document.body.className = "body-state" + state;
  clearInterval(timer);
  countdownNumber = 10;
  countDownElement.innerHTML = countdownNumber;

  // countdown
  if (state == 2) {
    timer = setInterval(function () {
      countdownNumber = countdownNumber - 1;
      countDownElement.innerHTML = countdownNumber;

      if (countdownNumber > 4 && countdownNumber <= 7) {
        nervousTxtElement.className = "nervous show";
      } else {
        nervousTxtElement.className = "nervous";
      }

      if (countdownNumber > 1 && countdownNumber <= 4) {
        cantwaitTxtElement.className = "cant-wait show";
      } else {
        cantwaitTxtElement.className = "cant-wait";
      }

      if (countdownNumber <= 0) {
        changeState(3);
      }
    }, 500);
  } else if (state == 3) {
    let success = setTimeout(function () {
      let randomNumber = Math.round(Math.random() * 10);

      console.log("randomNumber:", randomNumber);

      // succes
      if (randomNumber > 2) {
        changeState(4);
      } else {
        changeState(5);
      }
    }, 2000);
  }
};

let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
