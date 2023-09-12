/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Click and Drag script
(c) Copyright by BRS with Nyros. 
**/

// Get DOM Elememts
const slider = document.querySelector(".items");

// Init variables 
let isDown = false;
let startX;
let scrollLeft;

// Default theme
let chathams_blue = "#1A4B84";

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft; //e.pageX gives mouse position relative to whole document 
  console.log('Start X is ' + startX);
  // scrollLeft - get or set the number of pixels that an element's content is scrolled from its left edge
  scrollLeft = slider.scrollLeft;
  console.log('Scroll Left is ' + scrollLeft);
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  //gives the X-coordinate of the mouse pointer relative to the slider
  const x = e.pageX - slider.offsetLeft; 

  //calculates the horizontal distance the user has dragged the mouse since the initial click (startX) inside the slider. 
  // multiplied by 3 to control the speed of scrolling.
  const walk = (x - startX) * 3; 

  // update the scrollLeft property of the slider
  slider.scrollLeft = scrollLeft - walk;
});

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);


