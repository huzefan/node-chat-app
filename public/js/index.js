var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'john@example.com',
        text: 'Hello there'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('newMessage', message);
});