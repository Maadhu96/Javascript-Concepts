
let text = document.getElementById("block")

let showBtn = document.getElementById('showBtn');
let hideBtn = document.getElementById('hideBtn');

// showBtn.onclick = function () {
//     text.classList.add("active")
//     text.style.display = "block";
// }

// hideBtn.onclick = function () {
//   text.classList.add("active");
//   text.style.display = "none";
// };

// ==================
// DOMTokenList.contains(): method

// showBtn.onclick = function () {
//     if (text.classList.contains("active")) {
//         text.style.display = "block";
//         text.style.background="yellow"
//     }
// }
// hideBtn.onclick = function () {
//   text.style.display = "none";
// };

// ==========================================
// DOMTokenList.toggle(): method

btn.onclick = function () {
    let toggle = text.classList.toggle("active"); 
    if (!toggle) {
        text.style.display = "block";
        text.style.backgroundColor = "yellow";
        text.style.fontSize="20px"
    }
    else {
        text.style.display = "none";
        text.style.fontSize = "20px";
        text.style.transform = "translate(100px)";
        text.style.transistion = "ease all 0.6s";
    }
}
