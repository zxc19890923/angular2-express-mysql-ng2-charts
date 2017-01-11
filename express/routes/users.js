var express = require('express');
var router = express.Router();
// 连接数据库
var connection = require("../conf/db.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  	// res.jsonp({"name": "zhangxuchao"});
  	connection("select * from user", function(err, rows, fields) {
  		console.log(rows);
  		res.jsonp(rows);
  	})
});

module.exports = router;
