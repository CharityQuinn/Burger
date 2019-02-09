// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
var router = express.Router();
const routes = require("./routes/html/index");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// make public folder unknown 
app.use(express.static("public"));
// wake up the routes files
app.use(routes);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// listen command to port
app.listen(PORT, () => console.log(`Now on localhost:${PORT}`));

