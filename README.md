# Student Task & Assignment Manager

A full-stack web application for managing student tasks and assignments.

The project integrates a responsive HTML/CSS/JavaScript frontend with a REST API backend using Node.js, Express.js and a JSON database.

## Project Features

- User login with JWT authentication
- Dashboard with task statistics
- View all tasks
- Search tasks
- Filter tasks by Pending/Completed status
- View individual task details
- Create new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Backend validation
- API error handling
- Responsive frontend
- REST API integration

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API
- Local browser storage for authentication token

### Backend

- Node.js
- Express.js
- LowDB
- JSON Web Token (JWT)
- CORS
- dotenv

## Project Structure

```text
student-task-assignment-manager/
│
├── index.html
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── add-task.html
│   ├── task.html
│   ├── css/
│   │   ├── style.css
│   │   └── js/
│   │       ├── script.js
│   │       ├── login.js
│   │       ├── dashboard.js
│   │       ├── add-task.js
│   │       └── task.js
│
└── backend/
    ├── server.js
    ├── db.json
    ├── package.json
    ├── package-lock.json
    ├── test-api.js
    ├── API.md
    ├── README.md
    ├── .env.example
    └── .gitignore
