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
  卸载阶段 (unMount 将组件从真实DOM中删除)
  

*/
export default class Child extends Component {
  constructor(props){
      super(props);
      this.state = {
        state:"11"
      };
      console.log("1 - 初始化");
  }
  static getDerivedStateFromProps(props){
      //将 props 中的数据关联到 state 中
      console.log("2 - 将props关联入state")
      //console.log(this);
     
      return props;
  }
  componentDidMount(){
    // 组件挂载完成: 执行副作用(异步操作,获取真实DOM节点)
    console.log("4-已经将 render 构建的虚拟DOM，生成真实DOM，并放入DOM树中");
    //console.log(document.querySelector("#box"));
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
