let grandparent = document.querySelector(".grandparent")
let parent = document.querySelector(".parent")
let Child = document.querySelector(".child")


Child.addEventListener("click", e => {
    console.log("i am child")
},{ capture: true }
);
parent.addEventListener(
  "click",
    e => {
      e.stopPropagation()// it is used to stop the propagation   
    console.log("i Am a parent");
  },
  { capture: true }
);
grandparent.addEventListener(
  "click",
  e => {
    console.log("i am a grand parent");
  },
  { capture: true }
);