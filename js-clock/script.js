// get clock one ID
let clockOne = document.getElementById("clock-one");
// get clock two ID
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function showClock() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString();
  // console.log(currentTime)  //5:10:40 PM
  clockOne.innerText = currentTime;
  
  //set content for clock two
  const splitTime = currentTime.split(":"); 
  // console.log(splitTime); // ['5', '10', '40 PM']
  hr.innerText = splitTime[0] + ":";
  min.innerText = splitTime[1] + ":";
  sec.innerText = splitTime[2];

  setTimeout(showClock, 1000);
}

// initiate the function
showClock();
