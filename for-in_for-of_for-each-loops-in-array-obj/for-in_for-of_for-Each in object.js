// let studentDetails = {
//     sName: "Manish",
//     Id: 420,
//     job:"Developer"
// }
// // only for-in loop can be applied and if we apply that we will get key as a output
// console.log(studentDetails);
// for (let x in studentDetails) {
//     console.log(x)
// }
// // Object is a inbuilt  method to fetch the key and values
// console.log(Object.keys(studentDetails));
// console.log(Object.values(studentDetails))

// we can not apply for-of method
// for(let y of studentDetails){
//     console.log(y)
// }

// studentDetails.forEach((p1, p2)){
//     console.log(p1);
// }

// ====================================================================================
// Example taking 4 objects

let arrayOfObject = [
  {
    eName: "Manish",
    id: 420,
    job: "Developer",
  },
  {
    eName: "Praful",
    id: 421,
    job: "Manager",
  },
  {
    eName: "Krishna",
    id: 422,
    job: "Data-Scientist",
  },
  {
    eName: "Sangu",
    id: 423,
    job: "Tester",
  },
];
//  incase of for-Each return value is undefined
let p = arrayOfObject.forEach((p1, p2) => { return p1.id });
console.log(p);
console.log(arrayOfObject);

let q = arrayOfObject.map(p1 => {
    console.log(p1);
    console.log(p1.eName)
    return p1.job
})
console.log(arrayOfObject);
console.log(p)
console.log(q);

// ==================================================================
let arrayOfObject1 = [
  {
    eName: "Manish",
    id: 420,
    job: "Developer",
  },
  {
    eName: "Praful",
    id: 421,
    job: "Manager",
  },
  {
    eName: "Krishna",
    id: 422,
    job: "Data-Scientist",
  },
  {
    eName: "Sangu",
    id: 423,
    job: "Tester",
  },
];

let salaryAfterDeployment = arrayOfObject1.map(val => {
    console.log(val)
    val.salary = 20000
    return val
})
console.log(salaryAfterDeployment);