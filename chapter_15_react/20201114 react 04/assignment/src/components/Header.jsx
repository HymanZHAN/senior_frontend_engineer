import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <h1 id="logo">KaiKeBa</h1>
        <nav className="nav">
          <Link to="/">首页</Link>
          <Link to="/about">关于我们</Link>
          <Link to="/join">加入我们</Link>
        </nav>
      </div>
    </header>
  );
}
