const { default: Count } = require("./Count");
const { default: Todos } = require("./todos");
function App() {
  return <div>
      <Count />
      <Todos />
  </div>
}

export default App;