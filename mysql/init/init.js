let mysql = require('mysql');
const connection =  mysql.createConnection(require("./configure.js"));
module.exports = connection;
