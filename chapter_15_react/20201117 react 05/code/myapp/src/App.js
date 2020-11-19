import Page404 from "./view/404";
import AboutPage from "./view/about";
import IndexPage from "./view/index";
import JoinPage from "./view/join";
import ListPage from "./view/list";
import "./static/index.css";
import Nav from "./component/nav";

const { Route, Switch, Redirect } = require("react-router-dom");
/*
  Route：
    1. render 接收一个回调函数，回调函数的返回值是其要渲染的视图
    2. 当 path 为空或 path = ""，则代表所有路径都匹配

  Switch 组件，当其中一项匹配成功之后，则不在向下匹配

  路由组件：
    当组件是被 Route 的 Component 调用时，该组件就会被称之为 路由组件
  
  路由组件在被调用，Route 会传递给该组件相关路由信息，该信息被称之路由参数
    - location 对象
        hash: "" // 当前 url 中的 hash 值
        pathname: "/join"  // 当前 url 地址
        search: "" // 当前 url 中的 search 值
        state: null // 上一步跳转传递的参数 
    - history 对象
        go: go(n) 跳转 n 步历史记录
        goBack: ƒ goBack() 返回历史记录上一步
        goForward: () 前进历史记录下一步 
        length 当前源在历史记录中记录了多少条
        push(url,state) 跳转视图
    - match 对象
        isExact: true 是否是精确匹配
        params: {} 动态路由的参数
        path: "/about" 当前 Route 的 pach
        url: "/about" 当前浏览器的 Url
  动态路由: 路由中某一段是不固定的
    path = "/list/:type"

  Redirect 重定向
    from 当前 url 
    to 跳转到 url

  当 Route render 的返回值 为 Redirect 时直接跳转
  
  在非路由组件上获取路由参数
  1. withRouter
  2. Router hooks


*/
/*
list 的 path 规则:
/list
/list/分类
/list/分类/页码
*/
function App() {
  const user = "小瑞瑞";
  return (
    <div className="wrap">
      <Nav />
      <Switch>
        <Route path="/" exact render={(props)=>{
          return <IndexPage 
              {...props}
              user={user}
          />
        }} />
        <Redirect from="/index" to="/" />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/join" exact component={JoinPage} />
        <Route path={["/list","/list/:type","/list/:type/:page"]} exact render={(props)=>{
          const {match} = props;
          const {type="good",page="1"} = match.params;
          if(["good","share","ask"].includes(type)
            && parseInt(page) + "" === page 
            && page>0
          ){
            return <ListPage />
          }
          return <Redirect to="/404" />
        }}/>
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
