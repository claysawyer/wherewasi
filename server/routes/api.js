const express = require('express');

const seriesController = require('../controllers/seriesController.js');

const router = express.Router();

// routes
router.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname + '../src/index.html'));
});

// get books
router.get('/getBooks', seriesController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
});

// add book
router.post('/addBook', seriesController.addBook, (req, res) => {
  res.status(200).json(req.body);
});

// delete book
router.delete('/deleteBook/:bookName', seriesController.delete, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;