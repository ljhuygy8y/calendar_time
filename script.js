let year = document.querySelector(".year");
let mounth = document.querySelector(".mounth");
let day = document.querySelector(".day");
let dayofweek = document.querySelector(".dayofweek");

let today = new Date();
console.log(today);

let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daus = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

year.innerHTML = today.getFullYear();
mounth.innerHTML = mounths[today.getMonth()];
day.innerHTML = today.getDate();
dayofweek.innerHTML = days[today.getDay()];



