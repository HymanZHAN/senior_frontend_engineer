const { NavLink,withRouter, useHistory, useLocation, useParams, useRouteMatch } = require("react-router-dom");
function ListNav(props) {
  //console.log(props);
  //console.log(useHistory());
  //console.log(useLocation());
  //console.log(useParams());
  //console.log(useRouteMatch());
  //const {pathname} = useLocation();
  const {type="good"} = useParams()
  return <nav className="list_nav">
      <NavLink 
        to="/list/good"
        isActive={()=>{
          return type==="good";
        }}
      >精华</NavLink>
      <NavLink 
        to="/list/share"
      >分享</NavLink>
      <NavLink 
        to="/list/ask"
      >问答</NavLink>
  </nav>
}
// const newListNav = withRouter(ListNav);

// export default newListNav;

// export default withRouter(ListNav);


/*
  高阶组件：接收一个组件，并返回一个新的组件
  withRouter：高阶路由（高阶组件）
*/

/*
  - useHistory 返回 history 对象
  - useLocation 返回 location 对象
  - useParams 返回动态路由参数
  - useRouteMatch 返回 match 对象
*/

export default ListNav;