const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to Dashboard", user: req.user });
});

module.exports = router;
