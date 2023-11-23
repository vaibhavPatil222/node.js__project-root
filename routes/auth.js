const express = require('express');
const router = express.Router();
// Mock user data (for simplicity)
const users = [];
// Register page
router.get('/register', (req, res) => {
res.render('register');
});
// Handle registration form submission
router.post('/register', (req, res) => {
const { username, password } = req.body;
// Simulate user registration (without proper validation and hashing for

users.push({ username, password });
res.redirect('/auth/login');
});
// Login page
router.get('/login', (req, res) => {
res.render('login');
});
// Handle login form submission
router.post('/login', (req, res) => {
const { username, password } = req.body;
// Simulate user authentication (without proper validation and hashing for

const user = users.find((u) => u.username === username && u.password ===
password);
if (user) {
res.send('Login successful!');
} else {
res.send('Invalid credentials. Please try again.');
}
});
module.exports = router;




