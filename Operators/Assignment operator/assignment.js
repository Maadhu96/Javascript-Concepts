let x = 10;
console.log((x += 5)); // increment takes place

console.log((x -= 10)); // here x value is incremented 15 in place of 10

console.log((x *= 5)); // here x value re-initialized and value is 5

console.log((x /= 5)); // here x value is re-initialized as 25

console.log((x **= 3)); //here x value is re-initialized as 5 o/p is 125
//Without the variable name assignment operator will not work(ex:2**=3)

//Assigning the string value
let str1 = "Hello";

str1 += "world";
console.log(str1);

//Assigning the string value  with integer value inside the string

str1 -= "5";
console.log(str1);

//Declaring the value & passing integer value inside the string
let a = 50;
a -= "20";
console.log(a);

a *= "2";
console.log(a);
