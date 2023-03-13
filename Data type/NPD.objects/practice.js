console.log("Start");
var a = "Hello"
let b = 20

function x() {
    let z = "Hi"
    console.log(z);
    a = 20
}

{
    const p = 20
    console.log(p);
    console.log(a);
}

function r() {
    let b = 30
    console.log(p);
    console.log(b);
}
console.log("End");
x();