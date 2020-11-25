// 根组件中，搭建视图的框架
import { Layout } from "antd";
//import { withRouter } from "react-router-dom";
import Header  from "./component/header";
import Routes from "./routes/index";
function App() {
    return <Layout className="page">
          <Header />
          <Layout.Content className="page-content">
              <Routes />
          </Layout.Content>
    </Layout>
}
//let NewCmp = withRouter(Cmp);
/*
视图一致，逻辑不同：
封装成一个组件，将不同的逻辑当做参数传入：

逻辑相似，但视图不同时:
Hooks

高阶组件(HOCs):
    function widthRouter(Cmp){
        //返回一个新的组件
        return function(props){
            return <Route
                render={(routerProps)=>{
                        return <Cmp {...props,...routerProps}/>
                }}  
            />
        }
    }

render props:  

*/
export default App;
