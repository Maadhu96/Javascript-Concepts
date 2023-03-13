// Immediate invoke function expression

// (function () {
//     var a = 20
//     console.log(a);

// })()

//

var b = "hi";
    (function () {
        console.log(b)
        var a = 20;
        console.log(a);
})();

// here we assigning the function to a variable 
let test = function () {
    let str = "hello"
    return str
}
console.log(test());

// iife function
(function ()
{
    console.log("iife");
})()