

switch (2) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thusrday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}
// =============================================
let x = new Date();//new keyword is a constructor that is called new date constructor method
console.log(x);

console.log(x.getTime());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());
console.log(x.getUTCDay());

let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(arr);

// console.log(x.indexOf("Sunday"));
console.log(arr[3]);

console.log(arr[x.getDay()]);

let months = ["jan", "feb","mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

console.log(months[x.getMonth()]);//if we call the  current month will be displayed
console.log(months[0]);// we can fetch the month by giving the index value

// =======================================================================
// Assignment
// Q1:My name is Madappa, Attending js class on wednesday at 11:07 AM in the sept month of 2022 year.

// let k = new Date()

// console.log(k);

console.log(
  `My name is Madappa, Attending js class on ${arr[0]} at ${
    x.getHours()}:${x.getMinutes()}AM in the ${months[x.getMonth()]} month of ${x.getFullYear()} year.`
);
// ===============================
let nam = "Madappa"
let o = new Date()
let y = o.getHours()
let z = o.getMinutes()
let s = o.getFullYear()
let l = o.getDay()

// ==============================================
// Using if else condition
let k = new Date()
console.log(k);
y=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

if (y["Monday"] || y["Friday"]) {
  console.log("All the temples is fill ");
}
else
{
  console.log("No one is there");
}

let n = k.getMinutes()
if (n % 2 == 0) {
  console.log("hello");
}
else {
  console.log("Hi");
}
// ======================================================
