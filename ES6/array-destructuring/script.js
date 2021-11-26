//ARRAY DESTRUCTURING - Extraction of elements from the array
let tech = ["NEXT-JS", "JAVASCRIPT", "REACT", "ANGULAR", "NODE"];
let num = [10, 20,30, 40]

// ES5
// let t1 = tech[0]
// let t2 = tech[1]
// console.log(t1);
// console.log(t2);


// ES6
let [ t1, t2, ...elements] = tech
console.log(t1);
console.log(t2);
console.log(elements);

const newArr = [...tech, ...num]
console.log(newArr);








