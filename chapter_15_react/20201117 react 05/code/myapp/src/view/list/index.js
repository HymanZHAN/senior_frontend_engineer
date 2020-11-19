import { Fragment } from "react";
import List from "./list";
import ListNav from "./listNav";
import Listpagenub from "./listPagenub";
function ListPage() {
  return <Fragment>
      <ListNav />
      <List />
      <Listpagenub />
  </Fragment>
}
export default ListPage;