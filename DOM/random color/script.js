let btn = document.querySelector("button")
let body=document.querySelector("body")
btn.onclick=function (event) {
    // document.body.style.background="red"
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    body.style.backgroundColor="rgb("+red+","+green+","+blue+")"
}