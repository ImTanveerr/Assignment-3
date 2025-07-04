# 📚 Library Management API

A backend REST API for managing a library system — built using **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- 📖 Manage books (Add, Update, Delete, Retrieve)
- 📦 Borrow book functionality with:
  - Availability check
  - Quantity validation
- ✅ Input validations and consistent error handling
- 🧱 Clean architecture and modular folder structure

---

## 🛠 Tech Stack

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---


## 📡 API Endpoints

### 📚 Book Routes

- **GET** `/api/books`  
  Get all books.

- **POST** `/api/books`  
  Add a new book.

- **PUT** `/api/books/:id`  
  Update a book by ID.

- **DELETE** `/api/books/:id`  
  Delete a book by ID.

### 📘 Borrow Routes

- **POST** `/api/borrows`  
  Add a new borrow.

- **GET** `/api/borrows//summary`  
  Get summary of borrows.
