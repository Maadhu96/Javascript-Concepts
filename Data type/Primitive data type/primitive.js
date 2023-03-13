//number

let a = 100;
let b = 20;

console.log(a + b);

//Boolean
console.log(a > b);

//string
//these are the string in-bulit methods

// Re-initializing  the value using assignment operator;
// let str1 = "hello"
// (str1 += "world")//Re-initialized here;
// console.log(str1);

let str = "helllo WORLD";

//to check the length of the string
console.log(str.length);

// to convert to uppercase
console.log(str.toUpperCase());
//to convert to lowercase
console.log(str.toLowerCase());

console.log(str.toLocaleUpperCase());

console.log(str.toLocaleLowerCase());

//index
// It is used to find the index number of the string
// Index value is always starts from '0'
console.log(str.indexOf("W"));
//here in the string we have  repeated value that case first letter will consider ie:l index value is 2
console.log(str.indexOf("l"));

//to get the last index value
//Index value always calculated from left to right and top to bottom;
// here it will consider only the repeated or last letter of the string;
console.log(str.lastIndexOf("l"));

//Slice method
// The slice() method returns selected elements in an array, as a new array.
// Slice method will not affects the  string method
//we can use for trial and error purpose without affecting original string.
console.log(str.slice(2, 9));//o/p  lllo WO
console.log(str.slice(3, 6));//o/p  llo
console.log(str.slice(9, 12));//o/p  RLD
//if we pass the negative value
console.log(str.slice(-1)); // o/p D
console.log(str.slice(-12));//o/p helllo WORLD
console.log(str.slice(-4, 10)); //o/p OR because  browser first search from left to right and top to bottom.

// here if we pass negative and positive value for same index always read from left to right
console.log(str.slice(-2)); // o/p is LD
console.log(str.slice(10)); // o/p is LD

//substring is similar to slice
console.log(str.slice(3, 9));
console.log(str);
console.log(str.slice(13, 11));

console.log(str.substring(10, 2));

//charAt
//we should pass only the index value to get the string name;
console.log(str.charAt(5));

// split is used to convert string into array
console.log(str.split(""));

// here 
const str1 = 'The quick brown fox jumps over the lazy dog.';

const words = str1.split(" ");
console.log(words[3]);
// expected output: "fox"

const words1 = str1.split(" ");
console.log(words1);
// expected output: (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

const chars = str1.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str1.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


//Shortand property
console.log(str.charAt(0).toUpperCase() + str.substring(1));

//Reverse string
//Using for loop reversing the element
let y = "hello";
let x = "";
for (let i = y.length - 1; i >= 0; i--) {
  // console.log(y.charAt(i));
  x += y[i];
  console.log(x);
}

//using reverse method
let s = "DEMO";
// To write the string in reverse direction (if we mention the .revers() it will reverse the string)
console.log(s.split("").reverse());
//Join is used to join the reversed string
console.log(s.split("").reverse().join(""));

//question: Take two string separately and read them by using prompt join those two string or concat those two strings and reverse them.

let c = prompt("Enter value c");
let d = prompt("Enter value d");
 
console.log(c + d);
console.log(c.toUpperCase(), d.toUpperCase());
console.log(c.split("").reverse(), d.split("").reverse());
console.log(c.split("").reverse().join(""), d.split("").reverse().join(""));

z = c + d;
console.log(z.split("").reverse().join(""));

console.log("'hi'");
//Task 1
// if we want to get the content in two line
console.log("My self shivu\n I am your JS trainer");
//an other way using backtise()
console.log(`My self shivu
I am your JS trainer`);

//task 2
// by storing the variable
//Using the Dollar (&) is called as interpolation;
let name = "shiva"
let role = "Trainer"
console.log(`Myself ${name}
I am your JS  ${role}`);

//Task 3
// store the values in a variables and using a prompt write the details in one console using backtic(` `) or Templete literal.
let name1 = prompt("enter name")
let company = prompt("enter your company name")
let profile=prompt("Enter your profile")

console.log(`My self ${name1}
I was working in software company called ${company}
as a ${profile}`);


//trails
let j =["hi", 20, 36, 25, "hello","java","script"]

console.log(j.slice(3,6));
console.log(j.splice(3,6).reverse());
// console.log(j.split(0).reverse());
