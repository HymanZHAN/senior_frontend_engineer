import { Link, useParams } from "react-router-dom";
import data from "../../data";
const len = 5;//每页5条数据
function Listpagenub() {
  let {type="good",page="1"} = useParams();
  let nowData = data[type];
  let pageLength = Math.ceil(nowData.length/len);
  function render() {
    let navs = [];
    for(let i = 1; i <= pageLength;i++){
      if(i === Number(page)){
        navs.push(
          <span 
            key={i}
          >{i}</span>
        )
      } else {
        navs.push(
          <Link 
            key={i}
            to={`/list/${type}/${i}`}
          >{i}</Link>
        )
      }
     
    }
    return navs;
  }
  return <nav className="page_nub">
      {render()}
  </nav>
}
export default Listpagenub;