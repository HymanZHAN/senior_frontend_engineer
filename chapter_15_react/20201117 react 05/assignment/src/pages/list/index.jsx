import { Fragment } from "react";
import { useParams } from "react-router";

import List from "./List";
import ListNav from "./ListNav";
import ListPagination from "./ListPagination";

import { data } from "../../data";

const len = 5;

function ListPage() {
  let { type = "all", page = "1" } = useParams();
  page = Number(page);
  let start = (page - 1) * len;
  let end = start + len;

  let totalPage, nowData;
  if (type === "all") {
    let count = 0;
    let allData = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        count += data[key].length;
        allData = [...allData, ...data[key]];
      }
    }
    totalPage = Math.ceil(count / len);
    nowData = allData.filter((item, index) => {
      return index >= start && index < end;
    });
  } else {
    totalPage = Math.ceil(data[type].length / len);
    nowData = data[type].filter((item, index) => {
      return index >= start && index < end;
    });
  }

  return (
    <Fragment>
      <ListNav type={type} />
      <List data={nowData} />
      <ListPagination totalPage={totalPage} />
    </Fragment>
  );
}
export default ListPage;
