var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexfour', function(req, res, next) {
  res.render('indexfour');
});

module.exports = router;
