let firstname = document.getElementById("firstname")
let btn = document.getElementById("btn")
let content = document.getElementById("content")
let clientX = document.getElementById("clientX")
let clientY = document.getElementById("clientY")

firstname.addEventListener("keyup", myfunction1)
btn.addEventListener("click", myfunction2)
content.addEventListener("mousemove", myfunction3)

function myfunction1(e){
  console.log(e);
  if(e.target.value.length >6 ){
    firstname.value = firstname.value.slice(0,6)
  }
}

function myfunction2(e){
  console.log(e);
  alert("you clicked the button")
  btn.disabled = true;
}

function myfunction3(e){
  console.log(e);
  clientX.textContent = "X-value: " + e.clientX
  clientY.textContent = "Y-value: " + e.clientY
}