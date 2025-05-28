const socket = io();
let username = prompt("Enter your username:");
let room = prompt("Enter room name to join:");

document.getElementById("room-name").textContent = room;
document.getElementById("username-display").textContent = username;

// Join room
socket.emit("joinRoom", { username, room });

const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (message) {
    socket.emit("chatMessage", { room, username, message });
    appendMessage(message, "sent");
    input.value = "";
  }
});

socket.on("message", ({ user, text }) => {
  if (user !== username) {
    appendMessage(`${user}: ${text}`, "received");
  }
});

function appendMessage(message, type) {
  const div = document.createElement("div");
  div.classList.add("message", type);
  div.textContent = message;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
