import { Route } from "react-router-dom";

const { default: Popup } = require("../../component/pop");
const { default: IndexNav } = require("./indexNav");

function IndexPage() {
   return <div className="view">
         <div className="wrap">
            <IndexNav />
            <Route render={(routerProps)=>{
               return <div>视图</div>
            }} />
            <Popup 
               render={(Clos)=>{
                  return <div>
                     <h1>首页弹窗</h1>
                     <p>首页的弹窗内容</p>
                     <IndexNav />
                     <Clos />
                  </div>
               }}
            />
         </div>
   </div>
}
export default IndexPage;