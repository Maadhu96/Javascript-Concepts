// let form = document.querySelector("#main-form");
// let input1 = document.querySelector("#email");
// let input2 = document.querySelector("#password");
// let btn = document.querySelector("button");
// let spn1 = document.querySelector("span");
// let spn2 = document.querySelector("span");


// // preventDefault() method
// form.addEventListener("submit", e => {
//   console.log(e);
//   e.preventDefault();
//   let email = e.target[0].value;
//   let password = e.target[1].value;
//   if (email === "" || password === "") {
//     if (email === "") {
//       input1.style.border = "2px solid red";
//       spn1.innerText = "*Please fill this field";
//     }
//     if (password === "") {
//       input2.style.border = "2px solid red";
//       spn2.innerText = "*Please fill this field";
//       spn1.innerText = "";
//     }
//   } else {
//     console.log("filled");
//     input1.style.border = "2px solid black";
//     spn1.innerText = "";
//     input2.style.border = "2px solid black";
//       spn2.innerText = "";
//   }
// });

// ================================================
// submit event with form validation
let form = document.querySelector("form")
let span1 = document.querySelector("#spn1")
let span2 = document.querySelector("#spn2");


form.addEventListener("submit", e => {
  console.log(e);
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  if (email === "" && password === "") {
    span1.innerHTML="These fields are required"
  }
  if (password < 6) {
    span2.innerHTML = "minimum 6 characters";
  }
})