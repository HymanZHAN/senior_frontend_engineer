import {Component} from "react";
export default class Child extends Component {
  render(){
    const {children} = this.props;
    //console.log(this.props);
    return <div>
        <h1>child</h1>
        {children}
    </div>
  }
}