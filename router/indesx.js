// 引入pagesController
const pagesController = require("../controllers/pagesController.js");
// 引入postsController
const postsController = require("../controllers/postsController.js");
// 引入cateController
const cateController = require("../controllers/cateController.js");
const uploadController = require("../controllers/uploadController.js");
const usersController = require("../controllers/usersController.js");
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
  .get("/admin/users", pagesController.getUsersPage)

  // 获取所有文章的数据
  .get("/getPostList", postsController.getPostList)

  .get("/delPostById", postsController.delPostById)
  .post("/addPost", postsController.addPost)

  // 获取所有数据的分类
  .get("/getAllCateList", cateController.getAllCateList)

  //文章上传
  .post("/uploadFile", uploadController.uploadFile)

  // 用户登录
  .post("/login", usersController.login);

// 向外暴露router对象
module.exports = router;
