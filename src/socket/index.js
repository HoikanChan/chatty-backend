var socket = require('socket.io');
module.exports = server => {
    io = socket(server);

    io.on('connection', (socket) => {
        console.log('socketId',socket.id);


        socket.on('SEND_MESSAGE', function (data) {
            console.log(data)
            io.emit('RECEIVE_MESSAGE', data);
        })
    });
}