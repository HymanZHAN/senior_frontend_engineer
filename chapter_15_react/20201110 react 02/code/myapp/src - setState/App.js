import { Component } from "react";
/*
  - setState(updater, [callback])
    - updater: 更新数据 FUNCTION/OBJECT
    - callback: 更新成功后的回调 FUNCTION
    - 异步: react通常会集齐一批需要更新的组件，然后一次性更新来保证渲染的性能
    - 浅合并 Object.assign()
    - 调用 setState 之后，会触发生命周期，重新渲染组件
*/

/*
  1. 在 React 中，不建议直接修改 state，当需要修改state时，请使用 setState 方法
  2. setState 是一个异步方法
  3. 一个操作内多次调用 setState 会进行合并更新

  setState --> 组件发生更新 --> render 
*/
class App extends Component {
  state = {
    name: "web前端高级工程师课程",
    count: 1,
    price: 8888
  }
  render(){
    console.log("render");
    const {name,count,price} = this.state;
    return <div>
      <p>商品:{name} --- 价格:{price} --- 报名人数:{count}</p>
      <button onClick={()=>{
          // 注意当updater 为 function 时，返回时，是其要修改的状态
          this.setState({
              count: count + 1
            },()=>{
              console.log("组件更新完成");
            })
      }}>报名</button>
      <button onClick={()=>{
          this.setState({
            price: price+100
          });
          this.setState({
            count: count+10
          });
          console.log(this.state);
      }}>涨价</button>
  </div> 
  }
}

export default App;