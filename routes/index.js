var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* 第一引数: view
  *  第二引数: viewに渡すパラメータ
  */
  res.render('index', { title: 'Express', message: 'Hello World!' });
});

module.exports = router;
