import React, { useContext, useState } from "react";
import "../css/tailwind.css";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { ContextTodo } from "../Context API/Context";
import TodoForm from "./TodoForm";

function Todo() {
  const initialState = {
    name: "",
    email: "",
    todo: "",
  };

  const [hidden, setHidden] = useState(true);

  const { todosList, setTodosList } = useContext(ContextTodo);

  const [todoInfo, setTodoInfo] = useState(initialState);

  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    setTodoInfo({ ...todoInfo, [key]: inputValue });
  };

  const handleEdit = (todo) => {
    setTodoInfo(todo);
    setHidden(false);
  };

  const deleteTodo = (todo) => {
    const tempTodosList = todosList.filter((t) => t._id !== todo._id);
    setTodosList(tempTodosList);
  };

  const handleClick = () => {
    setHidden(true);
    setTodoInfo(initialState);
  };

  return (
    <>
      <div>
        {hidden && (
          <div className=" mx-20 my-5">
            <div className="flex flex-col">
              <div className="flex flex row mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4 mx-2">
                  To-dos{" "}
                </h1>
                <span className="cursor-pointer text-blue-600 hover:text-blue-900">
                  <BiAddToQueue size="2em" onClick={() => setHidden(false)} />
                </span>
              </div>
              <div className="w-full">
                <div className="border-b border-gray-200 shadow">
                  <div className="divide-y divide-gray-300">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Todo
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Edit
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {todosList.map((todo) => (
                          <tr key={todo._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-base font-medium text-gray-900">
                                    {todo.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-base text-gray-900">
                                {todo.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {todo.todo}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <FaEdit
                                  size="1.5em"
                                  onClick={() => handleEdit(todo)}
                                />
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <RiDeleteBin4Fill
                                  size="1.5em"
                                  onClick={() => deleteTodo(todo)}
                                />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!hidden && (
          <TodoForm
            todoInfo={todoInfo}
            handleChange={handleChange}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}

export default Todo;
