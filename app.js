// 引入express
const express = require("express");

// 引入路由模块
const router = require("./router/indesx.js");
// 引入ejs
const ejs = require("ejs");

// 创建应用
const app = express();

// 开启服务器，监听端口号
app.listen(3000, () => {
  console.log("hhtp://127.0.0.1:3000");
});
// 设置默认模板引擎
app.set("view engine", "ejs");
app.set("views", "./views");
// 托管静态资源
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));

// 添加路由设置
app.use(router);
