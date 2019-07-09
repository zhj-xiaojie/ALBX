// 引入mysql
var mysql = require("mysql");

// 创建连接
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "baixiu",
  dateStrings: true
});

exports.getPostList = (params, callback) => {
  // 创建sql语句
  var sql = `select 
    posts.id pid,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    where 1=1 `;
  // 这里可以根据判断结构拼接筛选条件
  if (params.cate) {
    //拼接分类条件
    sql += ` and posts.category_id = ${params.cate} `;
  }
  if (params.statu) {
    //拼接状态条件
    sql += ` and posts.status = '${params.statu}' `;
  }
  sql += ` order by posts.id desc 
    limit ${(params.pagenum - 1) * params.pagesize},${params.pagesize} `;

  conn.query(sql, (err, results) => {
    if (err) {
      callback(err);
    } else {
      //这条语句 可以获取posts表中的总记录数
      sql = "select count(*) cnt from posts";
      conn.query(sql, (err1, data1) => {
        if (err1) {
          callback(err1);
        } else {
          // 需要返回查询出的数据，又需要返回查询出总记录数
          callback(null, { data: results, total: data1[0].cnt });
        }
      });
    }
  });
};

//根据文章id删除文章数据
exports.delPostById = (id, callback) => {
  var sql = "delete from posts where id = " + id;
  conn.query(sql, (err, resluts) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};
