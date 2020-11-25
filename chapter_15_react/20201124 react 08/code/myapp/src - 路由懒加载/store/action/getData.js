import axios from "axios";
import {useDispatch} from "react-redux";
const HTTP = axios.create({
  baseURL: "http://localhost:8080/api"
});

function useGetTopics() {
  const dispatch = useDispatch();
  return (page="1",tab="all",limit="20")=>{
      dispatch({
        type:"TOPICS_LOADING"
      })
      HTTP.get(`/topics?page=${page}&tab=${tab}&limit=${limit}`)
      .then((res)=>{
          console.log(res);
          dispatch({
            type:"TOPICS_LOAD",
            data:res.data.data
          })  
      })
  }
}

export {useGetTopics}