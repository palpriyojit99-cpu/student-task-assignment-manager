import test from "node:test";
import assert from "node:assert/strict";

import { validateTaskForm } from "../../frontend/css/js/utils/validation.js";

test("accepts a valid task form", () => {
    const data = {
        title: "Complete assignment",
        subject: "Computer Science",
        priority: "High"
    };

    assert.equal(validateTaskForm(data), null);
});

test("rejects an empty title", () => {
    const data = {
        title: "",
        subject: "Computer Science",
        priority: "Medium"
    };

    assert.equal(validateTaskForm(data), "Title is required");
});

test("rejects an empty subject", () => {
    const data = {
        title: "Complete assignment",
        subject: "",
        priority: "Medium"
    };

    assert.equal(validateTaskForm(data), "Subject is required");
});

test("accepts valid priority", () => {
    assert.equal(
        validateTaskForm({
            title: "Test task",
            subject: "Testing",
            priority: "Low"
        }),
        null
    );
});

test("rejects invalid priority", () => {
    assert.equal(
        validateTaskForm({
            title: "Test task",
            subject: "Testing",
            priority: "Urgent"
        }),
        "Priority must be Low, Medium, or High"
    );
});
