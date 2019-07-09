$(function() {
  // 加载所有分类数据
  $.ajax({
    url: "/getAllCateList",
    dataType: "json",
    success: function(res) {
      //生成分类数据的动态结构
      var html = "";
      for (var i = 0; i < res.data.length; i++) {
        html += `<option value="${res.data[i].id}">${
          res.data[i].name
        }</option>`;
      }
      $("#category").html(html);
    }
  });

  //初始化富文本框：创建一个富文本框覆盖指定的id号的textarea
  CKEDITOR.replace("content");

  //   保留文章数据  实现文章的新增
  $("btnSave").on("click", function(e) {
    e.preventDefault();
    //同步数据：将富文本框中的数据与textearea中的数据进行同步，两者同步之后数据会一样
    CKEDITOR.instances.content.updateElement();
    //serialize获取当前表单中所拥有的name属性的value值
    console.log($(".row").serialize());

    $.ajax({
      type: "post",
      url: "/addPost",
      data: $(".row").serialize(),
      dataType: "json",
      success: function(res) {
        console.log(res);
      }
    });
  });

  //实现文件上传
  $("#feature").on("change", function() {
    // 获取当前被选择文件对象
    // files 可以获取当前所有被选择文件对象，它是一个数组，里面的每一个值都是当前被选择的一个一个文件对象
    var myfile = document.querySelector("#feature").files[0];
    // 创建formdata
    var formdata = new FormData();
    //追加参数
    formdata.append("img", myfile);
    // 发起ajax请求
    $.ajax({
      type: "post",
      url: "/uploadFile",
      data: formdata,
      processData: false, //让ajax不要进行数据出理，formdata会进行处理
      contentType: false, //让ajax不要对数据进行1编码，因为formdata会进行编码处理
      dataType: "json",
      success: function(res) {
        console.log(res);
        if (res.code == 200) {
          //将文件名称存储到指定的隐藏域中
          $('[name="feature"]').val(res.img);
          //实现预览
          $(".thumbnail")
            .attr("src", "/uploads/" + res.img)
            .show();
        } else {
        }
      }
    });
  });
});
