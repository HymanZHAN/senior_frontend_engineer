import IndexPage from "./index/index";
import AboutPage from "./about/index";
import UndefinedPage from "./404/index";
import { lazy, Suspense } from "react";
const NewAPIPage = lazy(() => import("./api/index"));
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
      return <Suspense fallback={<div>视图请求中</div>} >
        <NewAPIPage {...props} />
      </Suspense>
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
  }, {
    to: "/api",
    title: "API"
  }, {
    to: "/about",
    title: "关于"
  }
];
const indexNavs = [
  {
    to: "/?tab=all",
    title: "全部"
  }, {
    to: "/?tab=good",
    title: "精华"
  }, {
    to: "/?tab=share",
    title: "分享"
  }, {
    to: "/?tab=ask",
    title: "问答"
  }
];

export { routes, navs, indexNavs };