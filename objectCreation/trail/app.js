// function StudentDetails(Name,Id,College) {
//     this.Name = Name;
//     this.Id = Id;
//     this.Class = College
    
// }
// let s1=new StudentDetails("Swaroop", 123, "MIT")//new keyword create the object ie:function constructuion
// // new key is used to convert block scope into global scope
// console.log(s1)
// console.log(s1.Name);//Here Name is global scope


// ==================
// using new keyword
let a=new Object()
a.name="swaroop"
a.id=123
console.log(a)


// ====================
// using Object.create() method
var b1=Object.create({})// or null
console.log(b1)

// ==========================

// using the function construction

let  obj=function (name,id,company){
this.name=name
this.id=id
this.company=company
}
let obj1=new obj("swaroop",143,"tyss")
console.log(obj1)


// ==========================
// class constructor
class student{
  constructor(Sname,rollno,college){
    this.Sname=Sname,
    this.rollno=rollno,
    this.college=college
  }
}
let s1=new student("Manoj",143,"CIT")
s1.ph=7760109887
console.log(s1)