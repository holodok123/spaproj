var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexfive', function(req, res, next) {
  res.render('indexfive');
});

module.exports = router;
