import React, { useState } from "react";
import "../css/style.css";
import picture from "../images/img4.png";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function Todo() {
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

  const initialState = {
    name: "",
    email: "",
    todo: "",
  };

  const [hidden, sethidden] = useState(true);

  const [todosList, settodosList] = useState(todoList);

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

  return (
    <React.Fragment>
      <div>
        <section>
          <div className="imgBx">
            <img src={picture} alt="logo" />
          </div>
          <div className="contentBx">
            {hidden && (
              <div>
                <div>
                  <h2>
                    To-Dos
                    <BiAddToQueue
                      size="1.3em"
                      color="#2596be"
                      onClick={() => sethidden(false)}
                    />
                  </h2>
                </div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Todo</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todosList.map((todo) => (
                        <tr key={todo._id}>
                          <td>{todo.name}</td>
                          <td>{todo.email}</td>
                          <td>{todo.todo}</td>
                          <td>
                            <div className="middle">
                              <FaEdit
                                size="1.2em"
                                onClick={() => handleEdit(todo)}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="middle">
                              <RiDeleteBin4Fill
                                size="1.2em"
                                onClick={() => deleteTodo(todo)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {!hidden && (
              <div className="formBx">
                <h2>Add To-Do</h2>
                <form onSubmit={handleSubmit}>
                  <div className="inputBx">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={todoInfo.name}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="inputBx">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={todoInfo.email}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="inputBx">
                    <span>Todo</span>
                    <textarea
                      type="text"
                      name="todo"
                      rows="4"
                      required
                      value={todoInfo.todo}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="inputBx">
                    <input type="submit" value="Submit" name=""></input>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Todo;
