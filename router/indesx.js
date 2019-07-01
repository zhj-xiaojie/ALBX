// 引入pagesController
const pagesController = require("../controllers/pagesController.js");
// 引入express
const express = require("express");
// 引入fs模块
const fs = require("fs");

// 创建路由对象当中间件来用
const router = express.Router();
// 前台页面调用pagesController
router
  .get("/", pagesController.getIndexPage)
  .get("/detail", pagesController.getDetailPage)
  .get("/list", pagesController.getListPage)

  //  后台页面调用
  .get("/admin", pagesController.getAIndexPage)
  .get("/admin/categories", pagesController.getCategoriesPage)
  .get("/admin/comments", pagesController.getCommentsPage)
  .get("/admin/login", pagesController.getLoginPage)
  .get("/admin/nav-menus", pagesController.getNavMenusPage)
  .get("/admin/password", pagesController.getPasswordResetPage)
  .get("/admin/post-add", pagesController.getPostAddPage)
  .get("/admin/posts", pagesController.getPostsPage)
  .get("/admin/profile", pagesController.getProfilePage)
  .get("/admin/settings", pagesController.getSettingsPage)
  .get("/admin/slides", pagesController.getSlidesPage)
  .get("/admin/users", pagesController.getUsersPage);

// 向外暴露router对象
module.exports = router;
