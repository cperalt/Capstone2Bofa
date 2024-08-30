const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

app.post("/donate", (req, res) => {
  const { name, amount, message } = req.body;
  const query =
    "INSERT INTO donation_entries (name, amount, message) VALUES (?, ?, ?)";
  db.query(query, [name, amount, message], (err, result) => {
    if (err) {
      return res.status(500).send("Error inserting data");
    }
    res.status(200).send("Donation recorded successfully");
  });
});

app.get("/donations", (req, res) => {
  db.query("SELECT * FROM donation_entries", (err, results) => {
    if (err) {
      return res.status(500).send("Error retrieving data");
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
