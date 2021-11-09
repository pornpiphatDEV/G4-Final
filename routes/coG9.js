var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('convidR9-2');
});

router.get('/home', function (req, res, next) {
  res.render('covidR9');
});

module.exports = router;
