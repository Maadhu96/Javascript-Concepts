
// class Parent {
//     constructor(name,dob,gender) {
//         this.name = name;
//         this.dob = dob;
//         this.gender = gender;
//     }
// }
// let p = new Parent("Swaroop", "12/12/1998", "Male")
// console.log(p)

// class Child extends Parent{
//     constructor(name, dob, gender, state, pincode) {
//         super(name, dob, gender, state, pincode);
//         this.state = state;
//         this.pincode = pincode;
//     }
// }
// let c = new Child("Manoj", "28/09/1998", "Male", "Karnataka", 570008)
// console.log(c)

// class GrandChild extends Child {
//   constructor(name, dob, gender, state, pincode,phone) {
//     super(name, dob, gender, state, pincode);
//     this.phon =phone;
//   }
// }
// let gc = new GrandChild("Manoj", "28/09/1998", "Male", "Karnataka", 570008,7760109887);
// console.log(gc);


// ! Practice 22/12/2022

class Animal{
  constructor(name){
    this.speed=0;
    this.name=name
  }
  run(speed){
this.speed=speed
alert(`${this.name} run with the speed ${this.speed}`)
  }
  stop(){
    alert(`${this.name} stand still`)
  }
}

class Rabbit extends Animal{
  hide(){
    alert(`${this.name} hides!`)
  }

  stp(){
    super.stop()
    this.hide()
  }
}

let inheritedValue=new Rabbit("Brown Rabbit")
inheritedValue.run(5)
inheritedValue.stp()
