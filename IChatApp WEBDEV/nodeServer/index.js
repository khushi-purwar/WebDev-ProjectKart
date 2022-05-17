// node server which will handle socket io
const io = require('socket.io')(8000,{
    cors:{
        origin:"*"
    }
})

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', hh => {
        //console.log("new user", hh);
        users[socket.id] = hh;
        socket.broadcast.emit('user-joined', hh);
    });
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, hh: users[socket.id] })
    }); 
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id])
        delete users [socket.id];
    }); 
});

 