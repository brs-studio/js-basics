/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: JS clock
(c) Copyright by BRS with Nyros. 
**/

/* Get DOM Elements */
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// Helper function responsible for calculating the amount to rotate a hand
const calcDegrees = (time, max) => (time / max) * 360 + 90;

setInterval(() => {
  // Create new Date object
  const now = new Date();

  // Get current seconds, minutes, & hours and calculate the degree shift
  const secondHandDegrees = calcDegrees(now.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(now.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(now.getHours(), 12);

  // Apply rotation to the clock hands corresponding with current time value
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}, 1000);

let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
