let cartCount = document.getElementById("cartCount");
let cartTableBody = document.getElementById("cartTableBody");
let cartContainer = document.getElementById("cart-container");
let storedCartItems;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", getStore);
} else {
  console.log("loaded...");
  getStore();
}

function initEventListeners() {
  const removeCartItemButton =
    document.getElementsByClassName("remove-cart-item");
  for (let i = 0; i < removeCartItemButton.length; i++) {
    const button = removeCartItemButton[i];
    button.addEventListener("click", removeCartItem);
  }

  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

function getStore() {
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  storedCartItems = storedItems;
  if (
    storedCartItems &&
    storedCartItems.length > 0 &&
    storedCartItems !== null
  ) {
    updateCartCountNotification(storedCartItems.length);
    cartTable();
  } else {
    updateCartCountNotification(0);
    cartEmpty();
  }
}

function cartTable() {
  if (storedCartItems.length > 0) {
    let cartRowContent = `<thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>`;
    storedCartItems.map((item) => {
      cartRowContent += `
        <tr class="cart-row" id=${item.productID}>
          <td>
            <div class="cart-product">
              <div class="cart-img"><img src=${item.imageURL} alt="Girl in a jacket" width="100" height="100"></div>
              <div class="cart-title">
              <p>${item.title}</p>
              <p>${item.price}</p>
              </div>
            </div>
          </td>
        <td> 
          <input class="cart-quantity-input" type="number" value=${item.quantity}>
           <button  type="button" class="btn btn-danger remove-cart-item">Remove</button>
        </td>
        <td class="row-total"><p>${item.price}</p></td>
        </tr>
              `;
    });
    cartTableBody.innerHTML = cartRowContent;
    updateCartTotal();
    initEventListeners();
  } else {
    cartEmpty();
  }
}

function cartEmpty() {
  cartContainer.innerHTML = `
  <div class='empty-cart'>
    <h1><strong>Your cart is empty</strong></h1>
    <a href='men.html' class='btn btn-primary' type='button' >Continue Shopping</a>
  </div>
  `;
}
function quantityChanged(e) {
  console.log(e);
  let input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartTotal = 0;
  const cartRows = document.getElementsByClassName("cart-row");
  console.log(cartRows);
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    console.log(cartRow);
    const priceElement =
      cartRow.getElementsByClassName("cart-title")[0].children[1].innerText;
    const qtyElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    const rowTotalElement =
    cartRow.getElementsByClassName("row-total")[0].children[0];
    const price = parseFloat(priceElement.replace("$", ""));
    const qty = Number(qtyElement.value);
    const rowTotal = Math.round(price * qty * 100) / 100;
    cartTotal = cartTotal + rowTotal;
    document.getElementsByClassName(
      "sub-total"
    )[0].innerText = `$ ${Math.round(cartTotal * 100) / 100}`;
    rowTotalElement.innerText = `$${rowTotal}`;
  }
}

function updateCartCountNotification(count) {
  if (count > 0) {
    cartCount.innerText = count;
  } else {
    cartCount.innerText = "";
  }
}

function removeCartItem(e) {
  const buttonClicked = e.target;
  const productId = buttonClicked.parentElement.parentElement.id;
  console.log(productId);
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const filteredItems = storedItems.filter(
    (item) => item.productID != productId
  );
  localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  updateCartCountNotification(filteredItems.length);
  storedCartItems = filteredItems;
  console.log(filteredItems);
  buttonClicked.parentElement.parentElement.remove();
  cartTable();
}
