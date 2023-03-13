
// arguments object can be used in normal function we can not use in arrow function
function test() {
    return arguments//if we use arguments object,  output always array

}
let x = test("shashi", "swaroop", "harish")
console.log(typeof test)//o/p is function
console.log(x)//Arguments(3) ['shashi', 'swaroop', 'harish', callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(typeof x)// it is used to check the data type
console.log(Array.isArray(x));//it is used to check the whether it is array or not

let finalvalue = Array.from(x)//from(): it is convert arrayObject into pure Array
console.log(finalvalue)
console.log(typeof finalvalue);
console.log(Array.isArray(finalvalue));

// =====================================================
// to convert argument object into array
function test3() {
    return arguments
}
let w = test3("js", "react", "css")
console.log(w);//Arguments(3) ['js', 'react', 'css', callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(Array.isArray(w))
    // ! it is a array like object not a pure array
let finalArray = [...w]// we use spread operator to convert array like object to pure array
console.log(finalArray)
console.log(Array.isArray(finalArray));

//! Arrow function:Arrow functions don't bind an arguments object to their body
//!error:Uncaught ReferenceError: arguments is not defined
// let y = () => {
//     return arguments// we can not use the argument object
// }
// let c = y("hi", "Hello")
// console.log(c);/

// ====================================================
// in rest parameter o/p always Pure Array
// Anonymous function
let Anonymousfun = function (...restpara) {
    return restpara;
}
let test1=Anonymousfun("shashi","harish","swroop")
console.log(test1);//(3) ['shashi', 'harish', 'swroop']
console.log(Array.isArray (test1))//true

// // arrow function
let arrowfun = (...rest) => {
  return rest
}
let test2=arrowfun("shashi","harish","swroop")
console.log(test2);//o/p (3) ['shashi', 'harish', 'swroop']
console.log(Array.isArray (test2));//true

// rest parameter is introduce in es6 to overcome the argument object.

// without rest parameter. we should mention all the parameter
let r = (username, password, html, css, js, react) => {
    return {username,password,html,css,js,react}
}
let s = r("shashi", "shashi123", "html", "css", "js", "react")

console.log(s);

// // with rest parameter
//! rules for rest parameter:
//!rest parameter should be used at last.we can not used at first
// ! In object we can use only one rest parameter. if we use we get undefined
let k = (username, password,...rest) => {
  return { username, password,...rest };
};
let l = r("shashi", "shashi123", "html", "css", "js", "react");
console.log(k())//{username: undefined, password: undefined}
console.log(l);//{username: 'shashi', password: 'shashi123', html: 'html', css: 'css', js: 'js', …}
// if we are not passing variable
// difference between split and spread

// split
// advantage of split :we can split letter[""],word[" "],sentence["  "]
let u = "shashi is a good trainer"
let stringtoArray = u.split("")
let stringtoArray1 = u.split(" ");
let stringtoArray2 = u.split("  ");
console.log(u)
console.log(stringtoArray);
console.log(stringtoArray1);
console.log(stringtoArray2);

// es6 feature try with spread
let trywithspread = [...u]
console.log(trywithspread);


// ===========================================
// To add the array
// spread operator is used to add the array.

let frontEnd = ["html", "css", "js", "react", "angular"]
let backEnd = ["nodejs", "expressjs", "nextjs", "mongodb", "socket.io", "aws"]
let fullstack = frontEnd.concat(backEnd);
console.log(fullstack);//(11) ['html', 'css', 'js', 'react', 'angular', 'nodejs', 'expressjs', 'nextjs', 'mongodb', 'socket.io', 'aws']

// spread way
let spreadway = [...frontEnd, ...backEnd]
console.log(spreadway)//(11) ['html', 'css', 'js', 'react', 'angular', 'nodejs', 'expressjs', 'nextjs', 'mongodb', 'socket.io', 'aws']

// =========================================================

// return keyword

// implicit return: a function return a value without return keyword.it is possible in arrow function only.
// explicit: a function return the value with return key word.

// explicit with writting  string with return keyword
let f =function test5() {
    return "shashi"
}
console.log(f())
// implicit without return keyword writting string
let g =()=>"shashi"// no need to mention the return keyword
console.log(g());

// Explicit with return keyword
let g2 = () =>{return "shashi" } ; //  mentioned the return keyword 
console.log(g2());
// =================================================================
//explicit with writing  array
let f1 = function (){
  return ["shashi", "harish"]; //(2) ['shashi', 'harish']
};
console.log(f1());

//implicit with writing array
let g1 = () => ["shashi","swroop"]; //(2) ['shashi', 'swroop'] no need to mention the return keyword

console.log(g1());
// ========================================================================
// explicit with object

function test5(){
    return {
        username: "shashi",
        password: "1234",
    }
}
console.log(test5());//{username: 'shashi', password: '1234'}
// we can assign to a variable and we can call that variable
// console.log(u1());//o/p {username: 'shashi', password: '1234'}

let Arrowwithfun = () => {
    return {username:"shashi",password:"12324"}
}
console.log(Arrowwithfun())


// implicit : because compliler will be in confusion because {} is for object or block.
// to overcome that we use (). know it is a function object
let arrowwithfun1 = () => ({ username: "shashi", password: "12324" });

console.log(arrowwithfun1());//{username: 'shashi', password: '12324'}

// passing value as argument and implicitly return the value
// using string
let strpass = val => val
console.log("manish")//manish

// using array
let arr = (...val) => val
console.log(arr("html", "css", "js"));//(3) ['html', 'css', 'js']

// using object
let obj = ({ ...val }) => val
console.log({ username: "shashi", password: 1234 })//{username: 'shashi', password: 1234}


// passing value as a argument and explicitly convert
//nested named function with explicit return
// nested function
function parent() {
    return function () {
    console.log("i am child here")
    }
}
parent()();

//nested arrowfunction with explicit return

let ArrowwithExplicit = () => {
    return () => {
        console.log("child here");
    }
}
ArrowwithExplicit()()

// Arrowfunction with implicitly written without return keyword
// implicit return with function
let arrowwithimpilicit = () => () => console.log("child here with implicitly")
arrowwithimpilicit()();

// ========================================================

// with return value explicitly
let ArrowwithExplicit1 = () => {
  return val=> {
      return val;
  };
};
let val= ArrowwithExplicit1()("shashi");
console.log(val)

// withImplicit

let ArrowwithImplicit = () => val => val
let val1 = ArrowwithImplicit()("Shashi")
console.log(val1);
// ==============================================
// we can reduce the character
// incase of no parameter no need to mention the paranthsis ()
let p =_=> "shashi"
console.log(p());

// using paranthsis
let p1 = () => "shashi";
console.log(p1());

// if we have multiple line we use flowerbraces{}
// if we want to write multiple line we use backticks ie:`  `
let test6 = _ => {
    return `hello
friends
how are you`
}
 
console.log(test6())
// in case of " " it is not possible
let y = () => (`<h1>hello</h1>
<p>friends</p>`)
console.log(y());


// ===========================================
// creating construction function: we should go with normal function.
// because this keyword not mapping the current object in arrow function can not create a constructor

function User(name, age, company) {
    this.name = name,
        this.age = age;
    this.company = company;
}

let User1 = new User("Swaroop", 24, "ty")
console.log(User1)

let User2 = new User("Manu", 25, "tyss")
console.log(User1,User2);
// =====
// Creating function using Arrowfunction it is not possible because this keyword refers to the window object
// example

// let UserWithArrow = (name, age, company) => {
//     this.name = name;
//     this.age = age;
//     this.company = company;
// }

// let user1 = UserWithArrow("manu", 30, "TYSS")
// console.log(user1)//undefined
// ==========================

function employeeDetails(eName,id,...rest) {
    this.eName = eName;
    this.id = id;
    this.rest = rest;
}
let empdetails =new employeeDetails("Swaroop", 24, "12 oct 1998", "Belagam", "B-tech", "2Yrs")
console.log(empdetails);