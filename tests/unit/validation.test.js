import test from "node:test";
import assert from "node:assert/strict";

import {
    validateTaskTitle,
    validateTaskSubject,
    validatePriority,
    validateStatus
} from "../../backend/utils/validation.js";

test("accepts a valid task title", () => {
    assert.equal(
        validateTaskTitle("Complete assignment"),
        null
    );
});

test("rejects an empty task title", () => {
    assert.equal(
        validateTaskTitle(""),
        "Title is required"
    );
});

test("accepts a valid subject", () => {
    assert.equal(
        validateTaskSubject("Computer Science"),
        null
    );
});

test("rejects an empty subject", () => {
    assert.equal(
        validateTaskSubject(""),
        "Subject is required"
    );
});

test("accepts valid priority values", () => {
    assert.equal(validatePriority("Low"), null);
    assert.equal(validatePriority("Medium"), null);
    assert.equal(validatePriority("High"), null);
});

test("rejects an invalid priority", () => {
    assert.equal(
        validatePriority("Urgent"),
        "Priority must be Low, Medium, or High"
    );
});

test("accepts valid status values", () => {
    assert.equal(validateStatus("Pending"), null);
    assert.equal(validateStatus("Completed"), null);
});

test("rejects an invalid status", () => {
    assert.equal(
        validateStatus("Cancelled"),
        "Status must be Pending or Completed"
    );
});
