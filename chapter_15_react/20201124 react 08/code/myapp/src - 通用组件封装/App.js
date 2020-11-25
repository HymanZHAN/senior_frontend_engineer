// 根组件中，搭建视图的框架
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Header  from "./component/header";
import { navs } from "./routes/config";
import Routes from "./routes/index";
function App() {
    return <Layout className="page">
          <Header />
          <Layout.Content className="page-content">
              <Routes />
          </Layout.Content>
    </Layout>
}
export default App;
