let year = document.querySelector(".year");
let mounth = document.querySelector(".mounth");
let day = document.querySelector(".day");
let dayofweek = document.querySelector(".dayofweek");
let hour = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let second = document.querySelector('.second');

setInterval(() => {
    let curreTime = new Date();
    hour.innerHTML = (curreTime.getHours()<10?"0":"") + curreTime.getHours();
    minutes.innerHTML = (curreTime.getMinutes()<10?"0":"") + curreTime.getMinutes();
    second.innerHTML = (curreTime.getSeconds()<10?"0":"") + curreTime.getSeconds();
},1000);

let today = new Date();
console.log(today);

let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
year.innerHTML = today.getFullYear();
mounth.innerHTML = mounths[today.getMonth()];
day.innerHTML = today.getDate();
dayofweek.innerHTML = days[today.getDay()];








