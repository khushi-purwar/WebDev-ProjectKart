let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else
    {
        header.classList.remove('active');
    }
}



let countDate= new Date('december 31, 2022  00:00:00').getTime();

function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let seconds=1000;
    let minutes=seconds*60;
    let hour=minutes*60;
    let day=hour*24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));


    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}


setInterval(function(){
    CountDown();
},1000)