var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('searchByPop', { title: 'Athletes VS Pokemon' });
});

module.exports = router;
