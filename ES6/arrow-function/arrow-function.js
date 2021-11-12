let hello = () => console.log("HELLO WORLD");
hello();

let greet = () => {
  const user = "Tom";
  console.log(`welcome back ${user}`);
};
greet()

let multiplyNum = () =>  5 * 5
const res = multiplyNum();
console.log(res); 

let addNum = () => {
    const a = 10;
    const b = 10;
    const sum = a + b; 
    return sum;
}
const result = addNum();
console.log(result);

let greetUser = username => console.log(`Hello ${username}`)
greetUser("John Doe")

let sortNumbers = (even, odd) =>{
    let result = even.concat(odd);
    result.sort((a,b ) => (a - b))
    console.log(result);
}
sortNumbers([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]); 

let logMessage = () =>  console.log(this);
window.addEventListener("load", logMessage);
document.getElementById("btn").addEventListener("click", logMessage);
