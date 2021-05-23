const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: '098567345',
  host: "localhost",
  port:5432,
  database: "d_IS"

});
module.exports = pool;
