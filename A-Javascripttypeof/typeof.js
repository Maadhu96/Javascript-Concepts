
// To check String data type
let str = "Samsung";
let str1 = "Samsung";
let str2 = `Samsung`;

console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);

// To check Number data type
var a = 9;
console.log(typeof a);

// To check null data type
const l = null;
console.log(typeof l);

// To check boolean
var b = true
let z = false
console.log(typeof b);
console.log(typeof z);

// To check undefined
var x = undefined
console.log(typeof x);

// To check bigint
let y = 1n
console.log(typeof y);

//  Data type can be change during run time that is why we called dynamically typed
// we re-initialize the variable as string
let j = 20
console.log(typeof j);
j = "hello"
console.log(typeof j);


// ======================
// Ternary operator
let age=26
let k= (age > 21) ? 'false' : 'true';
console.log(k);


// =========================
// default value take by prompt is "string"
// we can not concat number and string without double quote
let i = 10
let h ="hi"
console.log(i + h);
