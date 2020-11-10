import { Component } from "react"
/*
   React 中的事件添加：
    1. React 添加事件类似于 js 的行间事件
    2. 事件名，从第二个单词开始首字母大写
    3. 注意事件处理函数的 this 指向为 undefined
      1. 使用箭头函数
      2. 通过 bind 绑定
*/
// class Li extends Component {
//   render() {
//     const {data} = this.props;
//     const {title,children} = data;
//     return <li className="subList-show">
//         <a onClick={()=>{
//           alert(1)
//         }}>{title}</a>
//         <ul className="subList">
//             {children.map((item,index)=>{
//                 return <li key={index}>{item}</li>
//             })}
//         </ul>
//       </li>
//   }
// }
// 通过 箭头函数 获取 this
/*
class Li extends Component {
  handlerClick=()=>{
    console.log(this);
  }
  render() {
    const {data} = this.props;
    const {title,children} = data;
    return <li className="subList-show">
        <a onClick={this.handlerClick}>{title}</a>
        <ul className="subList">
            {children.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
      </li>
  }
}
*/
class Li extends Component {
  constructor(props){
      super(props);
      this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(){
    console.log(this);
  }
  render() {
    const {data} = this.props;
    const {title,children} = data;
    return <li className="subList-show">
        <a onClick={this.handlerClick}>{title}</a>
        <ul className="subList">
            {children.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
      </li>
  }
}

export default Li;