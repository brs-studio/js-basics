// Get the parms from URL
const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");
const title = urlParams.get("title");
const price = urlParams.get("price");
const image = urlParams.get("img");

// DOM Elements
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");
let productImg1 = document.getElementById("img1");
let productImg2 = document.getElementById("img2");
let productImg3 = document.getElementById("img3");
let productImg4 = document.getElementById("img4");
let quantity = document.getElementById("quantity");
let cartCount = document.getElementById("cartCount");
let cartNotificationContainer = document.getElementById(
  "cart-notification-container"
);
let verticalCarousel = document.getElementById("vertical-carousel");

const addToCartBtn = document.getElementById("addToCart");
let storedCartItems;

// Set the title and price received from the URL
if (title && price) {
  productName.innerText = title;
  productPrice.innerText = price;
  productImg1.src = image;
  productImg2.src = image;
  productImg3.src = image;
  productImg4.src = image;
  verticalCarousel.style.backgroundColor = "#ccc";
}

// When an item is added then this fucntion is called
function addItemToCart(event) {
  console.log(Number(quantity.value));
  event.preventDefault();
  const item = {
    productID,
    quantity: Number(quantity.value),
    title,
    price,
    imageURL: image,
  };
  console.log(item);
  updateStore(item);
  cartNotificationContainer.style.display = "block";
}

// Show Notification and also update cart count in Nav Bar, when Add to Cart button is clicked
function updateCartNotification(count) {
  cartCount.innerText = `CART(${count})`;
  cartNotificationContainer.innerHTML = `
    <p><span>Item added to your cart</span></p>
    <button onclick=cartHide() >X</button>
    <div class="cart-notification-content">
        <img src="${image}" height='50px' width='50px' alt="${title}">
        <div>
            <p>${title}</p>
            <p>${price}</p>
        </div>
        </div>
         <a class='btn' href="cart.html">View my cart (${count})</a>
         <a class='btn' href="list.html">Continue Shopping</a>
    `;
}

// Hide the Cart Notification when cross icon is clicked
function cartHide(params) {
  cartNotificationContainer.style.display = "none";
}

// Update Local Storage
function updateStore(addedItem) {
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  if (storedItems) {
    const arr = [...storedItems];
    const existingCartItem = arr.find(
      (item) => item.productID === addedItem.productID
    );
    if (existingCartItem) {
      console.log("item already exists...");
      existingCartItem.quantity =
        existingCartItem.quantity + addedItem.quantity;
      storedCartItems = [...storedItems];
    } else {
      storedCartItems = [addedItem, ...storedItems];
    }
  } else {
    storedCartItems = [addedItem];
  }
  console.log(storedCartItems);
  localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
  updateCartNotification(storedCartItems.length);
}

// Get From the Store - Local Storage
function getStore() {
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  storedCartItems = storedItems;
  if (storedCartItems && storedCartItems.length > 0) {
    updateCartNotification(storedCartItems.length);
  } else {
    updateCartNotification(0);
  }
}
getStore();

addToCartBtn.addEventListener("click", addItemToCart);
