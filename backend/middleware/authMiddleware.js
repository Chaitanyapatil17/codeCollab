const jwt = require("jsonwebtoken");

// Middleware function to verify JWT token
module.exports = (req, res, next) => {
    // Get token from request headers
    const token = req.header("Authorization");

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    try {
        // Verify token using JWT secret
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

        // Attach user data to request
        req.user = verified;
        next(); // Proceed to next middleware/route
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
