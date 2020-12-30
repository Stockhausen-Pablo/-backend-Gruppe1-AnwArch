const mysql = require("mysql");
var DBConf = require("../config/users.config.js");
const dbConfig = new DBConf();

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the user database.");
});

module.exports = connection;
