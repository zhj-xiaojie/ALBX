// 响应回给浏览器的页面

// 引入核心模块
const fs = require("fs");
const path = require("path");

// 前台页面
module.exports.getIndexPage = (req, res) => {
  fs.readFile(path.join(__dirname, "../views/index.ejs"), (err, data) => {
    if (err) res.end("404");
    res.end(data);
  });
};
module.exports.getDetailPage = (req, res) => {
  fs.readFile(path.join(__dirname, "../views/detail.ejs"), (err, data) => {
    if (err) res.end("404");
    res.end(data);
  });
};
module.exports.getListPage = (req, res) => {
  fs.readFile(path.join(__dirname, "../views/list.ejs"), (err, data) => {
    if (err) res.end("404");
    res.end(data);
  });
};

// 后台页面

module.exports.getAIndexPage = (req, res) => {
  res.render("admin/index.ejs");
};
module.exports.getCategoriesPage = (req, res) => {
  res.render("admin/categories.ejs");
};
module.exports.getCommentsPage = (req, res) => {
  res.render("admin/comments.ejs");
};
module.exports.getLoginPage = (req, res) => {
  res.render("admin/login.ejs");
};
module.exports.getNavMenusPage = (req, res) => {
  res.render("admin/nav-menus.ejs");
};
module.exports.getPasswordResetPage = (req, res) => {
  res.render("admin/password.ejs");
};
module.exports.getPostAddPage = (req, res) => {
  res.render("admin/post-add.ejs");
};
module.exports.getPostsPage = (req, res) => {
  res.render("admin/posts.ejs");
};
module.exports.getProfilePage = (req, res) => {
  res.render("admin/profile.ejs");
};
module.exports.getSettingsPage = (req, res) => {
  res.render("admin/settings.ejs");
};
module.exports.getSlidesPage = (req, res) => {
  res.render("admin/slides.ejs");
};
module.exports.getUsersPage = (req, res) => {
  res.render("admin/users.ejs");
};
