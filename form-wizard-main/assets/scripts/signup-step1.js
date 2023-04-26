/*form validation logic*/
window.onload = function () {
  var root = document.forms[0].elements
  var elementNumber
  for (elementNumber = 0; elementNumber < root.length; elementNumber++) {
    if (root[elementNumber].type == 'text') {
      root[elementNumber].onfocus = function () {
        myFocus(this)
      }
      root[elementNumber].onkeyup = function () {
        text(this)
      }
    }
    if (root[elementNumber].type == 'email') {
      root[elementNumber].onfocus = function () {
        myFocus(this)
      }
      root[elementNumber].onkeyup = function () {
        email(this)
      }
    } else if (root[elementNumber].type == 'submit') {
      root[elementNumber].onclick = function () {
        return validation(root[elementNumber])
      }
    }
    if (root[elementNumber].type == 'password') {
      root[elementNumber].onfocus = function () {
        myFocus(this)
      }
      root[elementNumber].onkeyup = function () {
          password(this)
        strengthChecker(this)
        password(this)

      }
    }
    else if(root[elementNumber].type=="submit")
    {
       root[elementNumber].onclick = function()
       {
        return validation(root);
       }
    }
  }
}
//-----------------------------------------------------------------
//onfocus function
function myFocus(field) {
  var err = field.name + 'error'
  if (field.value.length == 0 && !document.getElementById(err)) {
    var errorMsg = document.createElement('span')
    errorMsg.id = err
    errorMsg.textContent = ''
    errorMsg.style.color = ''
    field.parentNode.appendChild(errorMsg)
  }
}
//-------------------------validations--------------------------------------------------------
//text boxes validation+
function text(textValid) {
  var type = textValid.getAttribute('type')
  var show = textValid.name + 'error'
  var minLength = textValid.getAttribute('min')
  var maxLength = textValid.getAttribute('max')
  if (minLength == null) minLength = 2
  if (maxLength == null) maxLength = 50
  if (type == 'text') {
    var textValue = textValid.value.length
    if (textValue == 1) {
      document.getElementById(show).innerHTML = '&#10008; minimum 2 chars'
      document.getElementById(show).style.color = 'red'
      return false
    } else if (textValue >= minLength && textValue <= maxLength) {
      document.getElementById(show).innerHTML = '&#10004; ok'
      document.getElementById(show).style.color = '#1758c1'
      document.getElementById('firstname').style.border = '1px solid #1758c1'
      document.getElementById('lastname').style.border = '1px solid #1758c1'
      return true
    }
  }
}
//---------------------------------------------------------------------
// Email validation function
function email(emailValid) {
  var type = emailValid.getAttribute('type')
  var show = emailValid.name + 'error'
  if (type == 'email') {
    var match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var emailValue = emailValid.value.length
    if (emailValue == 0) {
      document.getElementById(show).innerHTML = '&#10008; Not Empty'
      document.getElementById(show).style.color = 'balck'
      return false
    }
    if (emailValue > 0 && match.test(emailValid.value) == false) {
      document.getElementById(show).innerHTML =
        '&#10008; Enter a valid email address'
      document.getElementById(show).style.color = 'red'
      return false
    }
    if (emailValue > 0 && match.test(emailValid.value) == true) {
      document.getElementById(show).innerHTML = '&#10004; ok'
      document.getElementById(show).style.color = '#1758c1'
      document.getElementById('email').style.border = '1px solid #1758c1'
      return true
    }
  }
}
//---------------------------------------------------------------------------------
//password validation
let parameters = {
  count: false,
  letters: false,
  numbers: false,
  special: false,
}
let strengthBar = document.getElementById('strength-bar')
let msg = document.getElementById('msg')
function strengthChecker() {
    
  let password = document.getElementById('password').value
  parameters.letters = /[A-Za-z]+/.test(password) ? true : false
  parameters.numbers = /[0-9]+/.test(password) ? true : false
  parameters.special = /[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password)
    ? true
    : false
  parameters.count = password.length > 4 ? true : false
  let barLength = Object.values(parameters).filter((value) => value)
  strengthBar.innerHTML = ''
  for (let i in barLength) {
    let span = document.createElement('span')
    span.classList.add('strength')
    strengthBar.appendChild(span)
  }
  let spanRef = document.getElementsByClassName('strength')
  let link = document.getElementById('passworderror');

  for (let i = 0; i < spanRef.length; i++) {
    switch (spanRef.length - 1) {
      case 0:
        spanRef[i].style.background = '#ff3e36'
        msg.textContent = 'Your password is very weak. Use atleast 5 characters'
        break
      case 1:
        spanRef[i].style.background = '#ff691f'
        msg.textContent = 'Your password is weak.Use (0-9) digits'
        break
      case 2:
        spanRef[i].style.background = '#ffda36'
        msg.textContent = 'Your password is good. Use special characters (@, !, #, $)'
        document.getElementById('password').style.border = '1px solid #1758c1'
        link.style.visibility = 'hidden';

        break
      case 3:
        spanRef[i].style.background = '#0be881'
        msg.textContent = 'Your password is strong'
        document.getElementById('password').style.border = '1px solid #1758c1'
        link.style.visibility = 'hidden';

        break
    }
  }
  return barLength.length > 2
}
function password(pwdValid) {
  var type = pwdValid.getAttribute('type')
  var show = pwdValid.name + 'error'
  if (type == 'password') {
    
    var pwdValue = pwdValid.value.length
    if (pwdValue == 0) {
      document.getElementById(show).innerHTML = '&#10008; enter minimum 4 characters'
      document.getElementById(show).style.color = 'red'
      document.getElementById('password').style.border = '1px solid red'
      return false
    } 
    if (pwdValue == 21) {
      document.getElementById(show).innerHTML = '&#10008; enter maximum 20 characters'
      document.getElementById(show).style.color = 'red'
      document.getElementById('password').style.border = '1px solid red'
      return false
    }
    if (pwdValue >=5 && pwdValue<=20) {
      document.getElementById(show).innerHTML = '&#10004; ok'
      document.getElementById(show).style.color = '#1758c1'
      document.getElementById('email').style.border = '1px solid #1758c1'
      return true
    }
  }
}
 
//----------------------------------------------------------------------------------------
//Form Validation
function validation(form) {
  const mail = document.getElementById('email')
  const mailID = mail.value
  localStorage.setItem('email', `${mailID}`)
  var x = document.forms[0].elements
  var radioCheck = 0,
    radioButton = 0
  for (var i = 0; i < x.length; i++) {
    var funRegex = /^[A-Za-z0-9 ]/
    var match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var type = x[i].type
    var minLength = x[i].getAttribute('min')
    var maxLength = x[i].getAttribute('max')
    if (type == 'text') {
      if (minLength == null) minLength = 2
      if (maxLength == null) maxLength = 50
      if (x[i].value.length < minLength || x[i].value.length > maxLength) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      } else if (
        x[i].value.length > minLength &&
        x[i].value.length < maxLength &&
        funRegex.test(x[i]).value == false
      ) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      }
    } else if (type == 'email') {
      if (x[i].value.length == 0) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      }
      if (match.test(x[i].value) != true) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      }
    } else if (type == 'password') {
      if (minLength == null) minLength = 4
      if (maxLength == null) maxLength = 20
      if (
        x[i].value.length < minLength ||
        x[i].value.length > maxLength ||
        x[i].value.length == 0
      ) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      } else if (
        strengthChecker() == false
      ) {
        x[i].focus()
        x[i].style.border="1px solid red";
        return false
      }
    } else if (type == 'radio') {
      var l = x[i].parentNode.children.length
      for (var j = 0; j < l; j++) {
        if (x[i].parentNode.children[j].type == 'radio') {
          radioButton++
        }
        if (x[i].parentNode.children[j].checked == true) {
          radioCheck++
          x[i].style.outline = '0px'
        }
      }
      if (radioButton > 0 && radioCheck == 0) {
        x[i].focus()
        x[i].style.outline = '1px solid red'
        return false
      } else {
        radioButton = 0
        radioCheck = 0
      }
    }
  }
}
//----------------------------------------------------------------------------------------
// Show password function
function toggle() {
  var showPwd = document.getElementById('password')
  if (showPwd.type !== 'password') {
    showPwd.type = 'password'
    return true
  } else {
    showPwd.type = 'text'
    return true
  }
}
