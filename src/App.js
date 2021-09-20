import logo from "./logo.svg";
import "./App.css";
import picture from "./images/img3.png";
import Todo from "./components/todo";
import { useState } from "react";
import { Context } from "./Context API/Context";

function App() {
  const todoList = [
    {
      _id: "1",
      name: "Jon Snow",
      email: "jon@wolves.got",
      todo: "Know something",
      selected: false,
    },
    {
      _id: "2",
      name: "Daenerys Targaryen",
      email: "dany@dragons.got",
      todo: "Not get crazy",
      selected: false,
    },
  ];
  const [todosList, settodosList] = useState(todoList);
  return (
    <Context.Provider value={{ todosList, settodosList }}>
      <div className="App">
        <Todo />
      </div>
    </Context.Provider>
  );
}

export default App;
