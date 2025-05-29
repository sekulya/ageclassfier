// Server-side code (Node.js with Socket.IO)
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle Socket.IO connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
