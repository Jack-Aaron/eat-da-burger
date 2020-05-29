var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], cb)
  },
  insertOne: function (whatToInsert, table, orderCol) {
    var queryString = "INSERT INTO ?? SET ?? = ?";
    console.log(queryString);
    connection.query(queryString, [whatToInsert, table, orderCol], cb)
  },
  updateOne: function (whatToUpdate, table, condition) {
    var queryString =
      "UPDATE ?? SET ?? WHERE ?? = ?";
    connection.query(
      queryString,
      [whatToUpdate, table, condition], cb);
  }
};

module.exports = orm;