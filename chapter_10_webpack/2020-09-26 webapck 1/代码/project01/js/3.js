function fn2() {
    fn1();
    console.log('fn2');
}

function fn() {
    console.log('fn');
}

let obj3 = {
    // 把代码放置特定的一个环境下，比如一个对象，每一个文件都有自己所代表的对象
}