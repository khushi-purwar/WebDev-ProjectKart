import React, { useState } from "react";
import "./ChatBox.css";
import ReactDOM from "react-dom";
import wallpaper from './wallpaper.jpeg'

// import MsgInput from './MsgInput'
import Button from "@mui/material/Button";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8000";

const socket = socketIOClient(ENDPOINT);



export default function ChatBox() {
//   const name = prompt("Enter your name to join : ");
// socket.emit("new-user-joined", 'College');
  const [msg, setMsg] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(msg);

    // append(, "right");
    // console.log("In appnde func",message)
    const messageElement = document.createElement("div");
    messageElement.innerText = `You: ${msg}`;
    messageElement.classList.add("message");
    messageElement.classList.add("right");
    let a = document.getElementById("chaty");
    a.appendChild(messageElement);
    socket.emit("send", msg);

  };
  const handleinput = (event) => {
    setMsg(event.target.value);
  };

  // const form = document.getElementsByClassName("InputForm");
  // const messageInput = document.getElementsByClassName("messageInput");
  const ChatBox = document.querySelector(".ChatBox");

  const append = (message, position) => {
 
  };

  socket.on("user-joined", (name) => {
    // append(, "right");
    // console.log("In appnde func",message)
    const messageElement = document.createElement("div");
    messageElement.innerText = `${name} joined the chat`;
    messageElement.classList.add("message");
    messageElement.classList.add("right");
    let a = document.getElementById("chaty");
    a.appendChild(messageElement);
  });
  socket.on("receive", (data) => {
    // append(`${data.name} : ${data.message}`, "left");
    // console.log("In appnde func",message)
    const messageElement = document.createElement("div");
    messageElement.innerText = `${data.name} : ${data.message}`;
    messageElement.classList.add("message");
    messageElement.classList.add("left");
    let a = document.getElementById("chaty");
    a.appendChild(messageElement);
    
  });


  return (
   
    <div  style={{marginLeft: '300px' , width : '1225px' , paddingTop : '40px' , background : '#F4F5F7'}} >
      <div className="boxHeading">The Alumni Connect</div>
      <div className="ChatBox"  id="chaty">
        {/* <div className="message right"> Sahil : hi , how are you ? </div>
        <div className="message left"> Yash : hi , I am fine . </div>

        <div className="message right"> Sahil : hi , how are you ? </div>
        <div className="message left"> Yash : hi , I am fine . </div> */}
      </div>
      <br />
      <div className="send">
        <form action="" className="InputForm" onSubmit={handleSubmit}>
          <div style={{ display: "flex", marginLeft: "400px" }}>
            <input
              style={{ width: "350px" , border:'2px solid black' , borderRadius : '10px'  , marginLeft : '23px' }}
              className="messageInput"
              type="text"
              placeholder="Type Somthing ... "
              onChange={handleinput}
            />

            <Button type="submit" variant="contained">
              Send
            </Button>
          </div>
        </form>
      </div>

      <br />
      <br />
      <br />

      </div>
    
  );
}
