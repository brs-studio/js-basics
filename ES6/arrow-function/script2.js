// this keyword

function logMessage() {
  console.log(this);
}

window.addEventListener("load", logMessage);

document.getElementById("btn").addEventListener("click", logMessage);
