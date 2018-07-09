const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.database
});

module.exports = pool;