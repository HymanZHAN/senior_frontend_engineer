import { useParams } from "react-router-dom";
import data from "../../data";
const len = 5;//每页5条数据
/*
  1: 0,1,2,3,4
  2: 5,6,7,8,9
  3: 10,11,12,13,14
*/
function List() {
    let {type="good",page="1"} = useParams();
    page = Number(page);
    let start = (page-1)*len;
    let end = start + len; 
    let nowData = data[type].filter((item,index)=>{
        return index >=start&&index<end;
    });
    return <ul>
        {
          nowData.length>0?nowData.map(item=><li key={item.id}>{item.title}</li>):"暂无数据"
        }
    </ul>
}
export default List;