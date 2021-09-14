import React from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

function ToDo() {
  const todoList = [
    {
      _id: "1",
      name: "Person 1",
      email: "person1@gmail.com",
      todo: "Task 1",
    },
    {
      _id: "2",
      name: "Person 2",
      email: "person2@gmail.com",
      todo: "Task 2",
    },
    {
      _id: "3",
      name: "Person 3",
      email: "person3@gmail.com",
      todo: "Task 3",
    },
  ];

  const initialState = {
    name: "temp",
    email: "",
    todo: "",
  };

  const [todosList, settodosList] = useState(todoList);
  const [todoInfo, settodoInfo] = useState(initialState);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const key = e.target.name;
    settodoInfo({ ...todoInfo, [key]: inputValue });

    console.log(todoInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempTodo = todosList.find((t) => t._id === todoInfo._id) || {};
    tempTodo.name = todoInfo.name;
    tempTodo.email = todoInfo.email;
    tempTodo.todo = todoInfo.todo;

    if (!tempTodo._id) {
      tempTodo._id = Date.now();
      todosList.push(tempTodo);
    }
  };

  return (
    <div>
      <section>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>TODO</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.todo}</td>
                  <td>
                    <FaEdit />
                  </td>
                  <td>
                    <RiDeleteBin4Fill />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form">
          <h2>Add a to-do</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <span>something</span>
              <input
                type="text"
                name="name"
                value={todoInfo.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div className="input">
              <span>something</span>
              <input
                type="email"
                name="email"
                value={todoInfo.email}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div className="input">
              <span>something</span>
              <input
                type="text"
                name="todo"
                value={todoInfo.todo}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div>
              <button type="Submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ToDo;
