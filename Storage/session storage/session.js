//Adding items to the local storage
// syntax:
// window.sessionStorage.setitem("keyname","value")//or
// sessionStorage.setItem("keyname","value")

sessionStorage.setItem("name", "Raj");
sessionStorage.setItem("id", 143);
sessionStorage.setItem("Employed?", true);
sessionStorage.setItem("technologies", ["HTML", "CSS", "JS", "React"]);

let obj = {
  eName: "Manoj",
  id: 999,
};

let tyssemp = JSON.stringify(obj);
sessionStorage.setItem("empdetails", tyssemp);

let fun = () => {
  var pn = 7760109887;
  console.log(pn);
};
fun();
console.log(fun)

sessionStorage.setItem("empPhone", fun);

// fetching/retrieving data from sessionStorage
// syntax:
let x = sessionStorage.getItem("name");

// example
console.log(x);

// to remove particular key
// syntax: sessionStorage.removeItem("keyName")
// to remove all the data
// syntax: sessionStorage.clear("keyName")
