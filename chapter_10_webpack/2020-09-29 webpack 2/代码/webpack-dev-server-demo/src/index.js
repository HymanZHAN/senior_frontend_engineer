// import logo from './images/logo.png';
import fn from './fn';
import fn1 from './fn1';
import './css/css.css';

// console.log(fn);

document.onclick = fn;


// console.log(module.hot);
if (module.hot) {
    // 与事件机制类型
    module.hot.accept('./fn.js', function() {
        console.log('fn 模块变了');

        document.onclick = fn;
    });

    module.hot.accept('./fn1.js', function() {
        console.log('fn1 模块变了');
    });
}