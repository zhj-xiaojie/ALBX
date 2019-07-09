// 引入postsModules
var postsModules = require("../modules/postsModules.js");

var moment = require("moment");
//获取所有文章列表的数据
exports.getPostList = (req, res) => {
  // 获取参数  添加了body-parser配置
  var obj = req.query;
  //    获取所有文章数据
  postsModules.getPostList(obj, (err, data) => {
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

//根据文章id删除文章数据
exports.delPostById = (req, res) => {
  var id = req.query.id;
  //调用数据模块中的方法
  postsModules.delPostById(id, err => {
    if (err) {
      res.json({
        code: "400",
        msg: "数据查询失败"
      });
    } else {
      res.json({
        code: "200",
        msg: "数据查询成功"
      });
    }
  });
};

//实现文章的新增
exports.addPost = (req, res) => {
  //接收参数
  var obj = req.body;
  obj.views = 0;
  obj.likes = 0;
  obj.user_id = "?";
  console.log(obj);
};
