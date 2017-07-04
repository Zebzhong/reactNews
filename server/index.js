var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");

app.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/", router);

app.listen(3000, function() {
	console.log("服务器启动成功");
})