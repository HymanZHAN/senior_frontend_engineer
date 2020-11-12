import { Component } from "react";
/*
  - setState(updater, [callback])
    - updater: 更新数据 FUNCTION/OBJECT
    - callback: 更新成功后的回调 FUNCTION
    - 异步:react通常会集齐一批需要更新的组件，然后一次性更新来保证渲染的性能
    - 浅合并 Object.assign()
    - 调用 setState 之后，会触发生命周期，重新渲染组件
*/
class App extends Component {
  state = {
    data:{
      name: "web前端高级工程师课程",
      count: 1,
      price: 8888
    }
  }
  render(){
    const {data} = this.state;
    const {name,count,price} = data;
    return <div>
      <p>商品:{name} --- 价格:{price} --- 报名人数:{count}</p>
      <button onClick={()=>{
          // 注意当updater 为 function 时，返回时，是其要修改的状态
          this.setState(()=>{
            // 注意 setState 会对要修改的状态进行浅合并，所以只需要返回要修改的状态即可，但是如果状态中包含有引用类型的数据，只修改数据中的某一项，需要我们自己对数据进行合并
            return {
              data:{
                  ...data,
                  count: count + 1
                }
            }
          })
      }}>报名</button>
      <button>涨价</button>
  </div> 
  }
}

export default App;