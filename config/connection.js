const mysql = require("mysql");
console.log("inside connection.js - will it connect with db?");
let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("connected to the db");
});

module.exports = db;
