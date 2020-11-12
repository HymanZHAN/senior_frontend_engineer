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
  

*/
export default class Child extends Component {
  constructor(props){
      super(props);
      this.state = {
        state:"11"
      };
  }
  static getDerivedStateFromProps(props){
      console.log("1 - 将props关联入state")
      return props;
  }
  shouldComponentUpdate(nextProps,nextState){
    // 是否更新组件视图,注意在该生命周期函数中，state 和 props 还未更改，如果要获取更新后的state 和 props 请使用 nextProps,nextState
    console.log("2 - 判断组件是否需要更新");
    return true; // 返回值 为 true 则继续执行组件更新，并更新视图，为 false 则不继续执行生命周期，不更新视图
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    // 已经修改 state 和 props，并生成了新的虚拟DOM，即将修改真实DOM ，如果需要获取更新前的 props 和 state 需要通过参数获取
    // 用于获取更新前的 dom 快照
    console.log("4-获取更新前的DOM快照");
    return document.querySelector("#box").innerHTML; // 该返回值会传递给 componentDidUpdate
  }
  componentDidUpdate(prevProps,prevState,prevDOM){
    //console.log(prevDOM);
    console.log("5 - 组件更新完成")
  }
  render(){
    const {price,count,changeCount,changePrice} = this.props;
    //console.log(this.state);
    console.log("3 - 生成虚拟DOM");
    return <div id="box">
      <p>价格：{price} --- 数量:{count}</p>
      <button onClick={()=>{
        changeCount(count + 1);
      }}>递增</button>
      <button onClick={()=>{
        changePrice(price + 10)
      }}>涨价</button>
    </div>
  }
}
