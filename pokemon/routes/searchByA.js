var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('searchByA', {
    title: 'Athletes VS Pokemon',
    errorMsg: ""
  });
});

module.exports = router;
