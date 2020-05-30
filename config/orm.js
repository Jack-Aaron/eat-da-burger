var connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations 
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
          }
          arr.push(key + "=" + value);
      }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], cb)
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? VALUES = ?";
    console.log(queryString);
    connection.query(queryString, [table, cols, vals], cb)
  },
  updateOne: function (table, objColVals, condition, cb) {
    var queryString =
      "UPDATE ?? SET ?? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, objToSql(objColVals), condition], cb);
  }
};

module.exports = orm;