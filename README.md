# 💬 Real-Time Chat App Backend

A Node.js-powered real-time chat backend using **Socket.IO**, supporting **multiple chat rooms** and styled like **WhatsApp Web**. This is a full-stack ready project with a simple frontend for testing and extensibility.

---

## 📸 Preview

<!-- 👉 Add your screenshot below by dragging it into the GitHub README area after pushing -->
![image](https://github.com/user-attachments/assets/22f81660-b404-43f4-9f9b-b6799b1688e5)

![image](https://github.com/user-attachments/assets/4b987546-ace7-4fc2-9883-4830ee045627)



---

## 🚀 Features

- 🔗 Real-time messaging via Socket.IO  
- 💬 Multi-room support (like channels)  
- ✅ Modular room/user tracking logic  
- 💡 WhatsApp-style frontend UI  
- 🛡 CORS-enabled, easy to deploy  

---

## 📁 Folder Structure

```
chat-backend/
├── public/              # Frontend files (WhatsApp-style UI)
│   ├── index.html
│   ├── style.css
│   └── client.js
│
├── rooms/
│   └── roomManager.js   # Modular room logic (add/remove/get users)
│
├── server.js            # Main server with Socket.IO setup
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## 🛠 Setup & Installation

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/chat-backend.git
cd chat-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

> Or use `nodemon` for auto-reloading:

```bash
npm install -g nodemon
nodemon server.js
```

---

## 🌐 Usage

1. Open a browser:
   ```
   http://localhost:3000
   ```

2. Enter your **username** and **room name**.

3. Start chatting in real-time.

> 💡 Open multiple tabs or browsers to simulate different users.

---

## 🔄 Changing the Port

If port `3000` is already in use, change the following in `server.js`:

```js
const PORT = process.env.PORT || 3000;
```

➡ to:

```js
const PORT = process.env.PORT || 3001;
```

---

## 🧩 Tech Stack

- **Node.js**
- **Express**
- **Socket.IO**
- **HTML/CSS/JS**

---


Made by Thanatos624 (https://github.com/Thanatos624)

Feel free to fork, contribute, or ⭐ the repo!
