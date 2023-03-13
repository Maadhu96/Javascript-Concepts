//Function without name is called anonymous function Ex:1
// First class function: Passing the value as a function to a variable Ex:2
// variable along with the value is called function with the expression.Ex:3


// Ex:1
// function () {
//     console.log("hello");
// }
// ()


// Ex:2
let x = function () {
    console.log("hello");
}
x()
console.log(x);

// Ex:3
let y = function () {
  console.log("hello");
};
y()

//  we can call the function without variable name incase of "let" only 
let = function () {
    console.log("hi");
}
()


// Arrow function
function p() {
    return "hey man"
}
console.log(p());

// shortand - property with return keyword
let q = () => {
    return "hey man how are you"
}
console.log(q());

// Rule 3 ie: curlybraces are mandatory for morethan one statement
let demo = () =>
    console.log("Statement 1");
console.log("Statement 2");
console.log("Statement 3");

demo()
// if  we are not use the curly braces we will get the improper out
let demo1 = () => {
    console.log("Statement 1");
    console.log("Statement 2");
    console.log("Statement 3");
}
// arrow conversion
demo1();

let rest=()=>{
    console.log("hey");
    return "i am end here"
    console.log("am not printing because of return statement");// after return type we can not print the 
}

// example 2
function rest1() {
    return "i am end here"
}
rest1()
console.log(rest1);
console.log(rest1());

// arrow conversion
const rest2 = () => {
    return "I am end here"
}
// rest2()
console.log(rest2());

// Example 3

function ask(){
    console.log("No Need");
    return "i am here"
}
console.log("here we go");
ask()
console.log(ask());

// we can not blocks without variable identified
// let h=()=>{
//     return "Second one"
// }
// console.log(h());

// Arrow conversion
let ask1 = () => {
    console.log("No Need");
     return "i am here";
}
console.log(ask());

// Example 3

function hello(){
    document.write("Hi")
    console.log("i want to share my rest of my life like what we share the coffe right now");
    return "cool take a time till evening"
}
{
    confirm("its MONDAY")
}
hello()
console.log(hello());

// -----------------------
// Example 4
let add = (a, b) => { return a + b }
console.log(add(6, 6));
// ------------------
let add1 = (a, b) => a + b
console.log(add(3, 6));

// ----------------------
let add2 = (a, b) => console.log(a + b);
add2(2, 3)

// diameter of circle
let radius = (r) => console.log(2 *r);
radius(6)

// area of rectangle
let j = prompt("Enter length")
let k = prompt("Enter breadth")

console.log((j * k) + "in mm");

// arrow  for triangle
let triangle_area = (j, k) => console.log(0.5 * (j * k));
triangle_area(j, k);
