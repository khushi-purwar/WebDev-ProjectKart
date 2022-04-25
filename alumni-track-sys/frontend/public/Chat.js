
import socketIOClient from "socket.io-client";

const ENDPOINT = 'http://localhost:8000';

const socket = socketIOClient(ENDPOINT);

const form = document.getElementsByClassName("InputForm");
const messageInput = document.getElementsByClassName("messageInput")
const ChatBox = document.querySelector(".ChatBox")

const append = (message , position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message ;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    ChatBox.appendChild(messageElement);
} 

const  name = prompt("Enter your name to join : ")
socket.emit('new-user-joined' , name)

socket.on('user-joined' , name => {
       append(`${name} joined the chat` , 'right')
})
