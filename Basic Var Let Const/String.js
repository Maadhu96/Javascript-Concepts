// ! define the string
// ? define using literal way
let str1="Swaroop"
let str2='Manoj'
let str3=`Sanjay`

console.log(str1)
console.log(typeof str1)
console.log(str2)
console.log(typeof str2)
console.log(str3)
console.log(typeof str3)

// ! function way
// ? using function declare the variable.

let str4=String("Hello")
console.log(str4)
console.log(typeof str4)

// ! object way

let str5=new String("Hello i am from str5")
console.log(str5)

// let st={
//   ename:"Anil",
// }
// let s=st.valueOf(st)
// console.log(s)


// ? convert object into string
// ! valueof
// valueof is a inbuilt method to convert object to string 
let str51=str5.valueOf(str5)
console.log(str51)
console.log(typeof str51)

let str52=str5.toString()
console.log(str52)
console.log(typeof str52)

let obj={
  ename:"Sanjay",
  age:25
}

console.log(obj)
let objstr=obj.valueOf(obj)
console.log(objstr)