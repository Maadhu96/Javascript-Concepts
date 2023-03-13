// ========================================================================
// at(): it is used to find the character inside the array by using a index value
// it will take both positive value and the negative value, it we take negative value it will start from the end
let x = [10, 20, 30, 40, 50, 180, 160, 250, "hi", "hello"]
console.log(x.at(2));//30
console.log(x.at(-2))//hi

// ================================================================================
// Concat method: it is used to add the n number of array methods in one single array
let a = ["hi", "hello", 20, 10, 30,]
let b = [12, 14, 15, 18, 20]
let c=[20,25,14,30,87,  (val)=>{return val+10}]

console.log(a.concat(b, c));//(16) ['hi', 'hello', 20, 10, 30, 12, 14, 15, 18, 20, 20, 25, 14, 30, 87, ƒ]

// ========================================================================
// CopyWithin(): it is used to copy the array
// it will take both positive value and the negative value, if we take negative value it will start from the end
// It will not affects the original array but it will replace the array element
// ===================================
// Syntax:
// (copyWithin(target);
// copyWithin(target, start);
// copyWithin(target, start, end);)
// ===================================
const d = [1, 2, 3, 4, 5]
console.log(d.copyWithin(-2, -4, -2));//[1,2,3,2,3]
console.log(d.copyWithin(2, 0, 3));//(5) [1, 2, 1, 2, 3]
let d1 = [1, 2, "tyss", "hey", 5, "hi", "hello", "Array method"]
// console.log(d1);

console.log(d1.copyWithin(-8, -3, 8));//(8) ['hi', 'hello', 'Array method', 'hey', 5, 'hi', 'hello', 'Array method']

console.log(d1.copyWithin(2,4,6));(8)//[("hi", "hello", 5, "hi", 5, "hi", "hello", "Array method")];
console.log(d1.copyWithin(-3, -5, 5));//(8) ['hi', 'hello', 5, 'hi', 5, 'hi', 5, 'Array method']

// =================================================================================

// Entries Method:The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries(); 

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

//example:2=================================================
// using for-of loop
const k = ["a", "b", "c"];

for (const [index, element] of k.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'
// ========================================================
// using for-in loop


// ===========================================================
// ? Array methods 21/12/2022

// let array1=["Java","Javascript","Python","SQL"]
// let array2=["3Months","2Months","1Month","2Months"]
// let trainers=["Shahsi","Shivu","Harish"]

// let concat=array1.concat(array2,trainers)
// console.log(concat)


// ===============

// let trainer1=["Shashi"]
// let trainer2=["harish",["shivu"]]
// let mergeValue=trainer1.concat(trainer2)
// console.log(mergeValue)

// let finalmergeFlat=mergeValue.flat(2)
// console.log(finalmergeFlat)

// let finalmergeConcatApply=Array.prototype.concat.apply([],mergeValue)
// console.log(finalmergeConcatApply)


// let finalmergeReduce=mergeValue.reduce((a,b)=>a.concat(b),[]);
// console.log(finalmergeReduce)


// ========================================
// using tostring method

// let nestedarray=[11,23,443,[122,122],123,[656],[455,[355]],[[[[[[[[[[[["hi","hello"]]]]]]]]]]]]]

// let nest=[...nestedarray]
// console.log(nest)

// let finalvalue=nestedarray.toString().split(",").map(e=>e)
// console.log(finalvalue)

// =======================================
// ? using reduce method

// let arr=[11,23,443,[122,122],123,[656],[455,[355]],[[[[[[[[[[[["hi","hello"]]]]]]]]]]]]]
// function flatten(arr){
//   return arr.reduce(
//     (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
//     []
//   );
// }
// const flattened = flatten(arr);
// console.log(flattened);
// ======================
// let arr4 = [1, [2, [3], [[[[[[[[[[[[[[[[4644367634]]]]]]]]]]]]]]], 5], 6]];
// console.log(flatten(arr4));

// ==========================
// findmax number
// let findmax=[10,20,90,30,40,50]

// function max(arr){
// return arr.reduce((acc,last)=>{
//  return acc>last?acc:last
// })
// }
// console.log(max(findmax))

// // =====================
// let a=[10,20,90,30,40,50]
// let val=a.sort((a,b)=>{return a-b});
// let largeValue=val[val.length-1]
// console.log(largeValue)

// =====================================
// !ReducerRight
let numbers = [1, 2, 3, 4,5,6];

// function that adds last two values of the numbers array
function sum_reducer(accumulator, currentValue) {
  return accumulator - currentValue;
}


// returns a single value after reducing the numbers array
let sum = numbers.reduceRight((sum_reducer),4);
console.log(sum);

// ==============================
// !Reduce

let number = [1, 2, 3, 4,5,6];
function red(acc,last){
  return acc-last
}
let sum1=number.reduce((red),6)
console.log(sum1)

// ============================================
// ! Find & FindIndex()

// !findIndex()
//? The method findIndex is used to return the index of the first array element that passes a certain
//  test function.

// The method findIndex also takes a callback function which can take three
//  parameters(element, index, and array).


let indexFinder=[2,3,4,5,7,8,6,4,2,4,7,8,9,8,6,4,3,2]

let output=indexFinder.findIndex(val=>{
  return val>5
})
console.log(output)

// !find()

let indexFind=[2,3,4,5,7,8,6,4,2,4,7,8,9,8,6,4,3,2]
let Output=indexFind.find(val=> {return val>8})
console.log(Output)

// ===================================

// ! every
// ? it will check every condition in an array and return the boolean if the one condition is pass the condition
// function checkarray(){val=>val>5}
let data=[2,3,4,5,7,8,6,4,2,4,7,8,9,8,6,4,3,2]
// let eve=data.every(checkarray)
let eve=data.every(val=>val>1)
console.log(eve)

// ! some
// ? it will check the every element in an array and if the one condition is pass it will return the boolean value and stop the process
let data1=[2,3,4,5,7,8,6,4,2,4,7,8,9,8,6,4,3,2]
let datasome=data1.some(val=>val%2==0)
console.log(datasome)


// !indexof
// ? indexof is used to find the index of a given string and it will return the index of the first letter in the give string
let stringValue="Something friendly: Hey mate, surprise! ..."

let findStr="mate"
let outputval=stringValue.indexOf(findStr)
console.log(outputval)

// !lastIndexof
// ? lastIndexof is used to find the last indexof the given value and it will return the index value
let stringValue1="Something friendly: Hey mate, surprise! ..."

let findStr1="su"
let outputval1=stringValue.lastIndexOf(findStr1)
console.log(outputval1)

// ! includes
// ? includes is used to check whether the give value is present in the array or not
// ! it returns the boolean value

let arrayIncludes=["The"," best", 'way', 'to','do', 'this','is','with','a','simple','confirmation-style','email', 'something','like','this:']
let including=arrayIncludes.includes("to")
console.log(including)
