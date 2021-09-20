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

  const [tableVisibility, setTableVisibility] = useState(true);
  const { todosList, setTodosList } = useContext(ContextTodo);
  const [todoInfo, setTodoInfo] = useState(initialState);
  const [formTitle, setFormTitle] = useState("Add a To-Do");

  const handleAdd = () => {
    setFormTitle("Add a To-Do");
    setTableVisibility(false);
  };

  const handleEdit = (todo) => {
    setFormTitle("Edit To-Do");
    setTodoInfo(todo);
    setTableVisibility(false);
  };

  const handleDelete = (todo) => {
    const tempTodosList = todosList.filter((t) => t._id !== todo._id);
    setTodosList(tempTodosList);
  };

  const handleTextModify = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    setTodoInfo({ ...todoInfo, [key]: inputValue });
  };

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
    setTableVisibility(true);
    setTodoInfo(initialState);
  };

  const handleCancel = () => {
    setTableVisibility(true);
    setTodoInfo(initialState);
  };

  return (
    <>
      <div>
        {tableVisibility && (
          <TodosTable
            todosList={todosList}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {!tableVisibility && (
          <TodoForm
            todoInfo={todoInfo}
            title={formTitle}
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
