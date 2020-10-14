import axios from 'axios';

axios();

interface IOption {
    a: number;
    b: number;
}

// 函数重载：为同一个函数在参数个数或者参数类型不同的场景下定义的一种方式

function fn(a: number, b: number);
function fn(options: IOption);

function fn(a: number|IOption, b?: number) {
    if (arguments.length == 1) {
        //...
    } else {
        //...
    }
}


// fn(1, 2);
// fn({a: 1, b: 2}, 2);