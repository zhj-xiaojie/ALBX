var itcast = {
  // 获取当前路由名称
  getRouterName: href => {
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
    return routerName;
  }
};
