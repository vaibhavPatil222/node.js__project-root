const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const port = 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// Routes
app.use('/auth', authRoutes);
// Home route
app.get('/', (req, res) => {
res.send('Welcome to the main page!');
});
// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
