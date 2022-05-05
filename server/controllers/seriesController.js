const db = require('../models/seriesModel');

const seriesController = {};

seriesController.getBooks = (req, res, next) => {
  db.query(`SELECT * FROM bookshelf`)
    .then(data => {
      console.log('query', data.rows)
      res.locals.books = data.rows;
      return next();
    })
    .catch(err => {
      const defaultErr = {
        log: 'seriesController.getBooks',
        message: { err: 'super bummed on your error bro' }
      };
      return next(defaultErr);
    });
};

seriesController.addBook = (req, res, next) => {
  const { type, name, summary, bookmark, notes } = req.body;
  const insert = 'INSERT INTO bookshelf (type, name, bookmark, summary, notes) VALUES ($1, $2, $3, $4, $5);';
  const values = [type, name, summary, bookmark, notes];
  db.query(insert, values)
    .then(data => {
      res.locals.newBook = data.rows[0];
      return next();
    })
    .catch(err => {
      const defaultErr = {
        log: 'seriesController.addBook',
        message: { err: 'super bummed on your error bro' }
      };
      return next(defaultErr);
    });
};

seriesController.delete = (req, res, next) => {

}

module.exports = seriesController;