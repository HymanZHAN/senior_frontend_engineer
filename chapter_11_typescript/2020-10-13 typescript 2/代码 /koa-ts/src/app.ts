import KKB from './KKB';

import {index} from './controllers/main';
import {index as userIndex, login, register} from './controllers/user';

const app = new KKB({
    port: 9999
});

// 当路由变多了，把所有路由有关的代码写在这里，会让 app.ts 这个文件变得极其庞大和复杂
// app.router.get('/', async ctx => {
//     ctx.body = 'hello';
// });

// 注册路由
app.router.get('/', index);
app.router.get('/user', userIndex);
app.router.get('/register', register);
app.router.get('/login', login);


app.start();