const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 8081; // Define your port

app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Create MySQL connection pool
const DB = mysql.createPool({
    host: 'database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com', // Your RDS endpoint
    user: 'admin', // Your MySQL username
    password: 'xwlsfQL76x', // Your MySQL password
    database: '', // Your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the DB connection
DB.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database as ID:', connection.threadId);
});

// User registration endpoint
app.post('/Register', (req, res) => {
    const { username, email, password } = req.body;
    
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to hash password' });
        }

        // Insert user into database
        const query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
        DB.query(query, [username, email, hash], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Failed to register user' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

// User login endpoint
app.post('/Login', (req, res) => {
    const { email, password } = req.body;

    // Fetch user from database
    const query = 'SELECT password_hash, is_admin FROM users WHERE email = ?';
    DB.query(query, [email], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to fetch user' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const { password_hash, is_admin } = results[0];

        // Compare provided password with hashed password
        bcrypt.compare(password, password_hash, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to compare passwords' });
            }
            if (result) {
                res.status(200).json({ message: 'Login successful', is_admin });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        });
    });
});


// Welcome endpoint
app.get('/', (req, res) => {
    return res.json('Welcome to the backend');
});

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
