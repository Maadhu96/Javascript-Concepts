// let array = [1, 2, 4, 10, 100];

// // let oldArray = array.forEach(val => val).reverse();
// // console.log(oldArray);

// let newArray = array
//     .map(val => val)
//   .reverse((a, b) => {
//     let test = a + b;
//     console.log(typeof test);
//     return test;
//   });
// console.log(newArray)

// ======================================
// Accessing the section and class

// let container = document.getElementsByClassName('container')
// convert array like object into array
// Array.forEach()
// let convertIntoArray = Array.from(container);
// console.log(convertIntoArray);
// convertIntoArray.forEach((val, i) => {
//     console.log(val);
//     val.textContent = `Demo-${i + 1}`;
// })

// ===========================================================
// to target particular section
// using the id and className
// let mainsection = document.getElementById('mainsection')

// let container = mainsection.getElementsByClassName('container')

// console.log(container);
// let convertIntoArray = Array.from(container);
// console.log(convertIntoArray);
// convertIntoArray.forEach((val, i) => {
//     console.log(val);
//     val.textContent = `Demo-${i + 1}`;
// })

// ============================================================
// using the querySectorAll

// let sectionBlock = document.querySelector("#mainsection")

// sectionBlock.querySelectorAll(".container").forEach((val, i) => {
//     val.innerHTML = `Demo-${i}`
// })

// ==========================================================
// to give the color for the content inside the element
// give className and Id  in js file and apply the css in css file
let mainsection = document.getElementById('mainsection')
mainsection.querySelectorAll(".container:nth-child(even)").forEach(val => {
    val.className = "even";
    val.innerHTML = 'even'
})

mainsection.querySelectorAll(".container:nth-child(odd)").forEach(val => {
  val.className = "odd";
  val.innerHTML ='odd';
});
// ========================================================
// apply css to the even &odd number by using forEach

// let mainsection = document.getElementById("mainsection");
// mainsection.querySelectorAll(".container").forEach((val, i) => {
//   // val.className = "even";
//   // val.innerHTML = 'even'
//   if (i % 2 == 0) {
//     val.className = "even";
//     val.innerHTML = "even";
//   } else {
//     val.className = "odd";
//     val.innerHTML = "odd";
//   }
// });