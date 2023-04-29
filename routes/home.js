var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
