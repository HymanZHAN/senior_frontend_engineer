import { Layout } from "antd";
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
export default App;
