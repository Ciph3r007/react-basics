import { createContext } from "react";
import { useState } from "react";

export const ContextTodo = createContext();

function Context(props) {
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
    {
      _id: "3",
      name: "Arya Stark",
      email: "arya@noone.got",
      todo: "Become someone",
      selected: false,
    },
  ];
  const [todosList, settodosList] = useState(todoList);

  return (
    <ContextTodo.Provider value={{ todosList, settodosList }}>
      {props.children}
    </ContextTodo.Provider>
  );
}

export default Context;
