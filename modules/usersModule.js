var conn = require("./mysqlHelper.js");

// 用户登录
exports.login = (email, callback) => {
  var sql = `select * from users where email = '${email}'`;
  conn.query(sql, (err, results) => {
    // console.log(sql);
    // console.log(results);
    if (err) {
      callback(err);
    } else {
      callback(null, results[0]);
    }
  });
};
