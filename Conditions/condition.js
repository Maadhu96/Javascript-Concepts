// if condition
// let a = 50;
// let b = 30;
// if (a > b) {
//   console.log("a is greater then b");
// }

//if else condition
let c = 30;
let d = 40;
// let e = 50
if (c > d) {
  console.log("c is greater then d");
} else {
  console.log("d is greater then c");
}

//if else ladder

let e = 10;
let f = 20;
let g = 30;

if (e > f) {
  console.log("e is greater then f");
} else if (e > g) {
  console.log("e is greater then g");
} else {
  console.log("g is greater then e & f");
}

//switch
key = "a";
// here we can pass the value directly inside the switch
switch (key) {
  case "a":
    console.log("a is vowels");
    break;
  case "e":
    console.log("e is vowels");
    break;
  case "i":
    console.log("i is vowels");
    break;
  case "o":
    console.log("o is vowels");
    break;
  case "u":
    console.log("u is vowels");

  default:
    console.log("this is consonants");
    break;
}
//=========optimized way=========
switch ("a") {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowels");
        break;
    default:
        console.log("Consonants");
    break;
}
// Another way
let vowels = ["a", "e", "i", "o", "u"]
let consonants=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
switch ("b") {
    case vowels:
        console.log("i am vowel");
        break;

    default:
        console.log("i am consonants");
        break;
}