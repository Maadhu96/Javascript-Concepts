let audio = document.querySelector(".audio");
let img=document.getElementById("img")

// onclick is the property
img.onclick = function () {
    let toggle = audio.classList.toggle("audio");
    if (!toggle) {
        audio.play();
    }
    else {
        audio.pause();
    }
}