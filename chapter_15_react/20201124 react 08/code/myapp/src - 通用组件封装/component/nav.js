import { navs } from "../routes/config";
import RootNav from "./rootNav";
function Nav() {
  return <RootNav
    theme={"dark"}
    data={navs}
    toSelect={(location) => {
      const { pathname } = location;
      return navs.findIndex(item => (item.to === pathname)) + "";
    }}
  />
}

export default Nav;