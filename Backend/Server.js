const mysql = require('mysql2'); // MySQL library
const cors = require('cors'); // CORS middleware
const express = require('express'); // Express framework

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Create MySQL connections for different databases
const dbCapstone = mysql.createConnection({
    host: 'database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'xwlsfQL76x',
    database: 'CapstoneBofa',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3306
});

const dbVolunteering = mysql.createConnection({
    host: 'database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'xwlsfQL76x',
    database: 'Volunteering',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3306
});

// Test the DB connections
dbCapstone.connect((err) => {
    if (err) {
        console.error("Error connecting to the CapstoneBofa database:", err);
    } else {
        console.log("Connected to the CapstoneBofa database");
    }
});

dbVolunteering.connect((err) => {
    if (err) {
        console.error("Error connecting to the Volunteering database:", err);
    } else {
        console.log("Connected to the Volunteering database");
    }
});

// User registration (CapstoneBofa DB)
app.post('/register', (req, res) => {
    const { first_name, last_name, email, password, is_admin } = req.body;

    const query = "INSERT INTO users (first_name, last_name, email, password_hash, is_admin) VALUES (?, ?, ?, ?, ?)";
    dbCapstone.query(query, [first_name, last_name, email, password, is_admin], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error inserting data');
        }
        res.status(200).send('User registered successfully');
    });
});

// User login (CapstoneBofa DB)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    dbCapstone.query(query, [email, password], (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving user');
        }
        if (results.length === 0) {
            return res.status(401).send('Invalid credentials');
        }
        res.status(200).send('Login successful');
    });
});

// Welcome endpoint
app.get('/', (req, res) => {
    res.json('Welcome to the backend');
});

// Registration endpoint (for testing purposes) - CapstoneBofa DB
app.get('/register', (req, res) => {
    dbCapstone.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});

// Login endpoint (for testing purposes) - CapstoneBofa DB
app.get('/login', (req, res) => {
    dbCapstone.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});

// Volunteering data endpoint (for testing purposes) - Volunteering DB
app.get('/volunteering', (req, res) => {
    dbVolunteering.query('SELECT * FROM Volunteering', (err, results) => {
        if (err) {
            console.log("hello")
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
