import { List } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetTopics } from "../../store/action/getData";
import qs from "qs";
import { useSelector } from "react-redux";
// 文章主题列表
function IndexList(){
  const {loading,data} = useSelector(state=>state.topics);
  const {search} = useLocation();
  const {tab="all",page="1"} = qs.parse(search.slice(1))
  const getTopics = useGetTopics();
  useEffect(()=>{
    getTopics(tab,page);
  },[tab,page]);
  return <List
      className="index-list" 
      dataSource={data}
      loading={loading}
      renderItem={(itemData)=>{
        console.log(itemData);
          return <List.Item>{1}</List.Item>
      }}
  />
}

export default IndexList;