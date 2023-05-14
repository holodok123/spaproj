var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexfirst', function(req, res, next) {
  res.render('indexfirst');
});

module.exports = router;
