import {getUser, getUsers, login, register} from './api';

(async function() {
    let user = await getUser(1);
    user.data.id
    user.data.username;

    let users = await getUsers('desc');
    users.data.forEach(user => {
        console.log(user.id);
    });

    await register({
        username: 'zmouse',
        password: '123',
        repassword: '123'
    });

})()