// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./routes/api/burgerRoutes");
const routes2 = require("./routes/html/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// make public folder unknown 
app.use(express.static("public"));
//Import routes and give the server access to them
app.use(routes);
app.use(routes2);
// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");

app.use('/', routes);




app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// listen command to port
app.listen(PORT, () => console.log(`Now on localhost:${PORT}`));

