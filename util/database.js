const mysql = require('mysql2');
 
// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password : 'tanvi@123'
});

module.exports = pool.promise();
 