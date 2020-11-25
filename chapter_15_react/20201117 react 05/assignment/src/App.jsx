import { Route, Switch, Redirect } from "react-router-dom";

import Page404 from "./pages/404";
import ListPage from "./pages/list";
import "./static/index.css";

function App() {
  return (
    <div className="wrap">
      {/* <Redirect from="/index" to="/list" /> */}
      <Switch>
        <Route
          path={["/list", "/list/:type", "/list/:type/:page"]}
          exact
          render={(props) => {
            const { match } = props;
            const { type = "all", page = "1" } = match.params;
            if (
              ["all", "good", "share", "ask"].includes(type) &&
              parseInt(page) + "" === page &&
              page > 0
            ) {
              return <ListPage />;
            }
            return <Redirect to="/404" />;
          }}
        />
        <Redirect from="/" to="/list" />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
