const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    try {
        const token = req.cookies?.token ||
            (req.headers.authorization && req.headers.authorization.split(" ")[1]);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication token missing",
            });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                success: false,
                message: "Server configuration error: JWT_SECRET is not set",
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (err) {
            console.error("JWT verification failed:", err.message || err);
            return res.status(401).json({
                success: false,
                message: "Invalid or expired authentication token",
            });
        }
    } catch (error) {
        console.error("Authentication error:", error.message || error);
        res.status(401).json({
            success: false,
            message: "Authentication failed",
        });
    }
};

module.exports = authenticate;

// 1. GET TOKEN
//       ↓
// 2. CHECK TOKEN EXISTS
//       ↓
// 3. VERIFY TOKEN
//       ↓
// 4. PUT USER DATA IN req.user
//       ↓
// 5. next()
