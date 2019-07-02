$(function() {
  // 获取url地址栏
  var href = location.href;

  var index = href.indexOf("?");

  //  定义一个变量来存储路由名称
  var routerName = "";

  // 判断是否有参数
  if (index == -1) {
    //   没有参数
    routerName = href.substring(href.lastIndexOf("/") + 1);
  } else {
    routerName = href.substring(href.lastIndexOf("/") + 1, href.indexOf("?"));
  }

  // 获取要操控的元素
  var menu_posts = $("#menu-posts");
  // 判断路由名称是否当前跳转的页面
  if (
    routerName == "posts" ||
    routerName == "post-add" ||
    routerName == "categories"
  ) {
    menu_posts.addClass("in");
    menu_posts.attr("aria-expanded", true);
  }

  // 设置菜单的处理
  var menu_settings = $("#menu-settings");
  if (
    routerName == "nav-menus" ||
    routerName == "slides" ||
    routerName == "settings"
  ) {
    menu_settings.addClass("in");
    menu_settings.attr("aria-expanded", true);
  }

  //   给当前元素添加active类
  $("li").removeClass("active");
  $("#" + routerName).addClass("active");
});
