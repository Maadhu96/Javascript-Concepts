//? call method 

// let obj1={
//   name:"Swaroop",
//   id:123,
//   Address:{
//     place:"Belagam",
//     state:"karnataka"
//   }
// }

// let obj2={
//   name:"Sanjay",
//   id:153,
//   Address:{
//     place:"Malavalli",
//     state:"karnataka"

//   }
// }

// let obj3={
//   name:"Manoj",
//   id:133,
//   Address:{
//     place:"Mandya",
//     state:"karnataka"
//   }
// }
// function test(){
//   console.log(this.id+10)
//   console.log(this.Address.state="tamilnadu")  

// }

// let value=test.call(obj3)

// ====================================================
// ? call method adding the 
let shashiObject = {
  name: "Shashi",
  amount:1000,
}

let manuObject = {
name: "Manu",
amount: 10000,
};

let dixithObject = {
name: "Dixith",
amount: 500,
};
let windowObject = window;

function callAnyObject(amount1,amount2) {
 return this.amount+amount1+amount2 //console.log(`I need money from ${this.name} amount is ${this.amount}`);
}

//!function method called CALL method
let x=callAnyObject.call(shashiObject,10,20)

console.log(x)