var express = require("express");
var router = express.Router();

// 连接数据库
var connection = require("../conf/db.js");

// 路由获取信息
router.get('/', function (req, res, next) {
    // get获取参数
    var username = req.query.username;
    var password = req.query.password;
    console.log(username + password);
    connection("select * from user where username='" + username + "' and password='" + password + "'", function (err, rows, field) {
        console.log(rows);
        res.jsonp(rows);
    });
});

module.exports = router;