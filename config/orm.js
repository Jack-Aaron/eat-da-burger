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
  updateOne: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;