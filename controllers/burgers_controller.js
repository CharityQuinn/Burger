const db = require("../config/connection");


module.exports = {
  // find all burgers
  selectAll: function (req, res) {
    db
      .query("SELECT * FROM burgers", function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(dbBurgers);
      });
  },
  //insert / create new burger item (takes in req.body via POST)
  insertOne: function (req, res) {
    // req.body => {burger: "Make a burger"}
    db
      .query("INSERT INTO burgers SET ?", req.body, function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }

        let burger = req.body.burger_name;
        console.log("This is the burger name going into the db " + burger);
        res.json(dbBurgers);
      });
  },
  
  // UPDATE/PUT a burger to mark it from ready to eat to devoured (false => true),
  // this will use req.params.id to know where they're updating
  updateOne: function (req, res) {
    let squeryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    db
      .query(squeryString, [req.params.id], function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        // set up home page (root) to load up handlebars template with burger list
        dbBurgers.devoured = true;
        res.render("burgers", {
          burgerList: dbBurgers
        });
        res.json(dbBurgers);
      })
  },

   //  delete a burger based on id from req.params.id
   deleteBurger: function(req, res) {
    let queryString =
      "DELETE FROM burgers WHERE id = ?";
      db
      .query(queryString, [req.params.id], function(err, result) {
        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        console.log("Deleting a burger from db at " + req.params.id)
        res.json(result);
      });
  },
};
