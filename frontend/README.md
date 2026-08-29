# Student Task & Assignment Manager

## Project Overview
Student Task & Assignment Manager is a responsive front-end web application designed to help students organize academic assignments and study-related tasks in one place.

The application supports creating, viewing, editing, completing, deleting, searching, and filtering tasks. It was developed for the Junior Full Stack Developer Internship, Week 2: Front-End Application Development.

## Objectives
- Build a simple and user-friendly student task manager.
- Practice HTML5, CSS3, and JavaScript.
- Create multiple interconnected pages.
- Implement client-side interactivity and data persistence.
- Build a responsive mobile-friendly interface.
- Apply basic accessibility and usability practices.

## Main Features
### Landing Page
Introduces the application and provides navigation to Dashboard and Add Task.

### Dashboard
Provides task statistics, task search, All/Pending/Completed filters, task cards, and View Task navigation.

### Add Task
Allows entry of task title, subject, description, due date, and priority. Tasks are stored in browser localStorage.

### Task Details
Displays the selected task and provides Mark as Complete, Edit Task, and Delete Task actions.

### Edit Task
Loads existing task information into the form and updates the existing task rather than creating a duplicate.

### Search and Filtering
Users can search by task title or subject and filter tasks by All, Pending, or Completed status.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Browser localStorage
- GitHub Pages

Vanilla JavaScript was used instead of a framework to keep the application lightweight and to implement the core front-end concepts directly.

## Project Structure
```text
student-task-assignment-manager/
│
├── index.html
│
└── frontend/
    ├── index.html
    ├── dashboard.html
    ├── add-task.html
    ├── task.html
    │
    └── css/
        ├── style.css
        │
        └── js/
            ├── script.js
            ├── dashboard.js
            ├── add-task.js
            └── task.js
```

## Development Process
The interface was first structured with HTML, followed by CSS styling and responsive layout improvements. JavaScript was then used to connect the pages and implement task-management functionality.

Tasks are stored in localStorage so information remains available while navigating between pages and after refreshing the browser.

The application was tested using realistic workflows. For example, a task was created with a subject, title, priority, due date, and description. It was then viewed, edited, marked completed, searched, filtered, and deleted.

## Design Decisions and Rationale
A card-based layout was selected because students need to scan important information such as task title, subject, due date, priority, and status quickly.

A simple, consistent visual style was used to keep navigation and task management easy to understand. The Dashboard separates statistics from individual task cards so overall workload information is visible before individual assignments.

Responsive CSS media queries were added so statistics, filters, buttons, and task actions adapt to smaller screens. This improves readability and touch usability on mobile devices.

Visible focus styling was also added to interactive controls so focused inputs and buttons remain identifiable.

## Data Handling
Tasks are stored using the browser localStorage API. Each task contains:
- title
- subject
- description
- due date
- priority
- status

localStorage was selected for this front-end version because it requires no server or database and is sufficient for demonstrating client-side data management.

## Usability Testing
| Test | Expected Result | Result |
|---|---|---|
| Create a task | Task is saved and appears on Dashboard | Pass |
| Search for a task | Matching task is displayed | Pass |
| Filter All | All tasks are displayed | Pass |
| Filter Pending | Pending tasks are displayed | Pass |
| Filter Completed | Completed tasks are displayed | Pass |
| View a task | Correct task details are displayed | Pass |
| Edit a task | Existing task is updated | Pass |
| Complete a task | Status changes to Completed | Pass |
| Delete a task | Task is removed | Pass |
| Mobile layout | Content adapts to a smaller screen | Pass |

## Accessibility and Responsiveness
Semantic HTML elements such as header, nav, main, section, headings, labels, inputs, buttons, and forms are used. Form fields have associated labels, and visible focus styles were added to interactive controls.

A responsive media query adapts statistics, filters, and task actions for smaller screens.

## How to Run Locally
1. Download or clone the repository.
2. Open the project folder.
3. Open the root `index.html` in a web browser.
4. It redirects to the application's landing page inside `frontend`.
5. Use the navigation links to access Dashboard and Add Task.

No package installation or build process is required.

## Future Improvements
- Connect to a real backend and database.
- Add user authentication.
- Add categories and advanced sorting.
- Add reminders and notifications.
- Replace browser dialogs with custom confirmation modals.
- Perform more advanced accessibility testing.

## Conclusion
The project demonstrates a functional front-end task management application built with HTML, CSS, and JavaScript. It includes multiple interconnected views, client-side data persistence, responsive design, search and filtering, and complete basic task-management operations.
