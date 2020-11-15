import { Component } from "react";
export default class Create extends Component {
  state={
    user: "",
    message:""
  }
  render() {
    const {addMessage} = this.props;
    const {user,message} = this.state;
    return <div>
        <input 
          type="text" 
          value={user}
          onChange={({target})=>{
              this.setState({
                user:target.value
              })
          }}
        /><br/>
        <textarea
          value={message}
          onChange={({target})=>{
            this.setState({
              message:target.value
            })
          }}
        ></textarea><br/>
        <button onClick={()=>{
            //console.log(user,message);
            addMessage(user,message);
        }}>提交</button> 
    </div>
  }
}