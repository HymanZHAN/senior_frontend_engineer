import React from "react";
import ReactDOM from "react-dom";
/*
  插值表达式:
    JS表达式：产生值的一组代码的集合
    表达式：
      变量，运算符，函数调用
    条件渲染:
    ||: 条件不成立时返回某些内容
    &&：条件成立时返回某些内容
    ?:  条件？成立时返回内容:不成立时返回内容
    函数
*/
function getData(is) {
  if (is < 5) {
    return <h1>小于5</h1>;
  } else if (is < 10) {
    return <h1>小于10</h1>;
  }
  return <h1>大于10</h1>;
}
let div = <div>{getData(12)}</div>;
ReactDOM.render(div, document.querySelector("#root"));
