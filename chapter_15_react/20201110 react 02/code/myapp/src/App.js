import { Component } from "react";
import Add from "./add";
import "./index.css";
import Todos from "./todos";
class App extends Component {
  state = {
    data:[{
      id: 1,
      text: "给你们加练习"
    },{
      id: 2,
      text: "给你们加测试"
    }]
  }
  addTodo=(newTodo)=>{
    const {data} = this.state;
    data.push({
      id: Date.now(),
      text: newTodo
    });
    this.setState({
      data:data
    })
  };
  removeTodo=(id)=>{
    const {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    const {data} = this.state;
    return <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <Add 
          addTodo={this.addTodo}
        />
        <Todos 
          data={data}
          removeTodo={this.removeTodo}
        />
      </div>
    </div>
  }
}

export default App;