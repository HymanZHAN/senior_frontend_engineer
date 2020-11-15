import JoinPage from "./view/join/index";
import AboutPage from "./view/about/index";
import Nav from "./component/nav";
const { Route } = require("react-router-dom");
const { default: IndexPage } = require("./view/index");

/*
  Route 组件：路由组件
    path 要匹配的路由
      1. 注意 ReactRouter 默认是模糊匹配，及 url 是以当前 path 为开始时则匹配成功
      2. exact 精确匹配，url 必须和 当前path 一致时匹配，如 path="/about"，url 为 "/about" 和 "/about/" 会匹配成功
      3. strict 严格匹配，严格匹配基于精确匹配，如 path="/about"，url 为 "/about" 会匹配成功
      4. 多 url 匹配,[path1,path2,path3……]
    component 路径匹配成功之后要显示的视图
*/
function App() {
  return (
    <div className="App">
        <Nav />
        <hr />
        <Route path={["/","/index","/home"]} exact component={IndexPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
