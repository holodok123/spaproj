var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexsecond', function(req, res, next) {
  res.render('indexsecond');
});

module.exports = router;
