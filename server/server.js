const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//const dbConn = require('./config/dbConn');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/api.js');

//static file
app.use(express.static(path.resolve(__dirname, '../src')));

app.use("/api", apiRouter)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// unknown route
app.use((req, res) => res.status(404).send('Unknown page, please try again.'));

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//set port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is lisentning on port ${PORT}.`);
})

module.exports = app;