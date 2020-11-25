import { useState } from "react";

function Popup(props){
  const {render} = props;
  const [show,setShow] = useState(true);
  const Clos = ()=>{
    return <button onClick={()=>{
      setShow(false);
    }}>关闭</button>
  }
  return <div>
      {show?render(Clos):""}
  </div>
}

export default Popup;