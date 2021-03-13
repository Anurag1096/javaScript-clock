// alert("hi");
"use strict";

setInterval(getTime, 1000);

function getTime() {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let am_pm = "AM";

  //   console.log(time);
  //   console.log(year);
  //   console.log(hours);
  if (hours > 12) {
    hours = hours - 12;
    am_pm = "PM";
  }
  let ymd = `${day}/${month}/${year}`;
  let presentTime = ` ${hours}:${minutes}:${seconds} ${am_pm}`;
  document.querySelector(".fulInfo").innerHTML = ymd;
  document.querySelector(".clock1").innerHTML = presentTime;
}

getTime();
