$(function() {
  // 当前页码
  var pagenum = 1;
  // 每页显示的条数
  var pagesize = 4;

  // 调用init，发起ajax请求，请求所有文章数据
  init({});

  // 实现用户数据的筛选
  $(".btn-search").on("click", function(e) {
    e.preventDefault();
    //获取用户的数据
    var query = {};
    // 判断用户有没有选定指定的筛选条件
    if ($(".cateSelector").val() != "all") {
      query.cate = $(".cateSelector").val();
    }
    if ($(".statuSelector").val() != "all") {
      query.statu = $(".statuSelector").val();
    }

    // 发起请求
    init(query);
  });

  // 使用一个自调用函数来实现数据的加载
  (function() {
    $.ajax({
      url: "/getAllCateList",
      method: "get",
      success: function(res) {
        //生成分类数据的动态结构
        var html = '<option value="all">所有分类</option>';
        for (var i = 0; i < res.data.length; i++) {
          html += `<option value="${res.data[i].id}">${
            res.data[i].name
          }</option>`;
        }
        $(".cateSelector").html(html);
      }
    });
  })();

  // 数据初始化
  function init(query) {
    // console.log(query);
    $.ajax({
      // 请求方式
      type: "get",
      // 请求路径
      url: "/getPostList",
      data: {
        pagenum: pagenum,
        pagesize: pagesize,
        // 展开运算符：可以将一个对象的具体属性进行展开，展为一组一组的键值对
        ...query
      },
      dataType: "json",
      success: function(res) {
        // console.log(res);
        // 生成文章数据结构
        var html = template("postListTemp", res.data);
        $("tbody").html(html);

        // 生成分页结构
        setPage(Math.ceil(res.data.total / pagesize));
      }
    });
  }
  // 实现分页
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
      // 设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pagenum,
      // 总页数
      totalPages: count,
      //当单击页码按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function(event, originalEvent, type, page) {
        // 这个page是当前合理页码值，只需要将全局的pagenum重置，并重新获取数据就行
        pagenum = page;

        // 调用init，重新获取数据
        init();
      }
    });
  }

  //使用事件委托的方式来实现文章数据的删除
  $("tbody").on("click", ".btndel", function() {
    if (window.confirm("请问你是否要删除？")) {
      // 获取id
      var id = $(this).data("id");
      $.ajax({
        type: "get",
        url: "/delPostById",
        data: { id: id },
        success: res => {
          console.log(res);
        }
      });
    }
  });
});
