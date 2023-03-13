//  Higher-order function : a function accepts the function as a arrgument then it is called HOF

// Call back function: A function assigned as a arrgument  is  called callback function

// Hof
function hof(a, b, cb) {
    console.log(cb);
    return cb(a, b);
}
// using anonymous function
let addition = hof(10, 20, function (a,b){return a+b});
console.log(addition);

// -----passing the argument as Arrow function subtraction
let subs = hof(20, 1, (a, b) => a - b); {
    console.log(subs);
}

let mult = hof(2, 3, (a, b) => a * b); {
console.log(mult);
}

let divi = hof(6, 5, function (a, b) { return a / b })
console.log(divi);