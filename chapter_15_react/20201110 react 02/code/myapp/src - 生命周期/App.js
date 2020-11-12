import { Component, Fragment } from "react";
import Child from "./child";
class App extends Component {
  state = {
    count: 1,
    price: 10,
    show: true
  }
  changeCount = (count) => {
    this.setState({
      count
    })
  }
  changePrice = (price) => {
    this.setState({
      price
    })
  }
  render() {
    const { count, price,show } = this.state;
    return <Fragment>
      {show?<Child
        count={count}
        price={price}
        changeCount={this.changeCount}
        changePrice={this.changePrice}
      />:""}
      <button onClick={()=>{
        this.setState({
          show:!show
        })
      }}>显示/隐藏</button>
    </Fragment>
  }
}

export default App;