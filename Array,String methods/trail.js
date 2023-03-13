// let num = Number(prompt("Enter the number"))
// let input=prompt("Enter sqrt or cbrt")

// if (input=="sqrt") {
//     console.log (num**(1/2));
// }
// else if(input=="cbrt"){
//     console.log(num**(1/3));

// // console.log(m);
// var m=10
// console.log(m);

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(" ");
// console.log(words);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]

// let sentence = "first struggle then you find the good path"

// let word = "path"

// console.log(`the word "${word}" ${sentence.includes(word)?'is':'is Not'} in this sentence `);


// ? filter the even number from the array
// function x(){
//   let array=[10,20,30,40,50,60,70,80,90,26,37,67]
// let even=array.filter(num=>num%2===0)
// console.log(even)
// console.log(array)
// }
// x()

// ? print the value in form of right angle triangle 
// let number=6
// let sum=""

// for(i=1;i<=number;i++){
//   for(j=1;j<i;j++){
//     sum +="1"
//   }
//   sum +="\n"
// }
// console.log(sum)

// ? output of a,b,c
// const a = 5;
// console.log(5)
// const b = a++
// console.log(b)
// const c = ++b
// console.log(c)

// ? o/p for below condition
// for(i=5;i!=0;i--){
//   console.log(i)
// }


// difference between nodeList and HTML collection

// let li=document.getElementsByTagName("li")
// let liWithQuery=document.querySelectorAll("li")

// console.log(li)
// console.log(liWithQuery)

// console.log(typeof li)
// console.log(Array.isArray(li))

// console.log(typeof liWithQuery)
// console.log(Array.isArray(liWithQuery))

// let shashi=document.getElementById("shashi");//id is not matched it return null
// // if it matches it return element //returns the first matching element node.

// let shashiLi=shashi.getElementsByTagName("li")
// console.log(shashiLi)// it return html collections

// Array.from(shashiLi).forEach(li=>{
//   li.innerHTML="shashi"
//   li.className="shashi"
// });//it return html collection

// // fetch harish data

// let harish=document.querySelector("#harish")
// harish.querySelectorAll("li").forEach(li=>{
//   li.innerHTML="harish"
//   li.className=("harish")
// })//nodeList supports forEach,entries,keys,value

// ====================================================

// var Output = (function(x)
// {
// delete x;
// return x;
// }
// )(3);
// console.log(Output);

//? o/p 0
// ==============================
// var x={foo:1}
// let output=(function test(){
//   delete x.foo;
//   return x.foo;
// })()
// console.log(output)
// ? o/p undefined
// ============================

// var Employee =
// {
// company: 'xyz'
// }
// var Emp1 = Object.create(Employee);
// delete Emp1.company
// console.log(Emp1.company)

// ? o/p xyz
// =============================

// var foo=function Bar()
// {
// return 7;
// }
// typeof Bar()
//! The output would be Reference Error. A function definition can have only one reference variable as its function name.
// ? o/p Uncaught ReferenceError: Bar is not defined


// ======================================================
// ! String methods
// ? String length: it is a property not a method
//  this method is used to find the length of the string 

let str="JavaScript String Methods"
let strlength=str.length
console.log(strlength)

// =======================================================

// ? String slice()
// this method is used to slice the given string 
// syntax: substr(start, length),slice(start, end),substring(start, end)

let strslice="JavaScript String Methods"
let strslice1=strslice.slice(2,6)
console.log(strslice1)

// ========================================================
// ? String substring() /// it is similar to slice
// this method is used to extract the string from the given str
let strSubStr="JavaScript String Methods"
let strSubstr=strSubStr.substring(2,6)
console.log(strSubstr)

// ========================================================

// ? Split()
// it is used to split the string
let strsplit="JavaScript String Methods"
let StrSplit=strsplit.split("")
console.log(StrSplit)
let StrSplit1=strsplit.split(" ")
console.log(StrSplit1)
let StrSplit2=strsplit.split("  ")
console.log(StrSplit2)

// ============================================================

// ? includes()
// which is used to find the string present in the given string.
//  it accepts the value to find the value and return the boolean value
let strincludes="JavaScript String Methods"
let Strincludes=strincludes.includes("String")
console.log(Strincludes)

// ================================================================

// ?toLowerCase
// it is used convert upperCase int LowerCase
let strtoLowerCase="JavaScript String Methods"
let StrtoLowearcase=strtoLowerCase.toLowerCase("String")
console.log(StrtoLowearcase)

// ===============================================================
// ? toupperCase
// it is used to covert LowerCase into UpperCase

let strtoUpperCase="JavaScript String Methods"
let StrtoUppercase=strtoUpperCase.toUpperCase("String")
console.log(StrtoUppercase)

// ===================================================================

// ? Replace
// it acceptes the 2 value first value is replacing value and second value is newlly updating value to the string
// it will replace the first value
let strReplace="JavaScript String Methods String String"
console.log(strReplace)
let StrReplace=strReplace.replace("String"," is scripting language and it is having the string")
console.log(StrReplace)

// ? O/P  JavaScript  is scripting language and it is having the string Methods String String

// ======================================================================

// ? ReplaceAll
// it acceptes the 2 value first value is replacing value and second value is newlly updating value to the string
// it will replace all the value present in the string
let strReplaceAll="JavaScript String Methods String String"
console.log(strReplaceAll)
let StrReplaceall=strReplaceAll.replaceAll("String","replaced")
console.log(StrReplaceall)

//? O/P  JavaScriptreplaced Methodsreplacedreplaced

// =========================================================================
// ? Concat()
// it used to add the string
let strConcat1="JavaScript"
let strConcat2=" String Method"
let strConcat3=" please solve all with a examples"
let strFinalConcat=strConcat1.concat(strConcat2,strConcat3)
console.log(strFinalConcat)

// ========================================================================

// ? charAt()
// it accepts the index value and retuns the index value present in the string
let strcharat="JavaScript String Methods"
let strcharAt=strcharat.charAt(0)
console.log(strcharAt)

// ?O/P J

// =========================================================================
// ? charCodeAt()
// it is used to check the charCode of the give string
let strcharcodeat="JavaScript String Methods"
let strcharCodeAt=strcharcodeat.charCodeAt(1)
console.log(strcharCodeAt)

// =======================================================================

// ? trim()
// it used to trim the white starting and ending of the string
let strtrim="JavaScript String Methods"
let strtrim1=strtrim.trim()
console.log(strtrim1)

// ==========================================================================

// ? indexof()
// it will return the index value of the give string. if the value is not match it will return -1
let strindexof="Str"
let strindexof2="JavaScript String Methods"
let strindexof1=strindexof2.indexOf(strindexof)
console.log(strindexof1)

// =====================================================================
// ? lastIndexOf()

let strlastindexof="J"
let strlastindexof2="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let strlastindexof1=strlastindexof2.lastIndexOf(strlastindexof)
console.log(strlastindexof1)

// =======================================================================
// ?localeCompare()
// This returns number whether the given string comes before ,after,or same as the given string in sort order

let a='reserve'
let b="RESERVe"
console.log(a.localeCompare(b))

// =========================================================================
// ?match()
// ! it return the Array like object
//  match returns the value with index number in the given string
//  it will check from left to right if one value is matched it will return the value.
let match1="The match() method retrieves The result of matching a string against a regular expression."
let match2="The"

let match3=match1.match(match2)
console.log(match3)
console.log(typeof match3)

// =========================================================================

// ? matchAll()

let matchAll1="The match() method retrieves The result of matching a string against a regular expression."
let matchAll2="The"

let matchAll3=matchAll1.matchAll(matchAll2)
console.log(matchAll3)
console.log(typeof matchAll3)

// ================================================================================

//? repeat()
//  it will repeat the value at give number of times
let strRepeat=(" hi")
let strrepeat=strRepeat.repeat(5)
console.log(strrepeat)

// ==================================================================================

// ? search()
//  search returns the index value of the first letter of the string

let strSearch="Santa spreads the true meaning of Christmas with every gift: love!"
let strvalue="love"

let strSearchVal=strSearch.search(strvalue)
console.log(strSearchVal)

// =================================================================================
// ? toString()
// 
let strtoString=new String("Find joy in Santa's jolly smile.")
console.log(strtoString)

console.log(typeof strtoString)

let strtoString1=strtoString.toString(strtoString)

console.log(strtoString1)

console.log(typeof strtoString1)

// =================================================================================
// ? valueof

let strvalueof=new String("Find joy in Santa's jolly smile.")
console.log(strvalueof)
console.log(typeof strtoString)

let strvalueof1=strtoString.valueOf(strtoString)

console.log(strvalueof1)

console.log(typeof strvalueof1)


// ================================
// ! 23/12/2022

// function test(){
//   var f=10
// function test1(){
//   console.log(f)
// }test1()
// }
// test()

//! for of loop
let array=[1,2,3,4,5,6,78,9,0,23,43,65,78]
let output=0
for(let index of array){
  console.log(index)
  
    output +=index;
}
console.log(output)
console.log(typeof output)

// ===================

let string="JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions."
let val=""
for(let index of string){
  console.log(index)
val +=index
}
console.log(val)


// ============================================
// spread operator
let obj1={
  firstName:"Manoj"
}
let obj2={
  ...obj1
}
console.log(obj2)
// ===============================================
function obj(...num){
  console.log(num)
}
obj(23,43,5,33,66,4)

function test(...nums){
  console.log(nums)
}
test(23,43,5,33,66,4,65433,7766)


 







