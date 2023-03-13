let obj1 = {
    eName: "Sarala",
    id: 555,
    // Arrow function
    demo:()=>{
        console.log(this);//this keyword focus the widow object in arrow function
    },
};
console.log(obj1.demo());

let obj2 = {
    eName: "virala",
    id: 1486,
    // Anonymous function
    test: function () {
        console.log(this.eName);//this key word focus the current object not the window object
    },
};
console.log(obj2.test());
console.log(obj2);