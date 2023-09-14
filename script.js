// countdown

const countdown = document.getElementById("Countdown");
const dayscount = document.getElementById("days");
const hourscount = document.getElementById("hours");
const minutescount = document.getElementById("minutes");
const secondscount = document.getElementById("seconds");

function countDown() {
    const timeClass = new Date();
    const timeChange = new Date("Sep 15,2023 15:40:00");
    const timeRemain = timeChange - timeClass;
    const days = Math.floor(timeRemain / (1000*60*60*24));
    const hours = Math.floor((timeRemain % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeRemain % (1000*60*60))/(1000*60));
    const seconds = Math.floor((timeRemain % (1000*60))/1000);

    dayscount.innerHTML = days;
    hourscount.innerHTML = hours;
    minutescount.innerHTML = minutes;
    secondscount.innerHTML = seconds;
}

// document.writeln("<b>Welcome</b>");

countDown();
setInterval(countdown(),1000);
