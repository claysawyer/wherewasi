const { Pool } = require('pg');

const PG_URI = 'postgres://ibwexzkr:dw2QhererrEcQkmjTYEYX3rROeYRIgcr@heffalump.db.elephantsql.com/ibwexzkr';

//creates pool with above PG_URI
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};