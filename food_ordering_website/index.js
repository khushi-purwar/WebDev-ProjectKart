burger=document.querySelector('.burger');
pic=document.querySelector('.pic');
navlist=document.querySelector('.navlist')
nav=document.querySelector('.nav');

burger.addEventListener('click',()=>{
    nav.classList.toggle('h-list');
    navlist.classList.toggle('v-list');
    pic.classList.toggle('v-list');
})