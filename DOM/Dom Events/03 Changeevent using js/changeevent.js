// change event

let input = document.querySelector("input");
let btn = document.querySelector("button");
let span = document.querySelector("span");
// event handler
input.addEventListener("change", e => {
    if (e.target.value === "") {
        input.style.border = "2px solid red"
        span.classList.add("active");
        span.innerHTML = "This field is required";
    }
    else {
        input.style.border = "2px solid green"
        span.classList.remove("active");
        span.innerHTML=""
    }
})