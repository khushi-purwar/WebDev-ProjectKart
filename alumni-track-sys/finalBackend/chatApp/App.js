


const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });
var express = require('express')
var cors = require('cors')
var app = express()

 
app.use(cors())

const users = {}

io.on('connection' , socket =>{
    socket.on('new-user-joined' , name => {
        console.log("user Joined : " , name)
        users[socket.id] = name ;
        socket.broadcast.emit('user-joined' , name)
    })

    socket.on('send' , message => {
      console.log("msg" , message)
        socket.broadcast.emit('receive' , {message: message , name: users[socket.id]})
    });

})