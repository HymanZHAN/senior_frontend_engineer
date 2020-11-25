import IndexPage from "./index/index";
import APIPage from "./api/index";
import AboutPage from "./about/index";
import UndefinedPage from "./404/index";
const routes = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <IndexPage {...props} />
    }
  }, {
    path: "/api",
    exact: true,
    render(props) {
      return <APIPage {...props} />
    }
  }, {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props} />
    }
  }, {
    path: "",
    render(props) {
      return <UndefinedPage {...props} />
    }
  }
];

const navs = [
  {
    to: "/",
    title: "首页"
  },{
    to: "/api",
    title: "API"
  },{
    to: "/about",
    title: "关于"
  }
];

export { routes, navs };