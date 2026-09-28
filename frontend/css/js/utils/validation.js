export function validateTaskForm(data) {
    if (!data.title || data.title.trim() === "") {
        return "Title is required";
    }

    if (!data.subject || data.subject.trim() === "") {
        return "Subject is required";
    }

    const allowedPriorities = ["Low", "Medium", "High"];

    if (data.priority && !allowedPriorities.includes(data.priority)) {
        return "Priority must be Low, Medium, or High";
    }

    return null;
}
