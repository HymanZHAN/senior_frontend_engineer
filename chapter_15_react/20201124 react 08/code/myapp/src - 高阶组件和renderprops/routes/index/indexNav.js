import { indexNavs } from "../config";
import qs from "qs";
import RootNav from "../../component/rootNav";
function IndexNav() {
  return <RootNav
    theme={"light"}
    data={indexNavs}
    toSelect={(location) => {
      const { search } = location;
      const { tab = "all" } = qs.parse(search.slice(1));
      return indexNavs.findIndex(item => (item.to.split("=")[1] === tab)) + "";
    }}
  />
}

export default IndexNav;