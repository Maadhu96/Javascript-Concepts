// Using the Object() constructor
var a = new Object()
a.name = "Swaroop";
a.id = 1234;
a.company = "tyss";
console.log(a)

// =================
// Using Object.Create() Method
// This method creates a new object extending the prototype object passed as a parameter.
// either we should pass null or extending the prototype.

var b = Object.create(null)//we should mention null or {}
console.log(b);//{}

var b1 = Object.create({});
console.log(b1);
b1.name = "manoj";
console.log(b1)
// console.log(a);


// ==========================
//Using a Function constructor

var obj = function (name,id) {
    this.name = name
    this.id=id
} 

let c = new obj("swaroop", 1234)
console.log(c);

// ==========================
// class constructor
class StudentDetails {
  constructor(eName, id, Place) {
    (this.eName = eName), (this.id = id), (this.Place = Place);
  }
}
let s1 =  new StudentDetails("Swaroop", "TYC111", "Mysore");
let s2 = new StudentDetails("Siddarth", "TYC222", "Banglore");
let s3 = new StudentDetails("Manoj", "TYC333", "Banglore");
s3.ph = 7760109887;

console.log(s1);
console.log(s2);
console.log(s3);