
var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book.controller');



//router.get('/books',bookController.getBooks);
//router.get('/', function(req, res, next) {
  // res.render('index', { title: 'книге' });
//});
router.get('/',bookController.book_list);

module.exports = router;
