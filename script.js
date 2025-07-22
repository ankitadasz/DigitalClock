let hour = document.getElementById("hrs");
let minute = document.getElementById("mins");
let sec = document.getElementById("secs");
let indicator = document.getElementById("ind");

function countDown() {
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();

 indicator.innerHTML =  hrs >= 12 ? "PM" :"AM";
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  hour.innerHTML = (hrs < 10 ? "0" : "") + hrs;
  minute.innerHTML = (min < 10 ? "0" : "") + min;
  sec.innerHTML = (secs < 10 ? "0" : "") + secs;
}

setInterval(countDown, 1000);
