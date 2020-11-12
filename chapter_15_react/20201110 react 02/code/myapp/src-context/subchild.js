import { Component } from "react";
import context from "./context";
export default class SubChild extends Component {
  //static contextType = context;
  render(){
    const {price,count,changeCount,changePrice} = this.context;
    return <div>
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
SubChild.contextType = context;
