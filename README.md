# React Todo App Assignment

## Project Overview

This is a **React-based Todo application** with full CRUD functionality, including:

* **Add** tasks with title and description (both required)
* **Edit** tasks
* **Delete** tasks
* **Mark as Done** tasks with a clear, button-style toggle
* Validation for title and description
* Responsive UI with clear UX design

The application interacts with a backend API using **Axios** for RESTful operations.

---

## Features

1. **Add Todo**

   * Requires both title and description.
   * Validation prevents empty submissions.

2. **Edit Todo**

   * Edit title and description inline.
   * Save or cancel changes.

3. **Delete Todo**

   * Confirmation prompt before deleting.

4. **Mark as Done**

   * Button-style toggle (✅ Done / ⭕ Mark as Done)
   * Text color changes, completed tasks get a greenish background and strikethrough effect.
   * Long titles/descriptions truncated with ellipsis, full text visible on hover.

---

## Architecture & File Structure

```
react-todo-app/
├─ backend/                # Backend API folder
│  ├─ server.js            # Entry point for backend
│  └─ ...other backend files
├─ frontend/               # React frontend folder
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ TodoForm.js
│  │  │  └─ TodoItem.js
│  │  ├─ App.js
│  │  ├─ index.js
│  │  └─ styles.css
│  ├─ package.json
│  └─ .env
├─ README.md
└─ package.json
```

* **Components**:

  * `TodoForm`: Handles creating new tasks with validation.
  * `TodoItem`: Handles displaying, editing, deleting, and marking tasks as done.
* **State Management**: React `useState` hooks for local component state.
* **API Calls**: Axios used to interact with backend endpoints (`/api/todos`).

---

## Solution Rationale

* **React Functional Components + Hooks**: Simple and modern state management.
* **Axios**: Lightweight library for REST API calls.
* **UI Design**: Clean, responsive layout with button-style “Mark as Done” toggle for better UX.
* **Validation**: Ensures meaningful data input for title and description.
* **Flex Layout**: Proper spacing and responsive design.
* **Text Truncation**: Prevents layout breaking from long task titles or descriptions.

---

## Setup Instructions

### Frontend

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` in frontend:

```
REACT_APP_API_BASE=http://localhost:5000
```

4. Start development server:

```bash
npm start
```

---

### Backend

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` in backend:

```
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
PORT=5000
```

4. Start backend server:

```bash
npm run dev
```



## Technologies Used

* React.js (Functional Components + Hooks)
* Axios
* JavaScript (ES6+)
* CSS Flexbox
* Node.js + Express
* MongoDB

---

## Author

**Dasunika Sewwandi**
Email: [dasunikawijwsooriya@gmail.com](mailto:dasunikawijwsooriya@gmail.com)
GitHub: [https://github.com/IT20660352-dasu/TODO-APP---TYPE-B](https://github.com/IT20660352-dasu/TODO-APP---TYPE-B)
