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
    // insert / create new burger item (takes in req.body via POST)
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
        res.json(dbBurgers);
      });
  },
  // UPDATE/PUT a burger to mark it from incomplete to complete (false => true),
  // this will use req.params.id to know where they're updating
  updateOne: function (req, res) {
    // req.params => {id : 1} req.params.id => 1
    db
      .query("UPDATE burgers SET devoured = true WHERE id =?", [req.params.id], function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbBurgers);
      })
  },
 

  }
