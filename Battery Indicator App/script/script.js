let percentage = document.querySelector(".percentage");
let percent = document.querySelector(".percent");

navigator.getBattery().then(function(battery){
    percentage.style.width=battery.level *100 + '%';
    percent.innerHTML = battery.level*100 + '%';
})


