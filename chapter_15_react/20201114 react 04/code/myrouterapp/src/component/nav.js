import { Link } from "react-router-dom";
// function Nav() {
//     return <nav>
//         <a href="/">首页</a>
//         <span> | </span>
//         <a href="/join">加入我们</a>
//         <span> | </span>
//         <a href="/about">关于我们</a>
//         <span> | </span>
//         <a href="/about/details">加入我们详情</a>
//     </nav>
// }
/*
  Link 组件 用于项目内视图的跳转
*/
function Nav() {
  return (
    <nav>
      <Link to="/">首页</Link>
      <span> | </span>
      <Link to="/join">加入我们</Link>
      <span> | </span>
      <Link to="/about">关于我们</Link>
      <span> | </span>
      <Link to="/about/details">加入我们详情</Link>
      <span> | </span>
      {/* <Link to="https://www.baidu.com">百度</Link> */}
      <a href="https://www.baidu.com" target="_blank">
        百度
      </a>
    </nav>
  );
}

export default Nav;
