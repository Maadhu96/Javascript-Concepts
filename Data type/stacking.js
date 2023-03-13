console.log("start");
var a = 10;
var c // declaring the variable and initializing the variable inside the function and we can call the function outside the function
let b = "Hi";
//Function 01
function x() {
    c = 20;
    console.log(a);
    const s = 100;
    console.log(s);
}
x()
console.log(c);
//function 02
function y() {
    console.log(a);
    const c = 22
    console.log(c);
}
y()

// console.log(c);
console.log(b);
console.log("End");
