// let btn=document.getElementById("btn")
// let container = document.querySelector("#container")

// console.log(container);
// event method way

// btn.addEventListener("mouseenter", event => {
//   // console.log("active");
//   btn.style.background = "red";
//   container.style.transform="translateX(100vw)";
// })

// btn.addEventListener("mouseleave", event => {
//   btn.style.background = "green";
//   container.style.transform = "translateX(-100vw)";
//   // console.log("inactive");
//   // container.style.dispay = "none";
// });


// ===================================================================================

//event method

// let btn=document.getElementById("btn")
// // mouse event
// btn.addEventListener("click", e => {
// console.log(e);//to find prototype:mouse

//   if (e.pointerType === "mouse")//pointerType is getting from inbuild property
//   {
//     console.log("mouse event");
//   }
//   else {
//   console.log("touch event")
//   }
// })

// =========================================
// keyevents
// let input=document.querySelector("input")
// input.addEventListener("keyup", e => {
//   // console.log(e);
//   if (e.type === "keyup") {
//     console.log("this is a keyup event")
//   }
//   else {
//     console.log("this is not a keyup event");
//   }
// });

// =========================
// keydown event
// input.addEventListener("keydown", e => {
//   console.log(e);
//   if (e.type === "keydown") {
//     console.log("this is a keydown event");
//   } else {
//     console.log("this is not a keydown event");
//   }
// });

// =============================================
// Enter keyboard event

// let input = document.querySelector("input")

// let btn = document.querySelector("btn")

// input.addEventListener("keyup", e => {
//   console.log(e);
//   if (e.key === "Enter") {
//     console.log(e.key);
//     console.log("enter key presses")
//   }
  // or
  //  if (e.keyCode === 13) {
  //    console.log(e.key);
  //    console.log("enter key presses");
  //  }
// })

// =========================================
// Target we can fetch the value
let input = document.querySelector("input");
let btn = document.querySelector("button");

input.addEventListener("keyup", e => {
  // console.log(input);
  // after fill this give enter to show the o/p in console
  if (e.key === "Enter") {
    console.log(e.target.value);//inbuilt property>target>value

  }
  // or depricated
  // if (e.keyCode === 13) {
  //   console.log(e.key);
  //   console.log(e.target.value);
  // }
});
