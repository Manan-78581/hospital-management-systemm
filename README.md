# 🏥 Hospital Management System

A **full-stack Hospital Management System** built with **MERN (MongoDB, Express, React, Node.js)** to streamline hospital operations such as patient management, doctor appointments, staff handling, and medical records.  

---

## ✨ Features

- 👩‍⚕️ **Patient Management** – Add, update, and manage patient details.  
- 🩺 **Doctor Management** – Manage doctor profiles, schedules, and availability.  
- 📅 **Appointments** – Book, update, and track patient appointments.  
- 💊 **Medical Records** – Store and update patient history and reports.  
- 🧾 **Billing System** – Generate and manage patient bills.  
- 🔐 **Authentication & Authorization** – Secure login for Admin, Doctors, and Staff.  
- 📊 **Dashboard** – Overview of hospital operations in one place.  

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ React.js  
- 🎨 Tailwind CSS   

### Backend:
- 🟢 Node.js  
- ⚡ Express.js  

### Database:
- 🍃 MongoDB (Mongoose ODM)  

### Tools & Others:
- 🔐 JWT Authentication  
- 🐙 Git & GitHub for version control    

---

## 📂 Project Structure

```

hospital-management-system/
│── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB connection
│   │   │
│   │   ├── controllers/              # Request handlers
│   │   │   ├── authController.js
│   │   │   ├── patientController.js
│   │   │   ├── doctorController.js
│   │   │   ├── appointmentController.js
│   │   │   └── billingController.js
│   │   │
│   │   ├── models/                   # MongoDB Schemas
│   │   │   ├── User.js
│   │   │   ├── Patient.js
│   │   │   ├── Doctor.js
│   │   │   ├── Appointment.js
│   │   │   └── Billing.js
│   │   │
│   │   ├── routes/                   # API Routes
│   │   │   ├── authRoutes.js
│   │   │   ├── patientRoutes.js
│   │   │   ├── doctorRoutes.js
│   │   │   ├── appointmentRoutes.js
│   │   │   └── billingRoutes.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js     # JWT verification
│   │   │   └── errorMiddleware.js    # Error handling
│   │   │
│   │   ├── utils/
│   │   │   ├── generateToken.js      # JWT generator
│   │   │   └── validators.js         # Input validation
│   │   │
│   │   └── server.js                 # Express app entry
│   │
│   ├── .env                          # Backend env (DB_URI, JWT_SECRET)
│   ├── package.json
│   └── README.md

│── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosInstance.js      # Base axios setup
│   │   │   ├── authApi.js            # Auth requests
│   │   │   ├── patientApi.js
│   │   │   ├── doctorApi.js
│   │   │   ├── appointmentApi.js
│   │   │   └── billingApi.js
│   │   │
│   │   ├── components/               # Reusable UI
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/                    # React Router Pages
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   └── PatientDashboard.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Billing.jsx
│   │   │   ├── Patients.jsx
│   │   │   └── Doctors.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── routes.js                 # Central routing
│   │
│   ├── .env                          # FRONTEND_API_URL
│   ├── package.json
│   └── README.md

│── .gitignore
│── README.md

```

## 🚀 Getting Started

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  
- [Git](https://git-scm.com/)  

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manan-1023/hospital-management-system.git
   cd hospital-management-system
   
2. **Install backend dependencies**
   
```bash
cd backend
npm install
```

3. **Install frontend dependencies**

```bash

cd ../frontend
npm install
```

4. **Configure environment variables**
 - Create a .env file inside the backend/ folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
▶️ Run the project

1. Start the backend:
```
cd backend
npm start
```

2. Start the frontend:
```
cd frontend
npm start
```
## 📸 Screenshots (Optional)

<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/c0491100-f7ba-4dbf-868a-9dea21209e6c" />

---

👨‍💻 Author
Manan Kathuria
[🔗 GitHub](https://github.com/Manan-78581)

