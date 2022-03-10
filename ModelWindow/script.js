'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

for(let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click' , function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

// btnCloseModal.addEventListener('click' , function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click' , function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);

document.addEventListener('keydown' , function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});