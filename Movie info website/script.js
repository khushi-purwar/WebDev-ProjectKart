console.log('hello');
var intro_sound = new Audio('Netflix-Intro-Sound-Effect.mp3')


//for intro page
const para = document.querySelector('.para');
const next = document.querySelector('.next');

setTimeout(() => {
    para.style.display='block';
    next.style.display='block';
    intro_sound.play();
}, 8000);



next.addEventListener('click',()=>{
    location.href='signup.html';
})