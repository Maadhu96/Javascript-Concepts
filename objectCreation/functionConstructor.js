class StudentDetails {
    constructor(eName, id, Place) {
        this.eName = eName,
            this.id = id,
            this.Place = Place;
    }
}
let s1 = new StudentDetails("Swaroop", "TYC111", "Mysore")
let s2 = new StudentDetails("Siddarth", "TYC222", "Banglore");
let s3 = new StudentDetails("Manoj", "TYC333", "Banglore");
s3.ph=7760109887
 
console.log(s1)
console.log(s2);
console.log(s3);

// To print the name
let demo1 = [s1.eName, s2.eName, s3.eName]
console.log(demo1)
//  Using for-of
for (let x of demo1) {
    console.log(x)
}
// using map method

demo1.map(val => { return val })
console.log();



// ==========================================
function StudentDetails(eName,id,Place) {
    this.eName = eName,
   this.id = id,
   this.Place=Place
}
let s4 = new StudentDetails("Swaroop", "TYC111", "Mysore")
let s5 = new StudentDetails("Siddarth", "TYC222", "Banglore");
let s6 = new StudentDetails("Manoj", "TYC333", "Banglore");
s4.ph=7760109887

console.log(s4)
console.log(s5);
console.log(s6);

// To print the name
let demo2 = [s1.eName, s2.eName, s3.eName]
console.log(demo1)
//  Using for-of
for (let x of demo1) {
console.log(x)
}
// using map method

demo1.map(val => { return val })
console.log();







