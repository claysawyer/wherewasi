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
        message: { err: 'err in seriesController.getBooks' }
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
        message: { err: 'err in seriesController.addBook' }
      };
      return next(defaultErr);
    });
};

seriesController.delete = (req, res, next) => {
  const bookName = req.params.bookName;
  console.log("bookname", req.params)
  const bookToBeRemoved = `DELETE FROM bookshelf WHERE bookshelf.name = '${bookName}'`;
  db.query(bookToBeRemoved)
    .then(data => {
      res.locals.deletedBook = data.rows[0];
      return next();
    })
    .catch(err => {
      const defaultErr = {
        log: 'seriesController.deleteBook',
        message: { err: 'err in seriesController.deleteBook' + err }
      };
      return next(defaultErr);
    });

}

module.exports = seriesController;