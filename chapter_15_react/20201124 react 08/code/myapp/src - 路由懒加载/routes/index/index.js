const { default: IndexList } = require("./indexList");
const { default: IndexNav } = require("./indexNav");

function IndexPage() {
   return <div className="view">
         <div className="wrap">
            <IndexNav />
            <IndexList />
         </div>
   </div>
}
export default IndexPage;