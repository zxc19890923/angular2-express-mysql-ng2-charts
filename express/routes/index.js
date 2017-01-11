var express = require('express');
var router = express.Router();
var connection = require("../conf/db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  connection("select * from player", function(err, rows, fields) {
  	console.log(rows);
  	res.jsonp(rows);
  });
});

module.exports = router;
