var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET all blog posts page
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Posts' });
});

//GET all blog posts page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;