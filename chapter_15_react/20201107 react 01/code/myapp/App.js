import { Component } from "react";
/*
  state 状态，组件会随着状态的改变，进行视图更新
  当状态需要修改时，可以调用组件的 setState 方法修改组件的状态

*/
class App extends Component {
  state = {
    count: 1,
  };
  render() {
    console.log("render");
    let { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          递增
        </button>
      </div>
    );
  }
}

export default App;
