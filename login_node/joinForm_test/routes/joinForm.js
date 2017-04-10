var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('joinForm', {title:'joinForm'});
});

router.post('/', function(req, res, next){
    console.log("req.body : " + req.body);
    res.json(req.body);
});

module.exports = router;