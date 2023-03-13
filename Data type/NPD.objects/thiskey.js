// this key word

console.log(this);
console.log(window);
console.log(this == window);


// ==================
// use strict : if use the use strict mode "this" keyword will not work
// incase of window we will get the output.

var a = 10
function z(){
   var a = 30;// we should mention the variable here
    console.log(a);
    console.log(this.a);
}
z()

var m = 1;
function l() {
    var m = 2
    console.log(m);
    console.log(this.m);
    function h() {
        console.log(m);
        console.log(this.m);
    }
    h()
}
l()