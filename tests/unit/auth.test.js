import test from "node:test";
import assert from "node:assert/strict";

import {
    createToken,
    verifyToken
} from "../../backend/utils/auth.js";

const TEST_SECRET = "week5_test_secret";

test("creates a valid authentication token", () => {
    const token = createToken("admin", TEST_SECRET);

    assert.equal(typeof token, "string");
    assert.ok(token.length > 0);
});

test("verifies a valid authentication token", async () => {
    const token = createToken("admin", TEST_SECRET);

    const user = await verifyToken(token, TEST_SECRET);

    assert.equal(user.username, "admin");
});

test("rejects an invalid authentication token", async () => {
    await assert.rejects(
        verifyToken("invalid-token", TEST_SECRET)
    );
});

test("rejects a token signed with the wrong secret", async () => {
    const token = createToken("admin", TEST_SECRET);

    await assert.rejects(
        verifyToken(token, "wrong_secret")
    );
});
