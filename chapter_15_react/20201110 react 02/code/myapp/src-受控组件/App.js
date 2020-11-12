import { Fragment, Component } from "react";
/*
  受控组件: 让表单控件的内部状态和组件 state 保持一致
  非受控组件：我们不需要同步 value 值(defaultValue，defaultChecked)，只需要表单的初始值和我们状态一致
*/
class App extends Component {
  state = {
    val: "",
    checked: false,
    val2: "初始值",
  };
  render() {
    const { val, checked, val2 } = this.state;
    return (
      <Fragment>
        <input
          type="text"
          value={val}
          onChange={({ target }) => {
            this.setState({
              val: target.value,
            });
          }}
        />
        <br />
        <input
          type="checkbox"
          checked={checked}
          onChange={({ target }) => {
            this.setState({
              checked: target.checked,
            });
          }}
        />
        <br />
        <input type="text" defaultValue={val2} />
        <p>{val}</p>
        <button
          onClick={() => {
            console.log(val, checked, val2);
          }}
        >
          提交
        </button>
      </Fragment>
    );
  }
}

export default App;
