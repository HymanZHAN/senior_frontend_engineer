const { default: IndexNav } = require("./indexNav");

function IndexPage() {
   return <div className="view">
         <div className="wrap">
            <IndexNav />
         </div>
   </div>
}
export default IndexPage;