import React, { useContext, useState } from "react";
import "../css/tailwind.css";
import { ContextTodo } from "../Context API/Context";
import TodoForm from "./TodoForm";
import TodosTable from "./TodosTable";

function Todo() {
  const initialState = {
    name: "",
    email: "",
    todo: "",
  };

  const [hidden, setHidden] = useState(true);

  const { todosList, setTodosList } = useContext(ContextTodo);

  const [todoInfo, setTodoInfo] = useState(initialState);

  const handleConfirm = (e) => {
    e.preventDefault();
    let tempTodo = todosList.find((t) => t._id === todoInfo._id) || {};
    tempTodo.name = todoInfo.name;
    tempTodo.email = todoInfo.email;
    tempTodo.todo = todoInfo.todo;

    if (!tempTodo._id) {
      tempTodo._id = Math.floor(Math.random() * Date.now());
      todosList.push(tempTodo);
    }
    setHidden(true);
    setTodoInfo(initialState);
  };

  const handleTextModify = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    setTodoInfo({ ...todoInfo, [key]: inputValue });
  };

  const handleEdit = (todo) => {
    setTodoInfo(todo);
    setHidden(false);
  };

  const handleDelete = (todo) => {
    const tempTodosList = todosList.filter((t) => t._id !== todo._id);
    setTodosList(tempTodosList);
  };

  const handleCancel = () => {
    setHidden(true);
    setTodoInfo(initialState);
  };

  return (
    <>
      <div>
        {hidden && (
          <TodosTable
            todosList={todosList}
            onHide={setHidden}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {!hidden && (
          <TodoForm
            todoInfo={todoInfo}
            onTextModify={handleTextModify}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </>
  );
}

export default Todo;
