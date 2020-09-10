const fs = require("fs");

function deleteNonEmptyDir(dir) {
  let data = fs.readdirSync(dir);
  data.forEach((item) => {
    let itemPath = `${dir}/${item}`;
    let stat = fs.statSync(itemPath);
    if (stat.isFile()) {
      fs.unlinkSync(itemPath);
    } else if (stat.isDirectory()) {
      deleteNonEmptyDir(itemPath);
    }
  });
  fs.rmdirSync(dir);
}

deleteNonEmptyDir("22");
