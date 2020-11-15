import JoinRootPage from "./root";
import JoinDetailsPage from "./details";
const { Route } = require("react-router-dom");

function JoinPage() {
  return <div>
      <h1>加入我们视图</h1>
      <Route path="/join" exact strict component={JoinRootPage} />
      <Route path="/join/details" component={JoinDetailsPage} />
  </div>
}

export default JoinPage;