//storing the mail in the localstorage
const mailId = localStorage.getItem('email')

const emailId = document.getElementById('email')
emailId.textContent += `${mailId}`