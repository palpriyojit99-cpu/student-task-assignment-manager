const BASE_URL = "http://localhost:3000";

async function measureRequest(name, request) {
    const start = performance.now();

    const response = await request();

    const end = performance.now();
    const duration = (end - start).toFixed(2);

    console.log(`${name}: ${duration} ms`);

    if (!response.ok) {
        console.log(`Status: ${response.status}`);
    }

    return response;
}

async function runPerformanceTest() {
    console.log("Starting performance test...\n");

    const loginResponse = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "admin",
            password: "admin123"
        })
    });

    const loginData = await loginResponse.json();
    const token = loginData.token;

    if (!token) {
        throw new Error("Login failed. No authentication token received.");
    }

    const allTasksResponse = await fetch(`${BASE_URL}/api/tasks`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const allTasks = await allTasksResponse.json();

    await measureRequest(
        "GET all tasks",
        () =>
            fetch(`${BASE_URL}/api/tasks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
    );

    if (allTasks.length > 0) {
        const existingTaskId = allTasks[0].id;

        await measureRequest(
            "GET single existing task",
            () =>
                fetch(`${BASE_URL}/api/tasks/${existingTaskId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
        );
    } else {
        console.log("GET single existing task: skipped because no tasks exist");
    }

    await measureRequest(
        "Authenticated login",
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
            })
    );

    console.log("\nPerformance test completed successfully.");
}

runPerformanceTest().catch(error => {
    console.error("Performance test failed:", error);
    process.exit(1);
});
