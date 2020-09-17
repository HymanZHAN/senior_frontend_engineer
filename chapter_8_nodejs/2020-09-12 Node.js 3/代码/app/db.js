const mysql = require('mysql2');
const items = require('./data/items.json');

// 创建一个mysql的链接对象
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'kkb_shop_11'
});

// connection.query(
//     "select * from categories",
//     function(err, results) {
//         if (err) {
//             console.log('出错了', err);
//         } else {
//             console.log('result', results);
//         }
//     }
// )

// for (let i = 0; i<items.length; i++) {
//     let item = items[i];
//     connection.query(
//         "insert into `items` (`category_id`, `name`, `price`, `cover`) values (?, ?, ?, ?)",
//         [
//             item.category_id,
//             item.name,
//             item.price,
//             item.cover
//         ]
//     );
// }


/**
 * node 中针对异步有一些约定
 *  1、通过回调函数的方式
 *  2、这种回调函数通常第一个参数是err，第二个是异步操作后的结果
 *      first error
 */

// fs.readFile('./1.txt', function(err, chunk) {
//
// })

