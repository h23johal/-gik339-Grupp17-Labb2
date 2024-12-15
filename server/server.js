// Importera express och sqlite3
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Skapa serverobjektet
const server = express();

// Sätt övergripande inställningar för servern
server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

// Starta webbservern på port 3000
server.listen(3000, () => {
  console.log("Servern körs på port 3000");
});

// Skapa en GET-route
server.get("/users", (req, res) => {
  // Skapa databaskoppling
  const db = new sqlite3.Database("./gik339-labb2.db");

  // Hämta alla användare
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});
