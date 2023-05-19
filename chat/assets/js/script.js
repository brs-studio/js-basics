/**
Author:    Build Rise Shine with Nyros (BRS)
Created:   11.05.2022
Library / Component: Script file
Description: Rock Paper Scissor game logic
(c) Copyright by BRS with Nyros.
**/
function loadScript() {
  let user = prompt("Please enter your name", "");
  if (!user) {
    document.getElementsByTagName('main')[0].innerHTML = 'Please Enter Your Name';
  }

  var pubnub = new PubNub({
      publishKey: 'demo',
      subscribeKey: 'demo',
      userId: user
  })

  pubnub.subscribe({
      channels: ['ws-channel']
  })

  pubnub.addListener({
    message: payload => {
        document.getElementById('messages').innerHTML += `${payload.publisher}: ` + payload.message + "<br>";
    }
  })

  function sendMessage(event) {
    var inputMessage = document.getElementById('message')
    if(inputMessage.value) {
      pubnub.publish({
        channel: 'ws-channel',
        message: inputMessage.value
      })
      inputMessage.value = ""
      event.preventDefault();
    }
  }
  document.getElementById('input-form').addEventListener('submit', sendMessage);
}

window.onload = loadScript;