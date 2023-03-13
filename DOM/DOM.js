console.log(window);
// alert("i am alert")
// window.alert("i am window alert")
// console.log(document.body)

// // dom methods
let h1 = document.getElementsByTagName("h1")
console.log(h1[0].innerHTML);
console.log(h1[1].innerText);
console.log(h1[2].innerHTML);
// =============================================================
// getElementById()
// let element = document.getElementById("demo")
// element.style.backgroundColor = "red";
// console.log(element);

// ====================================
// getElementByClassName()
// let element =document.getElementsByClassName("cls");
// console.log(element);
// element.style.color = "red";
// element.style.backgroundcolor= "yellow";


// ====================================
// getElementByTagName()
// let t = document.getElementById("demo1")
// let kk = demo1.getElementsByTagName("h1")
// console.log(kk)

// ===========================================
// getElementByName()
// let o = document.getElementsByName("name");
// o[3].style.backgroundColor = "green";
// console.log(o);

// =======================================================================
// let testquery = document.querySelector("#query")
// console.log(testquery)

// let testquery1 = document.querySelectorAll("#query ~ p")
// console.log(testquery1);
// testquery1[2].style.color = "red";

// =================================

function fun() {
    const test = window.open()
    test.document.open()
    test.document.innerHTML(`<h1>Hello</h1>`)
}

// function fun() {
//     window.close()
// }
