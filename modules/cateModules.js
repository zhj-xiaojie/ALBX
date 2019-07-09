// 引入mysql
var mysql = require("mysql");

// 创建连接
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "baixiu",
  dateStrings: true
});
// 获取所有数据的分类
exports.getAllCateList = callback => {
  var sql = "select * from categories";
  conn.query(sql, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};
