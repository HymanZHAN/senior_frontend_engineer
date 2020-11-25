import { NavLink } from "react-router-dom";

export function ListNav(props) {
  const { type = "all" } = props;
  return (
    <nav className="nav">
      <NavLink
        to="/list/all"
        // isActive={() => {
        //   return type === "all";
        // }}
      >
        全部
      </NavLink>
      <NavLink to="/list/good">精华</NavLink>
      <NavLink to="/list/share">分享</NavLink>
      <NavLink to="/list/ask">问答</NavLink>
    </nav>
  );
}

export default ListNav;
