import jwt from "jsonwebtoken";

export function createToken(username, secret) {
    return jwt.sign(
        { username },
        secret,
        { expiresIn: "1h" }
    );
}

export function verifyToken(token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(user);
        });
    });
}
