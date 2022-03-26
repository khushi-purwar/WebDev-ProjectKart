document.querySelector('#signup-button').addEventListener('mouseover', () => document.querySelector('#signup-menu').classList.remove('hidden'));
document.querySelector('#signup-button').addEventListener('mouseout', () => document.querySelector('#signup-menu').classList.add('hidden'));

document.querySelector('#toggle-main-menu').addEventListener('mouseover', () => document.querySelector('#main-menu').classList.remove('hidden'));
document.querySelector('#toggle-main-menu').addEventListener('mouseout', () => document.querySelector('#main-menu').classList.add('hidden'));