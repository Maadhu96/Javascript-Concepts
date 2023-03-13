let displaySection = document.querySelector("#current-display .playing-video");
let displaySectionHeading = document.querySelector(
  "#current-display .video-Heading"
);
let listSection = document.querySelectorAll(
  "#Thumbnail-list .video-list video"
);
let heading = document.querySelectorAll("#Thumbnail-list .video-list .heading");

listSection.forEach(video => {
    video.onclick = e => {
      // console.log(e)
    let source = e.target.getAttribute("src");
      let sourceHeading = e.target.getAttribute("heading");
  
        console.log(sourceHeading);
      displaySection.setAttribute("src", `${source}`);
      displaySectionHeading.setAttribute("")
  };
});
let x = new Date()
// let a=(x.getTime())
let a=(x.getHours());
let b=(x.getMinutes())
let c = (x.getSeconds());
let d = (x.getDay())

let arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let div = document.getElementById("time-demo")
console.log(div);
div.innerHTML = `${arr[d]}  ${a}: ${b}:${c}`;