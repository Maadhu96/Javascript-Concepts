// Array.from()

console.log(Array.from("foo"))







// Array.of()
console.log(Array.of(7));//array of 7

console.log(Array([1, 2,]))
console.log(Array(true));//[true]

// ======================================================================

// find():which going to satisfy condition and exicute only one o/p

// the find() method returns the value of the first element in the provided array that satisfies the provided testing function

// syntax:arr.find(callback(element[,index[array]])[,thisAtg])
// case:1 have only one condition.
const array=[5,12,8,130,44]
const found = array.find(element => element > 10)
console.log(found);
console.log(typeof found)

// case:2 have two condition using && operator

let price = [500, 600, 777, 800, 850, 1000, 1500]

let result = price.find(prices => prices > 600 && prices < 800)
console.log(result);
//   ====================================================
// findIndexof(): method returns the index of the first elementin the array that satisfies the provided testing function.Otherwise it returns -1. it indicating that no element passed the test

const array1 = [100, 18, 13, 143, 55]
const LargeNumber=array1.findIndex((element)=>element>13)
console.log(LargeNumber);   