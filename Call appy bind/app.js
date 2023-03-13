
// let obj1 = {
//     name: "Sanjay",
//     RollNo: 123,
//     School:"Public School"
// }

// let obj2 = {
//   name: "Swaroop",
//   RollNo: 113,
//   School: "Public School",
// };
// let obj3 = {
//   name: "Sudarshan",
//   RollNo: 163,
//   School: "Public School",
// };
// let obj4 = {
//   name: "Puneeth",
//   RollNo: 133,
//   School: "Public School",
// };

// function test() {
//     console.log(this.RollNo + 20);
//     console.log(this.name);
//     console.log(this.School)

// }
// let val = test.call(obj1)
// console.log(val);

//!=================================================

let X = {
  username: "Manu",
  company: "Tyss",
  details: function () {
      console.log(this);
  },
  detailsWithArrow: () => {
      console.log(this);
  },
}
X.details();//Current object
X.detailsWithArrow();//window object

//!======================= call method

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

function callAnyObject() {
  console.log(`I need money from ${this.name} amount is ${this.amount}`);
}

//!function method called CALL method
callAnyObject.call(shashiObject);

//!==========================

let obj1 = {
  num:100,
}
let obj2 = {
num: 1000,
};

function GetTotalValue(num1, num2) {
  return this.num + num1 + num2;//here we mandatory use the return keyword otherwise it will shows an undefined because it is a normal function.
}

let total = GetTotalValue.call(obj1, 100, 100);//this is call method
//console.log(total);//300

//!============================= apply call and bind method

let obje1 = { 
  num:100,
  // age:29
}
let obje2 = {
num: 1000,
// age:26
};

// function GetTotalValue(age1, age2) {
//   return this.age + age1+ age2;
// }
function GetTotalValue(num1, num2) {
  return this.num + num1 + num2;
}

let totalApply = GetTotalValue.apply(obje1, [10,10]);
console.log(totalApply);
let totalCall = GetTotalValue.call(obje2, 100, 100);
console.log(totalCall);
let totalbind = GetTotalValue.bind(obje2, 100, 100);
console.log(totalbind());