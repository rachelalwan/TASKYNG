function showTime() {
    const today = new Date();
    let hourIndicator = today.getHours() / 12 === 1 ? "AM" : "PM";

    let mins = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    let seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

    const time = (today.getHours() % 12) + ":" + mins + ":" + seconds + " " + hourIndicator;

    document.getElementById("time").innerHTML = time;
}

function showDate() {
    const today = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

    const date = months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear();

    document.getElementById("date").innerHTML = date;
}

showTime();
showDate();
setInterval(showTime,1000);
setInterval(showDate, 1000);
