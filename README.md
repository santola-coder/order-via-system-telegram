# 🛒 Order Product System

### 📩 Checkout Notification via Telegram Bot

A modern **full-stack web application** that allows users to browse products, add them to a cart, and checkout.
When an order is placed, the system automatically sends a to notify to Telegram**Telegram notification to the admin**.

---

## 🚀 Features

✨ Product catalog from Fake API

🛒 Add / remove items from cart

📦 Checkout system

📩 Telegram bot order notification

📱 Responsive UI with Tailwind CSS

---

## 🧰 Tech Stack

### Frontend

⚛️ React.js
🎨 Tailwind CSS
📡 Axios

### Backend

🟢 Node.js
🚂 Express.js

### Tools & Integration

🤖 Telegram Bot API
🗂 Fake API / JSON Server

---

## 🏗 System Architecture

```
User
  │
  ▼
React Frontend
  │
  ▼
Node.js Express API
  │
  ▼
Fake Product API
  │
  ▼
Telegram Bot
  │
  ▼
Admin receives order notification
```

---

## 📂 Project Structure

```
order-product-system
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   ├── routes
│   ├── controllers
│   ├── services
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/order-via-system-telegram.git
cd order-via-system-telegram 
```

---

### 2️⃣ Install Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 3️⃣ Install Backend

```bash
cd backend
npm install
node server.js
```

---

## 🔑 Environment Variables

Create `.env` inside the **backend folder**

```
PORT=3000
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
```

---

## 🔌 API Endpoints

### 📦 Get Products

```
GET /api/products
```

---

### 🧾 Create Order

```
POST /api/orders
```

Example request:

```json
{
  "customerName": "John",
  "phone": "012345678",
  "address": "Phnom Penh",
  "items": [
    { "name": "Burger", "qty": 2 }
  ],
  "total": 10
}
```

---

## 📩 Telegram Notification Example

```
🆕 New Order

👤 Customer: John
📞 Phone: 012345678
📍 Address: Phnom Penh

🛒 Products
- Burger x2

💰 Total: $10
```

---

## 🛣 Future Improvements

💳 Online payment integration
📊 Admin dashboard
📦 Order history
🔐 User authentication
🗄 Database integration (PostgreSQL / MongoDB)

---

## 👨‍💻 Author

**Tola San**
🎓 A Computer Science Student
💻 Interests: 🚀 Passionate about learning, building, and exploring modern technology 

### 🌐 Learning & Community

- 🧠 Reddit – https://reddit.com  
- ✍️ Medium – https://medium.com

---

⭐ If you like this project, feel free to **star the repository**!
