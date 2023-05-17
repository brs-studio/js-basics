// DOM Elements
const formElement = document.getElementById("signupForm");
const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const signupBtn = document.getElementById("signup");

function validateForm(e) {
  e.preventDefault();
  const inputs = [...formElement.querySelectorAll("input, textarea")];
  for (const input of inputs) {
    const inputLabel = input.parentElement.querySelector("label").innerText;

    if (input.type === "text") {
      if (input.value.trim().length === 0) {
        alert(`Enter ${inputLabel}`);
        input.focus();
        return;
      }
      if (input.value.trim().length > 12) {
        alert(`${inputLabel} cannot exceed 12 characters`);
        input.focus();
        return;
      }
      if (input.value.trim().length < 3) {
        alert(`${inputLabel} cannot be less than 3 characters`);
        input.focus();
        return;
      }
    }
    if (input.type === "password") {
      if (input.value.trim().length === 0) {
        alert(`Enter ${inputLabel}`);
        input.focus();
        return;
      }
      if (input.value.trim().length > 12) {
        alert(`${inputLabel} cannot exceed 12 characters`);
        input.focus();
        return;
      }
      if (input.value.trim().length < 3) {
        alert(`${inputLabel} cannot be less than 3 characters`);
        input.focus();
        return;
      }
    }
    if (input.type === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail = regex.test(input.value);

      if (input.value.trim().length === 0) {
        alert(`Enter ${inputLabel}`);
        input.focus();
        return;
      }
      if (input.value.trim().length > 20) {
        alert(`${inputLabel} cannot exceed 20 characters`);
        input.focus();
        return;
      }
      if (input.value.trim().length < 3) {
        alert(`${inputLabel} cannot be less than 3 characters`);
        input.focus();
        return;
      }
      if (!validEmail) {
        alert(`Enter a valid ${inputLabel}`);
        input.focus();
        return;
      }
    }
    if (input.type === "textarea") {
      if (input.value.trim().length === 0) {
        alert(`Enter ${inputLabel}`);
        input.focus();
        return;
      }
      if (input.value.trim().length > 150) {
        alert(`${inputLabel} cannot exceed 150 characters`);
        input.focus();
        return;
      }
      if (input.value.trim().length < 15) {
        alert(`${inputLabel} cannot be less than 15 characters`);
        input.focus();
        return;
      }
    }
  }
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");
  if (password.value !== confirmPassword.value) {
    alert("Password and Confirm password not matching");
    password.focus();
    return;
  }
  alert("Signup Success");
  formElement.reset()
}

signupBtn.addEventListener("click", validateForm);
