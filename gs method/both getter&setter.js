class Parent{
    constructor(fName, lName, age, company) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.company = company;
    }
    get test() {
        return this.age;
    }
    set update(gender) {
       return this.gender=gender
    }
    
}
let p = new Parent("Swaroop", "Heremani", 23, "Tyss")
console.log(p)
// getter method to get the value
console.log(p.test);
// s=`${p.fName}${p.lName}`
// console.log(s);

// setter method to set the value
 p.update=  "Male"
console.log(p)