import style from "./app.module.css";
const { default: Child } = require("./child");
console.log(style);
function App() {
    return <div>
        <div className={style.box}>
            App
        </div>
        <div className={style.div}>
            <div></div>
        </div>
        <Child />
    </div>
}
export default App;
