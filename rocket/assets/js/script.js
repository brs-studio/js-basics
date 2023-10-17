/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Rocket Launch
(c) Copyright by BRS with Nyros. 
**/

// DOM ELEMENTS
let countDownElement = document.getElementById("countdown");
let nervousTxtElement = document.getElementById("txt-1");
let cantwaitTxtElement = document.getElementById("txt-2");

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
        nervousTxtElement.className = "txt-1 show";
      } else {
        nervousTxtElement.className = "txt-1";
      }

      if (countdownNumber > 1 && countdownNumber <= 4) {
        cantwaitTxtElement.className = "txt-2 show";
      } else {
        cantwaitTxtElement.className = "txt-2";
      }

      if (countdownNumber <= 0) {
        changeState(3);
      }
    }, 500);
  } else if (state == 3) {
    let success = setTimeout(function () {
      let randomNumber = Math.round(Math.random() * 10);

      console.log("random number = ", randomNumber);

      if (randomNumber > 2) {
        changeState(4); //launch success state
      } else {
        changeState(5); //launch failed state
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
