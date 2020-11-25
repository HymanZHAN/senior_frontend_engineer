import {Affix, Col, Layout, Row} from "antd";
import { Link } from "react-router-dom";
import Nav from "./nav";
function Header(){
  return <Affix offsetTop={0}>
    <Layout.Header>
        <Row  className="wrap">
            <Col span={4}>
              <h1 className="logo">
                  <Link to="/">开课吧-CNode</Link>
              </h1> 
            </Col>
            <Col span={20}>
                <Nav />
            </Col>
        </Row>  
    </Layout.Header>
  </Affix>
}

export default Header;