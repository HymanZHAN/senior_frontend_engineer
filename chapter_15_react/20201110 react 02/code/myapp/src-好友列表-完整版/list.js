import { Component } from "react";
class List extends Component {
  render(){
    const {data,openName,name,changeOpen} = this.props;
    const {title,list} = data;
    return <dl className={`friend-group ${openName===name?"expanded":""}`}>
        <dt onClick={()=>{
            changeOpen(openName === name?"":name);
        }}>{title}</dt>
        {list.map((item,index)=>{
          return <dd key={index}>{item.name}</dd>
        })}
    </dl>
  }
}

export default List;