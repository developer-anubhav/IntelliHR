# IntelliHR - Human Resource Management System

## Project Overview

**IntelliHR** is a web-based Human Resource Management System (HRMS) developed using the MERN stack. The application enables organizations to manage employee information through a centralized platform. It provides a simple and intuitive interface for performing CRUD (Create, Read, Update, Delete) operations on employee records.

The project demonstrates full-stack web development by integrating a React frontend with a Node.js/Express backend and MongoDB database.

---

## Features

- Add Employee
- View Employees
- Update Employee Details
- Delete Employee
- Responsive User Interface
- RESTful API Integration
- MongoDB Atlas Database
- Clean and Modular Project Structure

---

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Vanilla CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Development Tools
- Visual Studio Code
- Postman
- Git & GitHub
- npm

---

## Project Structure

```
IntelliHR/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/IntelliHR.git
cd IntelliHR
```

---

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

---

### 5. Start the Backend Server

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 6. Start the Frontend

Open another terminal.

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|----------|-----------------------|-------------------------|
| GET | /api/employees | Retrieve all employees |
| GET | /api/employees/:id | Retrieve employee by ID |
| POST | /api/employees | Add a new employee |
| PUT | /api/employees/:id | Update employee |
| DELETE | /api/employees/:id | Delete employee |

---

## Database Schema

### Employee

| Field | Type |
|--------|------|
| employeeId | String |
| name | String |
| email | String |
| phone | String |
| department | String |

---

## Assumptions

- Only employee management functionality is implemented.
- Authentication and authorization are not included in the current version.
- MongoDB Atlas is used as the primary database.
- Employee IDs are manually entered and are unique.
- The application is intended for demonstration and educational purposes.
- All API requests are made from a trusted frontend during development.

---

## Future Improvements

- User Authentication (JWT)
- Role-Based Access Control (Admin, HR, Employee)
- Employee Profile Photos
- Department Management Module
- Attendance Management
- Leave Management
- Payroll Management
- Export Employee Data (CSV)
- Deployment using Vercel and Render

---

## Author

**Anubhav**

Computer Science Engineering Student

---
