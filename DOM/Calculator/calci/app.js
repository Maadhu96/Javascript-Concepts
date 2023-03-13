let input1 = document.getElementById("inp1");
let result = document.getElementById("res")
let number1 = document.querySelector("#num1").value

let div = document.querySelector("#num")
div.addEventListener("click",index => {
    let val = index.target.innerText
    console.log(val);
    input1.value+=val;
})






















// let add = document.getElementById("add");
// add.onclick = function (e) {
//     let input1 = Number(document.getElementById("inp1").value);
 
//     let input2 = Number(document.getElementById("inp2").value);
   
//  document.getElementById("res").value = input1 + input2;
// };

// sub.onclick = function (e) {
 
//   let input1 = Number(document.getElementById("inp1").value);

//   let input2 = Number(document.getElementById("inp2").value);

//   document.getElementById("res").value = input1 - input2;
// };

// multi.onclick = function (e) {

//   let input1 = Number(document.getElementById("inp1").value);

//   let input2 = Number(document.getElementById("inp2").value);

//   document.getElementById("res").value = input1 * input2;
// };

// divi.onclick = function (e) {
//     let num1 = document.getElementById("num1")
//     let num2 = document.getElementById("num2");
    
//   document.getElementById("res").value = num1 /num2;
// };

// num1.onclick = function (e) {
//     console.log(e)
//     (document.getElementById("inp1"))=num1.value

//     // Number(document.getElementById("inp2"))=num2.value
// }

