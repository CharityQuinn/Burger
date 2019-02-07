var connection =require("./connection");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);     
    });
  },
  insertOne: function(tableInput, burgerName) {
    var queryString = "UPDATE * FROM ?? WHERE ?? = ?"; connection.queryString, [tableInput, ]
  }
}