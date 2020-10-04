import m2 from './2.js';
// webpack会把读取到的内容作为js代码
// 把txt的文件内容作为纯文本
import txt from './data/data.txt';

// import img from './images/webpack_description.jpg';

import css from './css/index.css';

m2.fn();



console.log('txt', txt);
// console.log('img', img);
//
// let imgElement = new Image();
// imgElement.src = img;
// document.body.appendChild(imgElement);

// console.log('css', css.toString());
//
// let styleElement = document.createElement('style');
// styleElement.innerHTML = css.toString();
// document.head.appendChild(styleElement);