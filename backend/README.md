# Student Task & Assignment Manager - Backend API

## 1. Project Overview

The Student Task & Assignment Manager Backend is a RESTful API developed as part of the NSDC Junior Full Stack Developer Internship.

The backend provides API endpoints for managing student tasks and assignments using CRUD operations.

The project includes:

- RESTful API using Express.js
- LowDB JSON database
- JWT-based authentication
- Server-side input validation
- Error handling
- Automated API testing

## 2. Technologies Used

- Node.js
- Express.js
- LowDB
- JSON Web Token (JWT)
- dotenv
- JavaScript

## 3. Project Structure

```text
student-task-assignment-backend/
│
├── server.js
├── db.json
├── test-api.js
├── API.md
├── README.md
├── package.json
├── package-lock.json
├── .env
└── .gitignore
## 4. Installation and Setup

### Step 1: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
## 5. API Features

The backend provides the following API operations:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/login` | Authenticate a user and generate JWT |
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a specific task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

Task-related endpoints require a valid JWT token.

## 6. Authentication

The API uses JSON Web Tokens (JWT) for authentication.

After successful login, the server returns an access token.

The token must be included in protected requests:

```text
Authorization: Bearer JWT_TOKEN
## 8. Validation and Error Handling

The API performs server-side validation to ensure that submitted task data is valid.

Validation includes:

- Checking that `title` is provided
- Checking that `subject` is provided
- Validating priority values
- Validating task status values
- Checking whether a requested task exists
- Checking authentication credentials
- Validating JWT access tokens

The API returns appropriate HTTP status codes and JSON error messages when a request cannot be processed.

## 9. Testing

The project includes an automated API testing script:

```text
test-api.js
node test-api.js

