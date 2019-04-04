// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
// establish variables for access to routes files
 const routes = require("./routes/index.js");
// const routes2 = require("./routes/html/htmlRoutes");
// make a variable to use express
const app = express();
// establish a port to access the app on the web
const PORT = process.env.PORT || 3000;
//connect with database through connection.js
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// make public folder unknown 
app.use(express.static("public"));
//Import routes and give the server access to them
app.use(routes);



// establish access to the routes files 
app.use('/', routes);




// set up handlebars to be used
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// listen command to port
app.listen(PORT, () => console.log(`Now on localhost:${PORT}`));

