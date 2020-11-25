import {Route, Switch} from "react-router-dom";
import { routes } from "./config";
function Routes(props) {
   return <Switch>
      {
        routes.map((item,index)=>{
            return <Route 
                key={index}
                path={item.path}
                exact={item.exact}
                render={(Routerprops)=>{
                    return item.render({...props,...Routerprops});
                }}
            />
        })
      }
   </Switch>
}
export default Routes;