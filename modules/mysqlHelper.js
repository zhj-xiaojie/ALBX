var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "baixiu",
  dateStrings: true
});

//   向外暴露
module.exports = conn;
