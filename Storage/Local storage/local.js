//Adding items to the local storage
// syntax:
// window.localStorage.setitem("keyname","value")//or
// localStorage.setItem("keyname","value")

localStorage.setItem("name", "Raj")
localStorage.setItem("id", 143);
localStorage.setItem("Employed?", true);
localStorage.setItem("technologies", ["HTML", "CSS", "JS", "React"]);

let obj = {
    eName: "Manoj",
    id:999
}
let tyssemp = JSON.stringify(obj)
localStorage.setItem("empdetails",tyssemp)


let fun = () => {
    var pn = 7760109887;
    console.log(pn);
}
fun()

localStorage.setItem("empPhone", fun)

// fetching/retrieving data from localStorage
// syntax:
let x=localStorage.getItem("name")

// example
console.log(x)

// to remove particular key
// syntax: localStorage.removeItem("keyName")
// to remove all the data
// syntax: localStorage.clear("keyName")


// ========================================================

// let y=window.localStorage.setItem("name","Madappa")
// let x=window.localStorage.setItem("age","26")

// let z=localStorage.getItem("name")
// let t=localStorage.getItem("age")

// console.log(z)
// console.log(t)


// // localStorage.removeItem("age")
// localStorage.clear()