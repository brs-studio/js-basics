const firstname = "John"
const lastname = "Doe"
// const greet = "Welcome " +firstname + " " + lastname
const greet = `Welcome ${firstname} ${lastname}`
console.log(greet);

function addTwoNumbers(a,b){
    return a + b
}

const result = `The sum is ${addTwoNumbers(10, 20)}`
console.log(result);

const content = document.getElementById("content")

content.innerHTML = `
    <h3>Title</h3>
    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>
`

