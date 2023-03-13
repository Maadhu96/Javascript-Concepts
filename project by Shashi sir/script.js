let dropdown = document.getElementsByClassName("hide")[0];
console.dir(dropdown)

// console.log(dropdown.classList.contains("dropdown")) 

function drop() {

    if (dropdown.className == "hide") {
        dropdown.removeAttribute("class");
        dropdown.setAttribute("class", "dropdown");
    }
    else {
        dropdown.removeAttribute("class");
        dropdown.setAttribute("class", "hide");
    }
}
drop()