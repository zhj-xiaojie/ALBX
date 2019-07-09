// 实现用户登录
$(function() {
  $(".btnlogin").on("click", function() {
    var email = $('[name="email"]').val();
    var password = $('[name="password"]').val();
    console.log(email, password);
    $.ajax({
      type: "post",
      url: "/login",

      beforeSend: function() {
        //   判断邮箱是否真确合法
        if (!/\w+[@]\w+[.]\w+/.test(email)) {
          $(".alert-danger > span").text("请输入合法的电子邮箱");
          $(".alert-danger")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          return false;
        }
        // 判断密码是否有误
        if (password.trim().length == 0) {
          $(".alert-danger > span").text("请输入有效的密码");
          $(".alert-danger")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          return false;
        }
      },

      data: $(".loginform").serialize(),
      dataType: "json",

      success: function(res) {
        if (res.code == 200) {
          //   实现页面跳转
          location.href = "/admin";
        } else {
          $(".alert-danger > span").text(res.msg);
          $(".alert-danger")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
        }
      }
    });
  });
});
