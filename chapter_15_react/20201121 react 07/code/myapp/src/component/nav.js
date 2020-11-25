import { Menu } from "antd";
import { navs } from "../routes/config";
import { Link, useLocation } from "react-router-dom";
function Nav() {
   const {pathname} = useLocation();
   const selectKey = navs.findIndex(item=>(item.to===pathname))+"";
   //console.log(selectKey);
   return  <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[selectKey]}
   >
        {
          navs.map((item,index)=>{
            return <Menu.Item key={index.toString()}>
                <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
          })
        }
   </Menu>
}

export default Nav;