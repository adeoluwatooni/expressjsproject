var express = require('express');
var router = express.Router();

var timeChecker = require('../Authenticator-middlewares/timeChecker.js')




/* GET home page. */
router.get('/', timeChecker, function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET services page. */
router.get('/services', timeChecker, function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

/* GET contact page. */
router.get('/contact', timeChecker, function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
