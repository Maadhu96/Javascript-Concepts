// Var x is global scope
// var x=10;
// console.log(window.x)
var x=7
var x=10
var x=26
let y=5;
// ! same variable access
// ? Variable inside the function it acts as a local scope whether it is a var let const

// (function(){
//   var $="hi";
//   // console.log(y)
//  console.log($)
// })(),

// (function(){
//   var $="hello"
//   console.log($)
// })(),
// (function(){
//   var $="bye"
//   console.log($)
// })()


function test(){
  var x=123 
  let y=243
  const z=2721
  console.log(x)
  console.log(y)
  console.log(z)
}
test()
console.log(x)
// console.log(y)
// console.log(z)

// ? Conclusion : Variable declered inside the function we can not access outside the function.inside the function it wil become a function scope or Block scope

// ===============================
// ? incase of block Var act as a global scope and let,const act as a local scope
// ? var: we can access outside the function.
// ? let & const we can not access outside the function.

// {
//   var $="Hi"
//   console.log($)
// }
// {
//   var $="Bye"
//   console.log($)
// }
// {
//   var $="hello"
//   console.log($)
// }
// ? outside the function we can access the var declared value keyword
// console.log($)
// =========================

// for(i=0;i<100;i++){
//   var $="Shashi"
//   console.log(i)
// }
// console.log($)


// ==================================
// ? const can be both declare and initialize at a time and we can not re-initialize and re-declare the variable 

// const x="shashi"
// x="harish"
// console.log(x)// 

// ====================
// object is mutable and we only mutating the property of the object.

// const obj={
//   userName:"shashi"
// }
// obj.userName="Harish"
// console.log(obj)


// ! Scope

// ================================
// !TDZ

// console.log(demo)

// let demo=124
