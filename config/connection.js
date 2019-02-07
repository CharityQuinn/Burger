const mysql = require("mysql");

let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the db");
})

module.exports = connection;