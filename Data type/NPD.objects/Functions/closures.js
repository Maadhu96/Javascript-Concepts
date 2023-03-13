// function x(p, q) {
//     var a = 10
//     function y() {
//         console.log(p);
//         console.log(a);
//         console.log(q);
//     }
//     y()
// }
// x(5,6)

// closure is created because outer function variable access inside the inner function

// console.log("Start");
// function x(p, q) {
//     var a = 10
//     function y() {
//         console.log(p);
//         console.log(a);
//         console.log(q);
//     }
//     y()
// }
// x(5,6)

// console.log("End");

// Example 2 Accessing the variable ie:var a is calling inside the function y().
// Closure will created only for var a not for var p.

// console.log("Start");
// function x()
// {
//     var a = 10
// var p = 50
//     console.log("I am x()");

//    function y(){
//         console.log("i am y()");
//        var b = 20
//        console.log(b);
// console.log(a);
//     }
//     y()
// }
// x()

// Example 3 here we are calling global variable inside the inner function here closure will not created
// console.log("Start");
// var str = "test";
// function x() {
//   var a = 10;
//   console.log(a);
//   console.log("I am x()");

//   function y() {
//     console.log("i am y()");
//     var b = 20;
//     console.log(b);
//     console.log(a);
//     console.log(str);
//   }
//   y();
// }
// x();
//  y(): we can not call the function y() outside the function x() because for function x(), y()is a variable and it act as a local variable to the function x()

// lexical scope,function chaining

console.log("Start");
var str = "test";
function x(j, k) {
  var str = "demo";
  var a = 10;
  console.log(a);
  var p = "hi"
  console.log(p);
  console.log(k);

  function y() {
    console.log(a);
    console.log(str);
    console.log(this.str);// Here if we want to print the global variable with same name str. we use this keyword
    console.log(j);
    console.log("i am y()");
    var b = 35
    // console.log(b);

// inceasing the function chain is called function chaining 
    function z() {
      console.log(b); // b is the parent for the y()
      console.log(a); //here we can access the grand parent variable ie:x()
      console.log(k); //here we can access the grand parent variable ie:x()
    }
    z()
  }y()
} x(55, 88)
console.log("End");
