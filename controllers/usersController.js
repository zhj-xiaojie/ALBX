// 引入usersModule文件
const usersModule = require("../modules/usersModule.js");
// 用户登录
exports.login = (req, res) => {
  var obj = req.body;

  usersModule.login(obj.email, (err, data) => {
    if (err) {
      res.json({
        code: 400,
        msg: "服务器异常"
      });
    }
    if (data) {
      if (obj.password == data.password) {
        //将登录成功的状态写入到cookie
        // res.writeHead(200, {
        //   "Set-Cookie": "islogin=true"
        // });
        res.json({
          code: 200,
          msg: "登录成功"
        });
      } else {
        res.json({
          code: 400,
          msg: "密码输入错误"
        });
      }
    } else {
      res.json({
        code: 400,
        msg: "邮箱输入错误"
      });
    }
  });
};
