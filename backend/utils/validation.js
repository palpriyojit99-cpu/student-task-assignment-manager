export function validateTaskTitle(title) {
    if (!title || typeof title !== "string" || title.trim() === "") {
        return "Title is required";
    }

    return null;
}

export function validateTaskSubject(subject) {
    if (!subject || typeof subject !== "string" || subject.trim() === "") {
        return "Subject is required";
    }

    return null;
}

export function validatePriority(priority) {
    const allowedPriorities = ["Low", "Medium", "High"];

    if (priority && !allowedPriorities.includes(priority)) {
        return "Priority must be Low, Medium, or High";
    }

    return null;
}

export function validateStatus(status) {
    const allowedStatuses = ["Pending", "Completed"];

    if (status !== undefined && !allowedStatuses.includes(status)) {
        return "Status must be Pending or Completed";
    }

    return null;
}
