import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
function RootNav(props) {
    /*
        数据不一样，
        选中项方法不一样
        theme 不一样  
    */
   const {data,theme,toSelect} = props;
   const location = useLocation();
   const selectKey = toSelect(location);
   return  <Menu
      theme={theme}
      mode="horizontal"
      selectedKeys={[selectKey]}
   >
        {
          data.map((item,index)=>{
            return <Menu.Item key={index.toString()}>
                <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
          })
        }
   </Menu>
}

export default RootNav;