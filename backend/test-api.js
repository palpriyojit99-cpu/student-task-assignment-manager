const BASE_URL = "http://localhost:3000";

async function test(name, request, expectedStatus) {
    const response = await request();
    const data = await response.json();

    if (response.status === expectedStatus) {
        console.log(`PASS: ${name}`);
        return data;
    }

    console.log(`FAIL: ${name}`);
    console.log("Expected:", expectedStatus);
    console.log("Received:", response.status);
    console.log("Response:", data);

    process.exit(1);
}

async function runTests() {
    console.log("Starting API tests...\n");

    // Test 1: Login
    const loginData = await test(
        "Login",
        () =>
            fetch(`${BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "admin",
                    password: "admin123"
                })
            }),
        200
    );

    const token = loginData.token;

   // Test 2: Get all tasks
const allTasksResponse = await fetch(`${BASE_URL}/api/tasks`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const allTasks = await allTasksResponse.json();

if (allTasksResponse.status === 200) {
    console.log("PASS: GET all tasks");
} else {
    console.log("FAIL: GET all tasks");
    console.log("Expected: 200");
    console.log("Received:", allTasksResponse.status);
    console.log("Response:", allTasks);
}

   // Test 3: Get single task
const existingTaskId = allTasks[0].id;

await test(
    "GET single task",
    () =>
        fetch(`${BASE_URL}/api/tasks/${existingTaskId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
    200
);

    // Test 4: Create task
    const newTask = await test(
        "POST create task",
        () =>
            fetch(`${BASE_URL}/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: "API Test Task",
                    subject: "Testing",
                    description: "Created during automated API testing",
                    dueDate: "2026-10-01",
                    priority: "Low"
                })
            }),
        201
    );

    // Test 5: Update task
    await test(
        "PUT update task",
        () =>
            fetch(`${BASE_URL}/api/tasks/${newTask.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: "Updated API Test Task"
                })
            }),
        200
    );

    // Test 6: Delete task
    await test(
        "DELETE task",
        () =>
            fetch(`${BASE_URL}/api/tasks/${newTask.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        200
    );

    // Test 7: Invalid task ID
    await test(
        "404 for nonexistent task",
        () =>
            fetch(`${BASE_URL}/api/tasks/999999`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        404
    );

    // Test 8: Invalid credentials
    await test(
        "Reject invalid login",
        () =>
            fetch(`${BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "wrong",
                    password: "wrong"
                })
            }),
        401
    );

    console.log("\nAll API tests passed successfully! 🎉");
}

runTests().catch(error => {
    console.error("Test execution failed:", error);
    process.exit(1);
});
