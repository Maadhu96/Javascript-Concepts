let btn=document.querySelector("#btn")
let color=document.querySelector("#color")
let body=document.querySelector("body")
const changeColor = function () {

  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  const hex = "#" + result.join("");
  console.log(hex)
  color.style.backgroundColor=`${hex}`
};


