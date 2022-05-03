let menu = document.querySelector('#menu');
let nav = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

let section=document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec  =>{

        let top=window.scrollY;
        let height= sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id=  sec.getAttribute('id'); 


        if (top >= offset && offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });
}