// Digital calculator
setInterval(showtime, 1000);
function showtime(){
    let time = new Date()
  let hr=  time.getHours();
   let min= time.getMinutes();
   let sec= time.getSeconds();
    am_pm = "AM";

    if (hr > 12) {
        hr = hr - 12;
        am_pm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        am_pm="AM"
    }
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 let currentTime = hr + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showtime();
    