console.log(Math.sqrt(4));//2
console.log(Math.cbrt(8));//2
console.log(Math.floor(10.8));//10
console.log(Math.floor(10.1));//10
console.log(Math.floor(10.5));//10
console.log(Math.ceil(10.8));//11
console.log(Math.ceil(10.1));//11
console.log(Math.ceil(10.5));//11 
console.log(Math.round(5.8));//6
console.log(Math.random(10,100));//Random value will come for every refresh

// Read 2 number from the prompt
// 1 st as base value, 2nd number take as exponent value

// a) find power  for 1st number
// b)sqrt

let n = Number(prompt("Enter base number"));
let e = prompt("Enter exponential number");
console.log(`The square root of the number ${n} is ${Math.sqrt(n)}`);

console.log(`the base number is ${n} and the power is ${e} cuberoot answer is ${Math.cbrt()} `);