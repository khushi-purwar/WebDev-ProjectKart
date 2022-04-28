const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('message');
const messagecontainer = document.querySelector(".box");


var audio = new Audio('sound.mp3');


const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    if (position == 'left') {

        audio.play();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`you: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});

const Name = prompt("Enter your name to join");

socket.emit('new-user-joined', Name);

socket.on('user-joined', Name => {
    append(`${Name} joined the chat`, 'right');
});

socket.on('recieve', data => {
    append(`${data.Name} : ${data.message}`, 'left');
});

socket.on('left', Name => {
    append(`${Name} : left the chat`, 'left');
});