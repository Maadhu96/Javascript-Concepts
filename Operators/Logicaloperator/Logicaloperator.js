//logical opearator:
//Logical AND operator
let a = 100;
let b = 50;
console.log(a > b && b > a)

//Logical  OR operator
let c = 100;
let d = 50;
console.log(a > b || b > a)

// Logical Not operator

let e = 30;
let f = 40;
console.log(!(e > f))
console.log(!(e < f))

let g = 100;
let h = 50;
let i = 20;

console.log(g > h && g > i && g < h)
console.log(g > h || g > i || g < h)
console.log(g > h || (g > i && g < h));
console.log((g > h || g > i) && g < h);


// -----------------------------------------------

let N1 = parseFloat(prompt("enter your age N1"))
let N2 = parseFloat(prompt("enter your age N2"));

// it is an example for explicit type casting (ex: Number(prompt("enter your age N1")
// N1 = parseInt(prompt("enter your age N1"))
// N2 = parseInt(prompt("enter your age N2")))
console.log(N1 + N2)
console.log(N1 -N2)
console.log(N1 * N2)
console.log(N1 / N2)