const { default: Count } = require("./Count");
const { default: Info } = require("./info");
const { default: Todos } = require("./todos");
function App() {
  return <div>
      <Count />
      <Todos />
      <Info />
  </div>
}

export default App;