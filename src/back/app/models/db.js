// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL;
const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } })
client.connect()

/* Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
*/

module.exports = client;