let mainsection = document.getElementById('mainsection')
let btn = document.getElementById("btn")

btn.onclick = function () {
    if (mainsection.className === "active") {
        mainsection.removeAttribute("class");
        mainsection.setAttribute("class", "inactive");
    }
};