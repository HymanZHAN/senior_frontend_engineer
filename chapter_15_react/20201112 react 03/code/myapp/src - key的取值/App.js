import { Component } from "react";
import Create from "./create";
import List from "./list";
export default class App extends Component {
  state={
    data:[
      {
        id: 1,
        user:"又又",
        message:"不想加班"
      },
      {
        id: 2,
        user:"又又",
        message:"为什么还是我加班"
      }
    ]
  }
  addMessage=(user,message)=>{
    const {data} = this.state;
    this.setState({
      data:[
        ...data,
        {
          id:Date.now(),
          user,
          message
        }
      ]
    });
  }
  render() {
    const {data} = this.state;
    return <div id="todoapp">
          <Create 
            addMessage={this.addMessage}
          />
          <List 
            data= {data}
          />
    </div>
  }
}