// destructuring
// two types of destructuring

// Array destructuring
// let arr = [10, 20, 30, 40];
// let [a, b, , d] = arr;
// console.log(d); //even though if we are not passing the value ie empty space o/p 40

// let [a1, b1] = arr
// console.log(a1)
// console.log(b1);

// let [a2, , , d2] = arr;
// console.log(d2);

// Object destructuring

// let emp = {
//     eid: 123,
//     eName: "swaroop",
//     location:"banglore"
// }
// let { eid, eName, location } = emp
// console.log(eid)

// =====================================
// let persondetails={
//     name: "swaroop",
//     email: "swaroop@gmail.com",
//     Marritalstatus: "married",
//     address: {
//         sname: "anil",
//         place: "banglore",
//         pin:570008
//     }
// }
// console.log(persondetails)
// let { name, email, Marritalstatus, address } = persondetails

// let u=console.log(email,Marritalstatus,address);

// let alldetails = {
//     ename: "abc",
//     tel: 7760109887,
//     qualification:"BE"
// }
// let sd = {...persondetails, ...alldetails}
// console.log(sd);

// let
// =============================================================================

const teacher = {
    name: "reena",
    age: 30,
    color: "pink",
    subject: ["social", "English"]
};

const address = {
    city: "banglore",
    pincode: 572008,
    landmark: "btm"
};

// adding extra keys and value for the created objects
const teacherDetails = {
    ...teacher, ...address
};
console.log("teacher with address" , teacherDetails);

const teacherwithphono = {
    ...teacher,
    phone: 7760109887,
    married: "not yet"
};

console.log("teacher with phone number", teacherwithphono)

const adddetails = {
    ...address,
    state: "karnataka",
    country:"india"
}

console.log(teacherwithphono, adddetails);


// // ===========================================================================

// // spread operator with object
// const person = {
//     name: "ruthwik",
//     age: 35,
//     place:"blore"
// }

// // creating a copy of object
// const copyperson = {
//     ...person
// }
// person.name = "sundar";
// console.log("the person list is", person)
// console.log("the copy of person",copyperson);