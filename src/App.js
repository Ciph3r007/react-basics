import "./App.css";
import Todo from "./components/todo";
import Context from "./Context API/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Todo />
      </div>
    </Context>
  );
}

export default App;
