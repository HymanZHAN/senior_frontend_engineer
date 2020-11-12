import { Component } from "react";
import "./index.css";
import List from "./list";
import {datas} from "./data";
class App extends Component {
  render(){
    return <div className="friend-list">
      {Object.keys(datas).map((item,index)=>{
          return <List key={index} data={datas[item]} />
      })}
  </div> 
  }
}

export default App;