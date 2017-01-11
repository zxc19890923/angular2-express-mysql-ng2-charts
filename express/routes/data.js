var express = require("express");
var router = express.Router();
// 连接数据库
var connection = require("../conf/db.js");
router.get("/", function (req, res, next) {
    var id = req.query.id;
    console.log(id);
    connection("select * from data where uid = '" + id + "'", function (err, rows, field) {
        console.log(rows);
        res.jsonp(rows);
    })
});
module.exports = router;