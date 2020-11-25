import { Route, Switch, useLocation } from "react-router-dom";
import { routes } from "./config";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function Routes(props) {
    const location = useLocation();
    return <TransitionGroup>
        <CSSTransition
            timeout={1000}
            key={location.pathname}
            onEnter={(node)=>{
                node.style.opacity = 0;
            }}
            onEntering={(node)=>{
                node.style.transition ="1s opacity";
                node.style.opacity = 1;
            }}
            onEntered={(node)=>{
                node.style.transition ="none";
            }}
            onExit={(node)=>{
                node.style.opacity = 1;
            }}
            onExiting={(node)=>{
                node.style.transition ="1s opacity";
                node.style.opacity = 0;
            }}
            onExited={(node)=>{
               console.log("动画完成")
            }}
        >
            <Switch location={location}>
                {
                    routes.map((item, index) => {
                        return <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            render={(Routerprops) => {
                                return item.render({ ...props, ...Routerprops });
                            }}
                        />
                    })
                }
            </Switch>
        </CSSTransition>
    </TransitionGroup>
}
export default Routes;