# Week 5 Testing, Debugging and Optimization

## Project

Student Task & Assignment Manager

## Testing Strategy

The project was tested using unit testing, integration testing,
manual debugging, and performance testing.

### Backend Unit Testing

Backend validation and authentication functions were tested using
Node.js's built-in test runner.

Tests included:

- Task title validation
- Subject validation
- Priority validation
- Status validation
- JWT token creation
- JWT token verification
- Invalid authentication token handling

Result: 12 tests passed and 0 failed.

### Frontend Unit Testing

Frontend task-form validation logic was tested independently.

Tests included:

- Valid task form
- Empty title
- Empty subject
- Valid priority
- Invalid priority

Result: 5 tests passed and 0 failed.

### API Integration Testing

The backend REST API was tested against the running local server.

Tested operations:

- Login
- GET all tasks
- GET single task
- POST task
- PUT task
- DELETE task
- Nonexistent task handling
- Invalid login handling

Result: 8 integration tests passed.

## How to Run Tests

From the project root:

```bash
node --test tests/unit/validation.test.js tests/unit/auth.test.js tests/unit/frontend-validation.test.js
