// function with single line and no params
function hello() {
  console.log("HELLO WORLD"); //HELLO WORLD
}
hello();

// function with multi line and no params
function greet() {
  const user = "Tom";
  console.log(`welcome back ${user}`);  //welcome back Tom
}
greet();

// using return
const multiplyNum = function () {
  return 5 * 5; 
};
const res = multiplyNum();
console.log(res); //25

const addNum = function () {
  const a = 10;
  const b = 10;
  const sum = a + b; 
  return sum;
};
const result = addNum();
console.log(result); //20 

// one params
function greetUser(username) {
  console.log(`Hello ${username}`); //Hello John Doe
}
greetUser("John Doe");

// more than one params
function sortNumbers(even, odd) {
  let result = even.concat(odd);
  result.sort(function (a, b) {
    return a - b;
  });
  console.log(result); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return result;
}

sortNumbers([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]); 

