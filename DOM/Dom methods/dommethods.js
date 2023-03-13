// dom methods

// let test = document.getElementById('demo')//only one

// console.log(test);

// let demo1 = document.querySelector('#test')

// console.log(demo1)

// console.log(typeof demo1);
// console.log(typeof test)//used to find the

// console.log(test.id)//test
// console.log(demo1.id);//demo

// ==================================

// let div = document.getElementById('div')//tagName //it returns html collections
// console.log(div)

// let divwithQuery = document.querySelectorAll("div")//css selector //it returns NodeList by default
// console.log(divwithQuery);


// =======================================
// getElementByTagName
// we should always select using index value

let div = document.getElementsByTagName("div")
// select individually by using index value
div[0].style.background = 'red';
div[1].style.padding = "10px";

// using traditional for loop
for (let i = 0; i < div.length; i++){
    div[i].style.background = 'red'
    div[i].style.padding = "5px";
    div[i].style.margin = "5px";
    div[i].style.color = "#ffff";
}
// using for-in

for (let i of div) {
    i.style.background = "crimson"
    i.style.padding = "10px";
    i.style.margin = "10px";
    i.style.color="#fff"
}


// // using forEach
[...div].forEach (val => { val.style.background='red' })
