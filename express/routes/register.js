var express = require("express");
var router = express.Router();
// 连接数据库
var connection = require("../conf/db.js");
router.get("/", function (req, res, next) {
    var username = req.query.username;
    var password = req.query.password;
    var address = req.query.address;
    var email = req.query.email;
    var position = req.query.position;
    var time = new Date().toLocaleString( );        //获取日期与时间
    connection("insert into user(username, password, time, status, address, email, position) values('" + username + "', '" + password +  "', '" + time + "', 1, '" + address + "', '" + email + "', '" + position + "')", function (err, rows, field) {
        console.log(rows);
        res.jsonp(rows);
        console.log(err);
    })
});

module.exports = router;