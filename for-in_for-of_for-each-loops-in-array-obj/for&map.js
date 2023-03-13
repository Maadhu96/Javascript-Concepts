// forEach: we can not use return key word.
// ittirable purpose we use forEach loop
// forEach: we will not get new array
// forEach:return calue is Undefined.
// Method chaining can  not be applied for forEach
// it is ES5 feature
// it is not excecuted for empty element.

// =======================================================

// The map() method creates an entirely new array.
// The map() method returns the newly created array according to the provided callback function.
// It  does not change the original array.
//if call a function once for each element in an array.
//

// function practice(i) {
//   return i + 1;
// }

// var a = [-1, 0, 1, 2, 3, 4, 5];
// var b = [0];
// var c = [0];
// console.log(a);

// b = a.forEach(price=>{return price});
// console.log("=====");
// console.log(a);
// console.log(b);
// c = a.map(practice);
// console.log("=====");
// console.log(a);
// console.log(c);

// function fun()
// {
//     return a + b;
// }
// function sum1(p,q,r)
// {
//     return fun();
// }
// let sum = sum1(fun, 10, 20)
// console.log(sum);


let i = [10, 20, 30, 40, 50, 60]
let j = i.length
for (let k = 0; k < j; k++)
{
    i.unshift("hi");
}
console.log(i);
