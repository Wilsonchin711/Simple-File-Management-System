# 📝 Notes App (Vue + Node.js + MySQL)

A simple full-stack notes app that lets users **create, view, update, and delete** notes.  
Built using **Vue 3** (frontend), **Node.js + Express** (backend), and **MySQL** (database).

---

## 🚀 Features

- ✍️ Add, edit, delete notes
- 📋 View all notes
- 💾 Data stored in MySQL
- 💻 Simple and responsive UI
- ✅ Input validation

---

## 🛠️ Project Setup Instructions

Follow these steps to run the app locally:

---

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd file-management-system
```

---

### ✅ 2. Set Up the Backend

```bash
cd backend
npm install
```

#### 🔧 Create MySQL Database and Table

```sql
CREATE DATABASE file_management;
USE file_management;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);
```

#### ▶️ Start Backend Server

```bash
node index.js
```

Backend will run at: `http://localhost:3000`

---

### ✅ 3. Set Up the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

### ✅ 4. Use the App

- Visit: `http://localhost:5173`
- Create, update, and delete notes
- All notes are stored in your local MySQL database

---

### ⚠️ Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MySQL](https://www.mysql.com/) installed and running

---

## 📦 Tech Stack

- **Frontend**: Vue 3 + Vite + CSS
- **Backend**: Node.js + Express
- **Database**: MySQL

---
