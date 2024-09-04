// require("dotenv").config();

// const express = require("express");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// let db;

// function handleDisconnect() {
//   db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     connectTimeout: 10000,
//   });

//   db.connect((err) => {
//     if (err) {
//       console.error("Database connection failed: " + err.stack);
//       setTimeout(handleDisconnect, 2000);
//     } else {
//       console.log("Connected to the database.");
//     }
//   });

//   db.on("error", (err) => {
//     console.error("Database error: " + err.stack);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }

// handleDisconnect();

// app.post("/subscribe", (req, res) => {
//   const email = req.body.email;

//   if (!email) {
//     return res
//       .status(400)
//       .send({ error: true, message: "Please provide an email" });
//   }

//   db.query(
//     "INSERT INTO newsletter_subscribers (email) VALUES (?)",
//     [email],
//     (err, result) => {
//       if (err) {
//         console.error("Failed to insert email: " + err.stack);
//         return res
//           .status(500)
//           .send({ error: true, message: "Database query failed" });
//       }
//       res.send({ error: false, message: "Subscription successful" });
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
