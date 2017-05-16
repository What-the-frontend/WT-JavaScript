var express = require("express");

var app = express();

var router = express.Router();

var bodyParser = require("body-parser")

var fs = require("fs");

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

router.route("/").post(function(req,res){
    console.log(req.body)
    res.status(200);
});

app.listen(3000,function(){
    console.log("server start!");
});