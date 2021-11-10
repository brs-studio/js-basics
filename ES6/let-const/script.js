// Scope - accessibility/visibility of variables
// 3 types -Global   -Function   -Block

// Global
// var greet = "Hello world";
// console.log(greet);

// if (true) {
//   var user = "Tom";
//   console.log(user);
// }

// using let
// let greet = "Hello world";
// console.log(greet);

// if (true) {
//   let user = "Tom";
//   console.log(user);
// }

// using const
const greet = "Hello world";
console.log(greet);

if (true) {
  const user = "Tom";
  console.log(user);
}

// Function
function greetMessage() {
  let user = "Tom";
  user = "John";
  if (true) {
    let greet = "Hello world";
    for (let i = 0; i < 6; i++) {
      console.log(i);
    }
    console.log(greet);
  }
  console.log(user);
}

greetMessage();

// Arrays and Objects
const users = ["john", "tom"];
users.push("sarah");
console.log(users);

let usersObj = {};
usersObj.name = "Max";
usersObj.age = 20;
usersObj = {};
console.log(usersObj);
