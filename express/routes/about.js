var express = require('express');
var router = express.Router();
var connection = require("../conf/db.js");

router.get('/', function(req, res, next) {
	// 获取url地址里面的参数
	var uid = req.query.uid;
	console.log(uid);
	connection("select * from player_info where uid=" + uid, function(err, rows, fields) {
		console.log(rows);
		res.jsonp(rows);
	})
});

module.exports = router;
