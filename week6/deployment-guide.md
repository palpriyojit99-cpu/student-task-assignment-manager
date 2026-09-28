# Student Task & Assignment Manager
## Week 6 Deployment Guide

### 1. Project Overview

The Student Task & Assignment Manager is a full-stack web application developed as part of the Junior Full Stack Developer internship.

The application consists of:

- Frontend: HTML, CSS and JavaScript
- Backend: Node.js and Express.js
- Database: lowdb with a JSON file
- Authentication: JWT-based authentication
- Hosting: Render
- Source control: GitHub

The application was originally developed and tested locally using Android Termux and was later deployed to public hosting.

---

## 2. Production Architecture

The deployed application uses two separate Render services.

### Frontend

Public URL:

https://student-task-assignment.onrender.com

The frontend is deployed as a Render Static Site from the `frontend` directory.

### Backend API

Public URL:

https://student-task-assignment-api.onrender.com

The backend is deployed as a Render Web Service from the `backend` directory.

### Communication Flow

User Browser
        |
        v
Render Static Frontend
        |
        | HTTPS API requests
        v
Render Node.js/Express Backend
        |
        v
lowdb / db.json

Authentication requests are handled by the backend using JWT tokens.

---

## 3. Preparing the Application for Deployment

The backend was modified to support the port assigned by the hosting platform.

The application uses:

`process.env.PORT || 3000`

The server also listens on:

`0.0.0.0`

This allows the Express server to accept connections from the hosting environment.

A `/health` endpoint was added for deployment verification.

Example response:

```json
{
  "status": "ok",
  "service": "Student Task & Assignment Manager API"
}
