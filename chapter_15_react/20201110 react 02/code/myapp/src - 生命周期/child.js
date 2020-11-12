import { Component } from "react";
/*
生命周期: (16.4 之后的版本) 
  挂载( mount 将组件初始化，并且渲染到DOM中):
    - constructor
    - static getDerivedStateFromProps(props) 
      - 注意 this 问题
    - render
    - componentDidMount -- 处理副作用(请求)
  更新阶段 ( update 组件发生更新，并且生成新的虚拟DOM，并根据新的虚拟DOM，完成真实DOM的修改):
    - static getDerivedStateFromProps(props, state)
    - shouldComponentUpdate()  -- 判断是否更新
    - render()
    - getSnapshotBeforeUpdate() 
    - componentDidUpdate() -- 处理副作用(请求)
  卸载阶段 (unMount 将组件从真实DOM中删除)
    - componentWillUnmount 组件即将卸载

*/
export default class Child extends Component {
  componentDidMount(){
    let info = document.querySelector("#info");
    info.innerHTML = window.innerWidth;
    window.onresize=function(){
      let info = document.querySelector("#info");
      info.innerHTML = window.innerWidth;
    };
  }
  componentWillUnmount(){
    window.onresize = null;
  }
  render(){
    const {price,count,changeCount,changePrice} = this.props;
    return <div id="box">
      <p>价格：{price} --- 数量:{count}</p>
      <button onClick={()=>{
        changeCount(count + 1);
      }}>递增</button>
      <button onClick={()=>{
        changePrice(price + 10)
      }}>涨价</button>
      <br/>
      <span id="info"></span>
    </div>
  }
}
