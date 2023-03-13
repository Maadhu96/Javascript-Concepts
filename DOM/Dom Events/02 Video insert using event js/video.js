// inserting the video using Event selector

let video = document.querySelector(".video")

let btn = document.querySelector(".btn")

btn.onclick = function () {
    let toggle = video.classList.toggle("video")
    if (!toggle) {
        video.play()
        this.innerHTML("Pause")
    }
      video.pause();
      this.innerHTML("Play");
}