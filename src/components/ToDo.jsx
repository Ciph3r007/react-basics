import React, { useContext, useState } from "react";
import "../css/tailwind.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Context } from "../Context API/Context";

function Todo() {
  const initialState = {
    name: "",
    email: "",
    todo: "",
  };

  const [hidden, sethidden] = useState(true);

  const { todosList, settodosList } = useContext(Context);

  const [todoInfo, settodoInfo] = useState(initialState);

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
    sethidden(true);
    settodoInfo(initialState);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    settodoInfo({ ...todoInfo, [key]: inputValue });
  };

  const handleEdit = (todo) => {
    settodoInfo(todo);
    sethidden(false);
  };

  const deleteTodo = (todo) => {
    const tempTodosList = todosList.filter((t) => t._id !== todo._id);
    settodosList(tempTodosList);
  };

  const handleClick = () => {
    sethidden(true);
    settodoInfo(initialState);
  };

  return (
    <React.Fragment>
      <div>
        {hidden && (
          <div className=" mx-20 my-5">
            <div className="flex flex-col">
              <div className="flex flex row mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4 mx-2">
                  To-dos{" "}
                </h1>
                <span className="cursor-pointer text-blue-600 hover:text-blue-900">
                  <BiAddToQueue size="2em" onClick={() => sethidden(false)} />
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
          <form onSubmit={handleSubmit}>
            <div class="min-h-screen bg-purple-400 flex justify-center items-center">
              <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
              <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
              <div class="py-20 px-20 bg-white rounded-2xl shadow-xl z-20">
                <div>
                  <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Add a Todo
                  </h1>
                </div>
                <div class="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={todoInfo.name}
                    onChange={handleChange}
                    placeholder="Name"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={todoInfo.email}
                    onChange={handleChange}
                    placeholder="Email"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <textarea
                    type="text"
                    name="todo"
                    rows="4"
                    required
                    value={todoInfo.todo}
                    onChange={handleChange}
                    placeholder="To-do"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                </div>
                <div class="text-center mt-6">
                  <button
                    type="submit"
                    className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
                  >
                    Submit
                  </button>
                  <FaArrowAltCircleLeft
                    size="2em"
                    className="mt-5 mx-auto text-sm text-purple-400 hover:text-purple-900"
                    onClick={handleClick}
                  />
                </div>
              </div>
              <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
              <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>
          </form>
        )}
      </div>
    </React.Fragment>
  );
}

export default Todo;
