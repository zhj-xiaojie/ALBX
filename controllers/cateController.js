// 这个文件用来实现分类数据的用户请求响应

// 引入cateModules
var cateModules = require("../modules/cateModules.js");

exports.getAllCateList = (req, res) => {
  // 调用数据模块进行数据的获取
  cateModules.getAllCateList((err, data) => {
    if (err) {
      res.json({
        code: "400",
        msg: "数据查询失败"
      });
    } else {
      res.json({
        code: "200",
        msg: "数据查询成功",
        data: data
      });
    }
  });
};
