// rooms/roomManager.js

const rooms = {}; // { roomName: [ { username, socketId } ] }

function addUserToRoom(room, username, socketId) {
  if (!rooms[room]) {
    rooms[room] = [];
  }

  // Avoid duplicate entries
  if (!rooms[room].some(u => u.socketId === socketId)) {
    rooms[room].push({ username, socketId });
  }
}

function removeUser(socketId) {
  for (const room in rooms) {
    rooms[room] = rooms[room].filter((user) => user.socketId !== socketId);
    if (rooms[room].length === 0) {
      delete rooms[room]; // Clean up empty rooms
    }
  }
}

function getUsersInRoom(room) {
  return rooms[room] || [];
}

function getUserBySocketId(socketId) {
  for (const room in rooms) {
    const user = rooms[room].find((u) => u.socketId === socketId);
    if (user) {
      return { ...user, room };
    }
  }
  return null;
}

module.exports = {
  addUserToRoom,
  removeUser,
  getUsersInRoom,
  getUserBySocketId,
};
