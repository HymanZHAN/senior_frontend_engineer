import { Component } from "react";
import Child from "./child";
import {Provider} from "./context";
class App extends Component {
  state={
    count: 1,
    price: 10
  }
  changeCount=(count)=>{
    this.setState({
      count
    })
  }
  changePrice=(price)=>{
    this.setState({
      price
    })
  }
  render(){
    const {count,price} = this.state;
    return <Provider
      value={{
        count,
        price,
        changeCount:this.changeCount,
        changePrice:this.changePrice
      }}
    >
         <Child  />
    </Provider>
  }
}

export default App;