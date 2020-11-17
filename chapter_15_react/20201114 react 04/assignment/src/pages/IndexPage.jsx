import Image1 from "../img/img_1.png";
import Image2 from "../img/img_2.png";
import Image4 from "../img/img4.png";
import { Fragment } from "react";

export function IndexPage() {
  return (
    <Fragment>
      <img src={Image4} className="banner" alt="开课吧banner" />
      <div className="wrap">
        <img src={Image1} alt="课程banner" />
        <img src={Image2} alt="即将开课" />
      </div>
    </Fragment>
  );
}
