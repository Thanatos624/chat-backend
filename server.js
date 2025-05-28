// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { addUserToRoom, removeUser, getUsersInRoom, getUserBySocketId } = require("./rooms/roomManager");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(`🔌 New client connected: ${socket.id}`);

  // Join a chat room
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    addUserToRoom(room, username, socket.id);

    console.log(`${username} joined room: ${room}`);

    // Notify others in the room
    socket.to(room).emit("message", {
      user: "System",
      text: `${username} has joined the room.`,
    });

    // Send updated user list to the room
    io.to(room).emit("roomUsers", getUsersInRoom(room));
  });

  // Handle incoming chat messages
  socket.on("chatMessage", ({ room, username, message }) => {
    io.to(room).emit("message", {
      user: username,
      text: message,
    });
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    const user = getUserBySocketId(socket.id);
    if (user) {
      removeUser(socket.id);
      console.log(`❌ ${user.username} disconnected from room: ${user.room}`);
      // Notify remaining users in the room
      socket.to(user.room).emit("message", {
        user: "System",
        text: `${user.username} has left the room.`,
      });
      // Send updated user list
      io.to(user.room).emit("roomUsers", getUsersInRoom(user.room));
    } else {
      console.log(`❌ Unknown client disconnected: ${socket.id}`);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
