import { IndexPage } from "./pages/IndexPage";
import { AboutPage } from "./pages/AboutPage";
import { JoinPage } from "./pages/JoinPage";
import { Header } from "./components/Header";

import { Fragment } from "react";
const { Route } = require("react-router");

export function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/" exact component={IndexPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/join" component={JoinPage}></Route>
    </Fragment>
  );
}
