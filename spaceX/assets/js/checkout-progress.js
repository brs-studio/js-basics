function previousBack() {
  window.history.forward();
}
setTimeout(previousBack, 0)
window.onunload=function(){null}

// DOM Elements
let cartTableBodyElement = document.getElementById("cart-summary-body");
let cartTotalElement = document.getElementById("cart-total");
const progressContainer = document.getElementsByClassName('step')
const progressPercentage = document.getElementById("progress-percentage")

const form = document.getElementById("stepper-form");
const fieldsets = form.querySelectorAll("fieldset");
const nextBtns = form.querySelectorAll(".next-btn");
const prevBtns = form.querySelectorAll(".prev-btn");
let currentStep = 0;

function validateStep(item) {
  const inputs = [...item.querySelectorAll("input, textarea")];
  let isEmpty = false;

  for (const input of inputs) {
    // console.log(input.tagName);
    const inputField = document.getElementById(input.id);
    const labelText = inputField.parentElement.querySelector("label").innerText;
    if (input.tagName.toLowerCase() === "input") {
      if (inputField.value === "") {
        isEmpty = true;
        alert(`Enter ${labelText}`);
        input.focus();
        break;
      }
      if (inputField.value.length <= 3) {
        isEmpty = true;
        alert(`${labelText} should be greater than 3 charecters`);
        input.focus();
        break;
      }
    }

    if (input.tagName.toLowerCase() === "textarea") {
      if (inputField.value === "") {
        isEmpty = true;
        alert(`Enter ${labelText}`);
        input.focus();
        break;
      }
      if (inputField.value.length <= 20) {
        isEmpty = true;
        alert(`${labelText} should be greater than 20 charecters`);
        input.focus();
        break;
      }
    }
  }
  if (!isEmpty) {
    return true;
  }
}
// Hide all fieldsets except the first one
fieldsets.forEach((fieldset, index) => {
  if (index !== currentStep) {
    fieldset.style.display = "none";
  }
  if (currentStep === 0) {
    progressContainer[currentStep].classList.add('active')
  }
});

// Handle the next button click
nextBtns.forEach((nextBtn, index) => {
  nextBtn.addEventListener("click", () => {
    const valid = validateStep(fieldsets[currentStep]);
    console.log(index);
    // console.log(progressPercentage);
    // console.log(progressPercentage.style.width);
    // console.log(progressPercentage.getAttribute('aria-valuenow'));
    // console.log(progressPercentage.textContent);
    if (valid) {
      if(index === 0){
        progressPercentage.style.width = '50%';
        progressPercentage.setAttribute('aria-valuenow', '50')
        progressPercentage.textContent = '50%'
      }
      if(index === 1){
        progressPercentage.style.width = '100%';
        progressPercentage.setAttribute('aria-valuenow', '100')
        progressPercentage.textContent = '100%'
      }
      // console.log(progressContainer[currentStep + 1]);
      progressContainer[currentStep + 1].classList.add('active')
      fieldsets[currentStep].style.display = "none";
      currentStep++;
      fieldsets[currentStep].style.display = "block";
    }
  });
});

// Handle the previous button click
prevBtns.forEach((prevBtn, index) => {
  prevBtn.addEventListener("click", () => {
    if(index === 0){
      progressPercentage.style.width = '0%';
      progressPercentage.setAttribute('aria-valuenow', '0')
      progressPercentage.textContent = '0%'
    }
    if(index === 1){
      progressPercentage.style.width = '50%';
      progressPercentage.setAttribute('aria-valuenow', '50')
      progressPercentage.textContent = '50%'
    }
    fieldsets[currentStep].style.display = "none";
    progressContainer[currentStep].classList.remove('active')
    currentStep--;
    fieldsets[currentStep].style.display = "block";
  });
});

function calculateSubtotal(price, qty) {
  const productQty = Number(qty);
  const productPrice = Number(price.substring(1));
  return `$${productPrice * productQty}`;
}

function getCartItemsFromLocalStore() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let cartRowContent = "";
  cartItems.map((item, index) => {
    cartRowContent += `
    <tr id=${item.productID} class="cart-row">
    <td scope="row">${index + 1}</td>
    <td scope="row">${item.title}</td>
    <td scope="row" class="cart-product-price">${item.price}</td>
    <td scope="row" cart-quantity-qty>${item.quantity}</td>  
    <td scope="row" class="row-total">${calculateSubtotal(
      item.price,
      item.quantity
    )}</td>  
    </tr>
`;
  });
  cartTableBodyElement.innerHTML = cartRowContent;
  updateTotal();
}

function updateTotal() {
  let cartTotal = 0;
  const cartRows = document.getElementsByClassName("cart-row");

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    const subTotal = cartRow.getElementsByClassName("row-total")[0].innerText;
    const removedDollarSign = Number(subTotal.substring(1));
    cartTotal += removedDollarSign;
  }
  cartTotalElement.textContent = `Total $${cartTotal}`;
}

function confirmCheckout(e) {
  e.preventDefault();
  window.location.href = "../order.success.html";
  localStorage.setItem("cartItems", JSON.stringify([]));
}

getCartItemsFromLocalStore();

document
  .getElementById("confirmBtn")
  .addEventListener("click", confirmCheckout);
