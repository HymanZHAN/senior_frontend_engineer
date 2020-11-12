import { Component } from "react";
class Add extends Component {
  state={val:""}
  render() {
    const {addTodo} = this.props;
    const {val} = this.state;
    return <div id="create-todo">
          <input 
            id="new-todo" 
            placeholder="What needs to be done?" 
            autoComplete="off" 
            type="text"
            value={val}
            onChange={({target})=>{
               this.setState({
                 val:target.value
               }) 
            }}
            onKeyDown={({keyCode})=>{
              if(keyCode===13){
                 addTodo(val);
                 this.setState({
                   val:""
                 })
              }
            }}
          />
        </div>
  }
}

export default Add;