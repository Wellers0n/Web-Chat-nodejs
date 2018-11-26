let app = require('./config/server');

let server = app.listen(80, () => {
    console.log('SERVER ON');
});

let io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function(socket) {
    console.log('usuario conectou!');

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {nome: data.nome, msg: data.msg})
        socket.broadcast.emit('msgParaCliente', {nome: data.nome, msg: data.msg})

    });
});


