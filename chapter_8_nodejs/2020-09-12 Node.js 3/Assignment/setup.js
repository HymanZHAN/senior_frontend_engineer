const fs = require("fs");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "kkb",
  password: "12345678",
  database: "kkb",
});

function query(sql, values) {
  return new Promise((res, rej) => {
    connection.query(sql, values, function (err, results) {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  });
}

async function init() {
  const result = await query("SHOW TABLES LIKE 'users'");
  if (result.length === 0) {
    await query(
      `CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        username VARCHAR(1024), 
        password VARCHAR(1024)
        ) CHARACTER SET 'utf8mb4';`
    );
  }
}

module.exports.init = init;
module.exports.query = query;
