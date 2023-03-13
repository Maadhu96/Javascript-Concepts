let form = document.querySelector("form");
let div1 = document.querySelector("#divBlock1");
let div2 = document.querySelector("#divBlock2");
let span1 = document.querySelector("#name-output1");
let span2 = document.querySelector("#email-output2");
let span3 = document.querySelector("#password-output3");
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2");




form.addEventListener("submit", e => {
    console.log(e);
    e.preventDefault();
    let Username = e.target[0].value;
    span1.innerHTML = Username;
    let email = e.target[1].value;
    span2.innerHTML = email;
    let password = e.target[2].value;
    span3.innerHTML = password;
})
