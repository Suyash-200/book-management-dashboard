# 📚 Book Management Dashboard

A responsive React.js dashboard that allows users to **fetch**, **display**, and **perform CRUD operations** on a list of books using a mock API.

## 🔹 Objective

This project is built as a **React.js Developer Assessment Task** to demonstrate skills in component-based design, API integration, state management, and UI/UX best practices.

---

## 🔧 Features

### 📋 Home Page (Dashboard)
- Displays a **list of books** in a table/grid layout
- Each book includes:
  - Title
  - Author
  - Genre
  - Published Year
  - Status (Available / Issued)
- **Pagination** (10 books per page)
- **Search** functionality (by title or author)
- **Filters** for genre and status

### ➕ Add / ✏️ Edit Book
- Accessible via modal or dedicated route
- Uses `react-hook-form` or `Formik` for validations
- Submits book data via POST/PUT API requests

### 🗑️ Delete Book
- Confirmation popup before deletion
- Toast notifications for success/error feedback

### 🎨 Styling & Design
- Built using [Tailwind CSS](https://tailwindcss.com/) or any modern UI library (e.g., Material UI, Ant Design)
- Fully **responsive** and follows **UX best practices**

---

## 🔗 API Integration

You can use one of the following mock APIs:

- [`https://crudcrud.com`](https://crudcrud.com)
- [`https://reqres.in`](https://reqres.in)
- [`json-server`](https://github.com/typicode/json-server) (recommended for local development)

### API Endpoints:
- `GET /books`
- `POST /books`
- `PUT /books/:id`
- `DELETE /books/:id`

---

## 🌟 Bonus Features (Optional Enhancements)

- Loading **skeletons** or **spinners** during fetch operations
- Use of **React Query** or **SWR** for efficient data fetching
- State management using **Redux** or **Context API**
- **React Router** for routing/navigation

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-dashboard.git
cd book-dashboard
