//
// Getter is method which is used to access the properties of an object. In this method no need to mention the parameter.
// Getter method gets the value of the specific properties

// Example 1
let student = {
  firstName: 'monica',
  get getName() {
      return this.firstName;
  }
};

console.log(student)
//  accessing the data property
console.log(student.firstName);

console.log(student.getName);

// accessing getter method
console.log(student.firstName);

// accessing the getter as a method
// console.log(student.getter())//getter.js:14 Uncaught TypeError: student.getter is not a function

// ===========================================================
// ? setter and getter method
let emp={
  ename:"Swaroop",
  age:24,

  //getter method
  get getName(){
    return this.age;
  },
  //setter method
  set value(newname){
this.ename=newname
}
}
emp.value="manoj";//set the value
console.log(emp)
console.log(emp.ename)
console.log(emp.getName)
console.log(emp)






















// Example 2

// const myobj={
//     a:10,
//     get b() {
//         return this.a + 1;
//     }

// }
// console.log(myobj.a);
// console.log(myobj.b)

// Getter and setter method can also added at any time after create using the
// Object.defineProperties method

// const myobj1 = { a: 0,b:15 };

// Object.defineProperties(myobj1, {
//     b: {
//         get() {
//             return this.a + 5;
//         },
//     },
//     c: {
//         set(x) {
//             this.a = x / 2;
//         },
//     },
// });
// myobj1.c = 10//first this line execute o/p 10/2=5 then 5 will assign to the variable a. a value is reinitialized.
// myobj1.b=20
// console.log(myobj1.b)//


// ===================================

