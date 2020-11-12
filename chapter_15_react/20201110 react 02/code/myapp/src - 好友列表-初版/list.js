import { Component } from "react";
class List extends Component {
  state={
    show: false
  }
  render(){
    const {data} = this.props;
    const {title,list} = data;
    const {show} = this.state;
    return <dl className={`friend-group ${show?"expanded":""}`}>
        <dt onClick={()=>{
            this.setState({
              show: !show
            })
        }}>{title}</dt>
        {list.map((item,index)=>{
          return <dd key={index}>{item.name}</dd>
        })}
    </dl>
  }
}

export default List;