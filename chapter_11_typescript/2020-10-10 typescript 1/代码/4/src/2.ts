import axios from 'axios';



function fn<T>(val: T): T[] {
    // 函数中的数据不确定，用参数（变量）
    // 当类型不确定呢？也可以使用类型变量，类型参数

    let arr: T[] = new Array();
    arr.push(val);

    return arr;
}

let val1 = fn<string>('1');
let val2 = fn<number>(1);


// new Promise<number[]>((resolve, reject) => {
//     resolve([1,2,3]);
// }).then(val => {
//     val.push();
// });

interface IUser {
    id: number;
    name: string;
    email: string;
}

axios.get<IUser>('/user', {
    params: {
        //...
    }
}).then(res => {
    res.data.id;
});


// (async function() {
//     let rs = await axios.get('/user', {
//         params: {
//             //...
//         }
//     });
// })()