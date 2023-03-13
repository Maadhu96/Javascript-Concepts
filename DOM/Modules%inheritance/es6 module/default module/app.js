// !default variable export we can assign only one variable as default
// import b from "./exp.js"
// console.log(b);

////!we can change the variable identifier by using "As Alias Method"

// import { a as ExpA, c as ExpC } from "./exp.js"
// console.log(ExpA)
// console.log(ExpC);

// !Also we can Export everything in two other ways

// //? Method 1

// import b, { a as ali, c as anil } from "./exp.js";//Everything is expected
// console.log(b)
// console.log(ali);
// console.log(anil);

// ?Method
import * as demo from "./exp.js"
console.log(demo.a)
console.log(demo.c)
console.log(demo.default);
