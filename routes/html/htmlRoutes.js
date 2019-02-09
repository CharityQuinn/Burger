const router = require("express").Router();
// import database connection
const db = require("../../config/connection");


// set up home page (root) route to load up handlebars template with burgers list
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM burgers", function(err, dbBurgers) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      console.log(dbBurgers);
      res.render("burgers", {burgers: dbBurgers});
    });
  });

module.exports = router;
