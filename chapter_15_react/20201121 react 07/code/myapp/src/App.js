// 根组件中，搭建视图的框架
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Header  from "./component/header";
import { navs } from "./routes/config";
import Routes from "./routes/index";
function App() {
    return <Layout>
          <Header />
          <Layout.Content>
              <Routes />
          </Layout.Content>
          <nav>
              {navs.map(item=>{
                  return <Link to={item.to} key={item.to}>{item.title}</Link>
              })}
          </nav>
    </Layout>
}
export default App;
