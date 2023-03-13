var a = 10//Global scope: we can call anywhere
let b = 20//Script scope: we can call anywhere
const c = 30
console.log(a);
console.log(b);
console.log(c);
//Block scope
{
    var d = 40//Global scope
    let e = 50
    const f = 60
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
console.log(d);
// console.log(e);
// console.log(f);


 //function scope
function x() {
    var g = 70
    let h = 80
    const i = 90
    console.log(g);
    console.log(h);
    console.log(i);
}
x()