# React 实战
## 课程内容
CNode 实战

### API 
启动 cnode-data

获取主题列表：
/api/topics

get 参数：
page="1" 当前第几页，默认值 "1"
tab="all" 当前分类，默认值 "all"。"good"|"share"|"limit"
limit="20" 每页显示多少条，默认值 limit

获取主题：
/api/topic/:id

获取用户信息：
/api/topic/:loginname


### 高阶组件 和 render props
高阶组件（HOCs）：本质是函数，将组件作为接收参数，返回一个新的组件。HOC本身不是React API，是一种基于React组合的特而形成的设计模式
render props 是一个用于告知组件要渲染什么内容的函数属性。该函数返回一个组件，是渲染出来的内容。
hooks


### 按需加载处理
- suspense 和 lazy 进行懒加载设置
```
    const Child = lazy(()=>import("./child"));
    <Suspense fallback={<div>视图请求中</div>} >
        <Child />
    </Suspense>
```    
- 路由动画
入场动画：
```
function App() {
  return <TransitionGroup
    appear={true}
  >
    <CSSTransition
      classNames={{
        appear: "wrap-appear"
      }}
      timeout={1500}
    >
      <div>
        <Header />
        <IndexRouter />
      </div>
    </CSSTransition>
  </TransitionGroup>
}
```
切换动画：
```
function IndexRouter() {
    let location = useLocation();
    return <div className="main-wrap">
        <TransitionGroup>
            <CSSTransition
                timeout={500}
                key={location.pathname}
                onEnter={(node) => {
                    node.style.transform = "translateX(-100%)";
                }}
                onEntering={(node) => {
                    node.style.transform = "translateX(0)";
                }}
                onExit={(node)=>{
                    node.style.transform = "translateX(0)";
                }}
                onExiting={(node)=>{
                    node.style.transform = "translateX(100%)";
                }}
            >
                <Switch location={location}>
                    {routerList.map(item => {
                        return <Route key={item.name} exact={item.exact} path={item.path} render={item.render} />
                    })}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </div>
}
```    


### 部署的小细节
history 路由一定记得配置 404
xampp 
apache\conf\extra\httpd-multilang-errordoc.conf

### 下节课内容：
移动端事件：
1 - Touch事件
2 - 移动端滑屏幻灯片实现
3 - better-scroll 初使用

### 今天练习
基于 antd 实现 CNode 项目，遇到问题可以参考 React 录播


























