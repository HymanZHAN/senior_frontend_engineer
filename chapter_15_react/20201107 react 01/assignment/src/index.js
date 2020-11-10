// 暗号：我是MT
import React from "react";
import ReactDom from "react-dom";
import { data } from "./data";
import { FriendsList } from "./li";

import "./css/index.css";

let div = (
  <div className="friend-list">
    {data.map((group) => {
      return <FriendsList key={group.groupName} group={group} />;
    })}
  </div>
);

ReactDom.render(div, document.querySelector("#root"));
