# Student Task & Assignment Manager
## Week 6 Project Reflection

### 1. Project Summary

The Student Task & Assignment Manager was developed as a full-stack web application using HTML, CSS, JavaScript, Node.js, Express.js, JWT authentication, and lowdb.

The project was developed and tested locally before being deployed publicly using Render.

Public frontend:

https://student-task-assignment.onrender.com

Public backend:

https://student-task-assignment-api.onrender.com

### 2. What Went Well

The application successfully progressed from a local project to a publicly accessible full-stack application.

The final deployment supports:

- User login
- Task listing
- Adding tasks
- Viewing task details
- Editing tasks
- Completing tasks
- Deleting tasks
- Invalid login handling

All 8 public User Acceptance Test scenarios passed.

The project also completed 17 automated unit/validation tests and 8 API integration test cases during the testing phase.

### 3. Major Challenges

Several practical problems occurred during development.

#### Jest Compatibility

Jest produced an `Illegal instruction` error in the Termux environment.

The solution was to use Node.js's built-in `node:test` framework instead.

#### Hardcoded Task ID

A test initially used task ID `1`, but that task had already been deleted.

The test was improved to dynamically select an existing task instead of depending on a fixed database ID.

#### Missing Environment Configuration

The API tests initially failed because the local `.env` configuration was missing.

The required local environment configuration was restored and the tests were rerun successfully.

#### Production API URL

The first public frontend deployment contained an incorrectly formatted API URL.

Markdown link syntax had accidentally been placed inside the JavaScript string, causing the frontend to receive an HTML response instead of the expected JSON.

The configuration was corrected and the frontend was redeployed.

### 4. Performance and Optimization

A 200 ms debounce was added to the dashboard search functionality to reduce unnecessary search operations while the user is typing.

Local performance measurements during testing were:

| Operation | Average Response Time |
|---|---:|
| GET all tasks | 14.78 ms |
| GET single task | 11.21 ms |
| Authenticated login | 15.67 ms |

These measurements were taken in the local development environment and are used as development benchmarks rather than production performance guarantees.

### 5. Security Improvements

Several security-related improvements were implemented:

- JWT authentication for protected task operations
- Environment variables for sensitive configuration
- `.env` excluded from Git
- Restricted CORS using `FRONTEND_URL`
- HTTPS through the deployed Render URLs
- Separate configuration for local and production API endpoints

The demo authentication system remains simplified for internship purposes. A real production system should use hashed passwords and a proper user database.

### 6. Deployment Lessons

One of the main lessons was that an application working correctly on localhost does not automatically mean it will work correctly after deployment.

Production deployment required:

- Environment variable configuration
- Production API URLs
- CORS configuration
- Correct server port handling
- Public health checking
- Separate frontend and backend hosting configuration

The `/health` endpoint made it easier to verify that the deployed backend was running correctly.

### 7. Database Limitation

The application currently uses lowdb and `db.json`.

This was sufficient for development and demonstration, but a production application should use persistent database storage.

The main improvement planned for a future version is migration to PostgreSQL or another managed persistent database.

### 8. What I Learned

The project provided practical experience in:

- Full-stack application development
- REST API development
- Authentication
- CRUD operations
- Frontend and backend integration
- API testing
- Debugging
- Git and GitHub
- Environment variables
- CORS
- Public deployment
- Application maintenance

An important lesson was that debugging is often about identifying the actual source of a failure rather than changing code randomly.

### 9. Self-Improvement

The project highlighted several areas for further improvement:

1. Improve database design and use a persistent database.
2. Learn more advanced authentication and authorization.
3. Improve automated testing and test coverage.
4. Learn production monitoring and logging.
5. Improve frontend accessibility and responsive design.
6. Learn more about deployment and cloud infrastructure.
7. Improve code organization as application size increases.

### 10. Future Improvements

Future versions could include:

- PostgreSQL database
- Multiple user accounts
- Password hashing
- Role-based access control
- Task categories and priorities
- Due-date reminders
- Better dashboard analytics
- Improved error reporting
- Automated deployment pipelines
- More comprehensive automated tests

### 11. Final Reflection

The project started as a local full-stack application and was successfully developed into a publicly accessible deployed application.

The development process involved not only writing code but also testing, debugging, configuring environments, solving deployment problems, and verifying the final system through public User Acceptance Testing.

The final deployment and testing process provided practical understanding of the complete development lifecycle from implementation to deployment and maintenance.
