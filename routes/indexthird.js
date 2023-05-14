var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexthird', function(req, res, next) {
  res.render('indexthird');
});

module.exports = router;
