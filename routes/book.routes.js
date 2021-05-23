
var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book.controller');



router.get('/books', bookController.getBooks);

module.exports = router;
