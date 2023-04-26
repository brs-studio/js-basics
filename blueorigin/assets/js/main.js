const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get("price");
const title = urlParams.get("title");
const image = urlParams.get("img");
const productID = urlParams.get("id");

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productImg = document.getElementById("productImg");
let quantity = document.getElementById("quantity");
let cartCount = document.getElementById("cartCount");
let cartNotificationContainer = document.getElementById(
  "cart-notification-container"
);
const addToCartBtn = document.getElementById("addToCart");
let storedCartItems;

if (title && price) {
  productName.innerText = title;
  productPrice.innerText = price;
  productImg.src = image;
}

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
  // console.log(item);
  updateStore(item);
  cartNotificationContainer.style.display = "block";
}

function updateCartNotification(count) {
  if (count > 0) {
    cartCount.innerText = count;
  }
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
       <a class='btn' href="men.html">Continue Shopping</a>
  `;
}

function cartHide(params) {
  cartNotificationContainer.style.display = "none";
}

// const storedItems = [{productID: "M1", quantity: 1, title: "NewJackson Tee mockup", price: "$26.95"}];
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
// function updateStore(item) {
//   const storedItems = JSON.parse(localStorage.getItem("cartItems"));
//   if (storedItems) {
//     storedCartItems = [item, ...storedItems];
//   } else {
//     storedCartItems = [item];
//   }
//   localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
//   updateCartNotification(storedCartItems.length);
// }

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
