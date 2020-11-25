import { Layout } from "antd";
import Header  from "./component/header";
import Routes from "./routes/index";
import {CSSTransition, TransitionGroup} from "react-transition-group";
function App() {
    return <TransitionGroup
        appear={true}
    >
        <CSSTransition
            timeout={1000}
        >
            <Layout className="page">
                <Header />
                <Layout.Content className="page-content">
                    <Routes />
                </Layout.Content>
            </Layout>
        </CSSTransition>
    </TransitionGroup>
}
export default App;
