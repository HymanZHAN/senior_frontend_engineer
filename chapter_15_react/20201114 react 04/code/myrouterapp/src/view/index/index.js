/*
  React 中引入图片的几种方式:
  1. 基于 http|https 的绝对路径
  2. require 相对路径 (CRA 4 之前 require("路径")，CRA 4 require("路径").default)
  3. import 相对路径
*/
// import Img from "./img4.png";
function IndexPage() {
    return <div>
        <h1>首页视图</h1>
        <img 
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605373886202&di=a3edadac6ac25483b330f4272ca6afab&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201308%2F23%2F220651x9b0h4kru904ozre.jpg" 
          width={400}
        />
        {/* <img src={Img} width={400} />
        <img src={require("./img4.png").default} width={400} /> */}
    </div>
}

export default IndexPage;