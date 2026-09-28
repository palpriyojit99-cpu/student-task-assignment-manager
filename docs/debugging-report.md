## Performance Optimization

The dashboard search originally called the displayTasks() function
on every input event. This caused filtering and DOM rendering to run
repeatedly while the user was typing.

A 200 ms debounce was introduced. The dashboard now waits until the
user pauses typing before updating the task list. This reduces
unnecessary rendering during rapid input.

The JavaScript syntax was checked after the change, and the frontend
unit tests were executed again. All 5 frontend tests passed.

## Performance Baseline

The local API performance test recorded the following response times:

- GET all tasks: 14.78 ms
- GET single existing task: 11.21 ms
- Authenticated login: 15.67 ms

These measurements are a baseline from a local Android/Termux
environment. They are not a production-scale performance benchmark.

## Testing Summary

- Backend unit tests: 12 tests passed.
- Frontend validation tests: 5 tests passed.
- API integration tests: 8 test cases passed.
- JavaScript syntax check: passed.
- Dashboard search optimization: implemented and checked.

## Debugging Lessons

During testing, the API integration test initially failed because
the local environment did not contain the required .env file.
The environment configuration was restored, and the API tests passed.

The initial performance test also used a fixed task ID that no
longer existed. The test was updated to select an existing task
dynamically, preventing the test from depending on a particular
database record.

Jest also failed to start in the Termux environment with an
"Illegal instruction" error. Node.js's built-in test runner was
used instead, allowing the unit tests to run successfully.
