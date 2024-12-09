# Simple HTTP Basic Authentication System

- An authentication process in which the username and password is sent via Authorization headers encoded in Base64 format on every request
- A simple implementation using a **React** frontend and a **Spring Boot** backend.
- It includes user registration, role-based access control, and stateless session handling.

## Features

- **Frontend**: Built with React, includes user registration and login forms.
- **Backend**: Powered by Spring Boot, with authentication and role-based access control using Spring Security.
- **Database**: MySQL database managed with Spring Data JPA.
- **Security**: Stateless sessions, disabled CSRF, and allowed CORS for frontend-backend communication.

---

## Frontend Details

### Tech Stack

- **React**: User interface and form handling.
- **React Router**: Frontend routing to handle navigation between login, registration, and other pages.

## Backend Details

### Tech Stack

- **Spring Boot**: Backend framework for APIs and security.
- **Spring Security**: Handles authentication and role-based access control.
- **Spring Data JPA**: Simplified database operations.
- **MySQL**: Relational database for storing user credentials and roles.

### Security Features

1. **Stateless Sessions**: Ensures no session data is stored on the server.
2. **CSRF Disabled**: Simplifies frontend-backend integration (useful for APIs).
3. **CORS Enabled**: Allows cross-origin requests from the frontend.

### Roles and Permissions

- **Admin Role**: Can view all users' information at once.
- **User Role**: Can only view one user at a time.

---

## How to Run

### Prerequisites

- **Frontend**: Node.js and npm installed.
- **Backend**: Java JDK 17+, MySQL installed, and Maven CLI installed.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gabcytn/http-basic-auth.git
   cd http-basic-auth
2. **Run React**:
   ```bash
   cd http-basic-auth-react
   npm install
   npm run dev
3. **Run Migrations**:
   - Run the schema.sql at `http-basic-auth-spring/src/main/java/com/gabcytn/basic_auth/Repository/`
5. **Run Spring Boot**:
   ```bash
   cd ../http-basic-auth-spring
   mvn spring-boot:run
