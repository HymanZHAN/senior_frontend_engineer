import { NavLink, useParams } from "react-router-dom";

export function ListPagination(props) {
  let { type = "all", page = "1" } = useParams();
  let { totalPage } = props;

  function render() {
    let components = [];

    if (Number(page) > 1) {
      components.push(
        <NavLink to={`/list/${type}/${parseInt(page) - 1}`} key={0}>
          上一页
        </NavLink>
      );
    }

    for (let index = 1; index <= totalPage; index++) {
      components.push(
        <NavLink
          to={`/list/${type}/${index}`}
          key={index}
          isActive={() => {
            return index === Number(page);
          }}
        >
          {index}
        </NavLink>
      );
    }

    if (Number(page) < totalPage) {
      components.push(
        <NavLink to={`/list/${type}/${parseInt(page) + 1}`} key={totalPage + 1}>
          下一页
        </NavLink>
      );
    }

    return components;
  }

  return <nav className="pagination">{render()}</nav>;
}

export default ListPagination;
