import {useEffect, useState} from "react";

function useScroll(){
   const [scroll,setScroll] = useState(0);
   useEffect(()=>{
     setScroll(window.scrollY);
     window.onscroll=()=>{
      setScroll(window.scrollY);
     };
     return ()=>{
      window.onscroll = null;
     }
   },[])
   return [scroll,(newScroll)=>{
      window.scrollTo(0,newScroll);
      setScroll(newScroll);
   }];
}

export {useScroll}