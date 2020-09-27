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
  const userDbResult = await query("SHOW TABLES LIKE 'users'");
  if (userDbResult.length === 0) {
    await query(
      `CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        username VARCHAR(1024) UNIQUE, 
        password VARCHAR(255)
        ) CHARACTER SET 'utf8mb4';`
    );
  }

  const result = await query("SHOW TABLES LIKE 'photos'");
  if (result.length === 0) {
    await query(
      `CREATE TABLE photos (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        filename VARCHAR(1024), 
        type VARCHAR(255), 
        size INT,
        userId INT NOT NULL,
        CONSTRAINT fk_user
        FOREIGN KEY (userId) 
          REFERENCES users(id)
        ) CHARACTER SET 'utf8mb4';`
    );
  }

  const attachmentPath = __dirname + "/static/upload";
  if (!fs.existsSync(attachmentPath)) {
    fs.mkdirSync(attachmentPath);
  }
}

module.exports.init = init;
module.exports.query = query;
module.exports.JWT_SECRET = "kaikeba";
