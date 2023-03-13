// =========================
// ! define the number
// ? literal way
let num=10
console.log(num)
console.log(typeof num)


// function way
let num1=Number("10")
console.log(num1)


// Object way
let num2=new Number("10")
console.log(num2)

// String to number

let num3="10";
let converttoNumber=parseInt(num3)
console.log(converttoNumber)
console.log(typeof converttoNumber)


let convertData=parseFloat(num3)
console.log(convertData)
console.log(typeof convertData)

if(!isNaN(num3)){
 console.log("its a legal number")
}
else{
 console.log("it is not a legal number")
}


let value=num2.valueOf()
console.log(value)
console.log(typeof value)

let num4=10.567890
let test=Math.ceil(num4)
console.log(test)

let test1=Math.round(num4)
console.log(test1)

let toFixed=num4.toFixed(2)
console.log(toFixed)

// ! Number methods

let x=1000000000000000;
console.log(Number.isInteger(x))
console.log(Number.isSafeInteger(x))
console.log(Number.isNaN(x))
console.log(Number.parseFloat(x))
console.log(Number.parseInt(x))

