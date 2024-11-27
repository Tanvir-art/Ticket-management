# 🚌 Ticket Management System

An advanced **Bus Ticket Management System** designed to streamline ticket booking, bus scheduling, and user management. Developed using **Node.js**, **Express.js**, and **MongoDB**, this system ensures secure authentication, seamless role-based management, and user-friendly ticket purchasing.

---

## 🚀 Key Features

### 🔐 **Authentication and Authorization**
- User registration, login, and logout with **JWT-based authentication**.
- **Role-based authorization** for Admin and Users.
  
### 🛠 **Admin Functionalities**
- Add, update, or delete bus information.
- Manage ticket availability with time slots and pricing.
  
### 🎟 **User Functionalities**
- Browse available buses and schedules.
- Securely purchase tickets for desired buses and time slots.

### 🛡 **Data Integrity and Security**
- Passwords are securely hashed using **bcrypt**.
- Input validation ensures accurate data storage and retrieval.
- Robust error handling for all API endpoints.

---

## 🛠️ Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript 

---


---

## 📊 ER Diagram
The relationships between Users, Buses, and Tickets:



**Relationships**:
- **One-to-Many**: A bus can have multiple tickets.
- Users interact with buses and tickets indirectly via APIs.

---

## 🌟 API Endpoints

### Authentication APIs:
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | `/auth/register` | Register a new user  |
| POST   | `/auth/login`   | Login a user          |
| POST   | `/auth/logout`  | Logout the user       |

### Admin APIs:
| Method | Endpoint              | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/admin/bus`           | Add a new bus                  |
| PUT    | `/admin/bus/:id`       | Update existing bus details    |
| DELETE | `/admin/bus/:id`       | Delete a bus                   |
| POST   | `/admin/ticket`        | Add a ticket for a bus         |
| PUT    | `/admin/ticket/:id`    | Update ticket details          |
| DELETE | `/admin/ticket/:id`    | Delete a ticket                |

### User APIs:
| Method | Endpoint              | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/buses`              | View available buses                |
| GET    | `/tickets`            | View tickets for specific buses     |
| POST   | `/tickets/purchase`   | Purchase a ticket for a bus         |

---

## 📌 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Ticket-management.git   

## For .env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>



