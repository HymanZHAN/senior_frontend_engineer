//每页5条数据
/*
  1: 0,1,2,3,4
  2: 5,6,7,8,9
  3: 10,11,12,13,14
*/
export function List(props) {
  const { data } = props;
  return (
    <ul className="list">
      {data.length > 0
        ? data.map((item) => <li key={item.id}>{item.title}</li>)
        : "暂无数据"}
    </ul>
  );
}
export default List;
