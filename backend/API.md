# Student Task & Assignment Manager API

## 1. Overview

The Student Task & Assignment Manager API is a RESTful backend API developed using Node.js and Express.js.

The API provides task management operations including creating, viewing, updating, and deleting tasks.

The backend uses LowDB for persistent JSON-based data storage and JWT authentication for protecting task-related endpoints.

---

## 2. Technologies Used

- Node.js
- Express.js
- LowDB
- JSON Web Token (JWT)
- dotenv
- JavaScript

---

## 3. Base URL

```text
http://localhost:3000
## 4. Authentication

Task-related endpoints require a valid JWT access token.

### Login

**Endpoint:**

POST /api/auth/login

**Request Body:**

```json
{
  "username": "admin",
  "password": "admin123"
}
# 5. Task API Endpoints

## 5.1 Get All Tasks

**Endpoint:**

GET /api/tasks

**Authentication:** Required

**Header:**

Authorization: Bearer JWT_TOKEN

**Successful Response:**

Status: 200 OK

```json
[
  {
    "id": 1,
    "title": "Complete C assignment",
    "subject": "Programming",
    "description": "Finish the C programming assignment",
    "dueDate": "2026-09-20",
    "priority": "High",
    "status": "Pending"
  }
]
## 5.3 Create a New Task

**Endpoint:**

POST /api/tasks

**Authentication:** Required

**Request Body:**

```json
{
  "title": "Study Data Structure",
  "subject": "Data Structure",
  "description": "Revise stack and queue",
  "dueDate": "2026-09-22",
  "priority": "Medium"
}
## 5.4 Update a Task

**Endpoint:**

PUT /api/tasks/:id

**Authentication:** Required

**Example:**

PUT /api/tasks/1

**Request Body:**

```json
{
  "title": "Complete C assignment - Updated",
  "priority": "Low",
  "status": "Completed"
}
## 5.5 Delete a Task

**Endpoint:**

DELETE /api/tasks/:id

**Authentication:** Required

**Example:**

DELETE /api/tasks/2

**Successful Response:**

Status: 200 OK

```json
{
  "message": "Task deleted successfully",
  "task": {
    "id": 2,
    "title": "Study Data Structure"
  }
}
## 7. HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid request or validation error |
| 401 | Authentication required or invalid credentials |
| 403 | Invalid or expired authentication token |
| 404 | Requested task not found |

## 8. Database

The application uses LowDB as a lightweight JSON-based database.

The database file is:

`db.json`

### Task Fields

| Field | Description |
|---|---|
| `id` | Unique task identifier |
| `title` | Task title |
| `subject` | Subject or category |
| `description` | Task description |
| `dueDate` | Task deadline |
| `priority` | Low, Medium, or High |
| `status` | Pending or Completed |

## 9. Validation

The API performs server-side validation for:

- Required task title
- Required subject
- Allowed priority values
- Allowed task status values
- Nonexistent task IDs
- Authentication credentials
- JWT access tokens

## 10. Testing

The API was tested using:

- Manual `curl` requests
- Automated JavaScript API test script

The automated tests verify:

- Login
- JWT authentication
- GET all tasks
- GET single task
- POST task
- PUT task
- DELETE task
- 404 handling
- Invalid login handling

All automated API tests passed successfully.
