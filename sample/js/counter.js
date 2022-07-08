const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");

const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");
// console.log(items)
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// let myDate = new Date(2022, 2, 15, 11, 35, 0);
let myDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = myDate.getFullYear();
const hours = myDate.getHours();
const minutes = myDate.getMinutes();

let month = myDate.getMonth();
month = months[month];
const date = myDate.getDate();

let day = weekdays[myDate.getDay()];

giveaway.textContent = `Election start on ${day}, ${date} ${month} ${year} ${hours}: ${minutes}am`;

const futureTime = myDate.getTime();

function getRemainingTime() {
    const timeNow = new Date().getTime();
    const remainingTime = futureTime - timeNow;
    // console.log(remainingTime);
    // note that
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min etc

    // values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(remainingTime / oneDay);
    let hours = Math.floor((remainingTime % oneDay) / oneHour);
    let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
    let seconds = Math.floor((remainingTime % oneMinute) / 1000);

    function format(data) {
        if (data < 10) {
            return (data = `0${data}`);
        }
        return data;
    }


    // set values
    const values = [days, hours, minutes, seconds]
    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);

    });
    if (remainingTime < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this give has expired</h4>`;
    }
}

// counting down
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();