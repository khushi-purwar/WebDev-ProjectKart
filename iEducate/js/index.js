let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let rightnav=document.querySelector('.rightnav');
let leftnav=document.querySelector('.leftnav');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-list');
    rightnav.classList.toggle('v-list');
    leftnav.classList.toggle('v-list');
});
