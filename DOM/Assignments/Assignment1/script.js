let main = document.getElementById("mainContainer");
let men1 = document.querySelector(".men1");
let men2 = document.querySelector(".men2");
let men3 = document.querySelector(".men3");
let men4 = document.querySelector(".men4");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let link = document.querySelectorAll(".links");
console.log(link);

men1.onclick = function () {
  let tog = box1.classList.toggle("box1");
  if (tog == true) {
    box1.style.transform = "translateX(100vw)";
    box1.style.transition = "all 2s";
    men1.innerText = ">>";
    link.forEach(val => {
      val.style.color = "bisque";
      val.style.fontWeight = "800";
    });
  } else {
    box1.style.transform = "translateX(-100vw)";    
    men1.innerText = "Menu1";
    // box1.style.left = "-100%";
  }
};
men2.onclick = function () {
  let tog = box2.classList.toggle("box2");
  if (tog == true) {
    box2.style.transform = "translateX(100vw)";
    box2.style.transition = "all 2s";
    men2.innerText = ">>";
    link.forEach(val => {
      val.style.color = "greenYellow";
      val.style.fontWeight = "800";
    });
  } else {
    box2.style.transform = "translateX(-100vw)";
    men2.innerText = "Menu2";
  }
};
men3.onclick = function () {
  let tog = box3.classList.toggle("box3");
  if (tog == true) {
    box3.style.transform = "translateX(100vw)";
    box3.style.transition = "all 2s";
    men3.innerText = ">>";
    link.forEach(val => {
      val.style.color = "black";
      val.style.fontWeight = "800";
    });
  } else {
    box3.style.transform = "translateX(-100vw)";
    men3.innerText = "Menu3";
    // box3.style.left = "-100%";
  }
};
men4.onclick = function () {
  let tog = box3.classList.toggle("box4");
  if (tog == true) {
    box4.style.transform = "translateX(100vw)";
    box4.style.transition = "all 2s";
    men4.innerText = ">>";
    link.forEach(val => {
      val.style.color = "white";
      val.style.fontWeight = "800";
    });
  } else {
    box4.style.transform = "translateX(-100vw)";
    men4.innerText = "Menu4";
    // box4.style.left = "-100%";
  }
};
