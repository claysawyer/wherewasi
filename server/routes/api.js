const express = require('express');

//const seriesController = require('./controllers/seriesController.js');

const router = express.Router();

//routes
router.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
})

module.exports = router;