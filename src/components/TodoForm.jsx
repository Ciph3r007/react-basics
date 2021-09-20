import React from "react";

const TodoForm = ({ todoInfo, title, onCancel, onTextModify, onConfirm }) => {
  return (
    <form onSubmit={onConfirm}>
      <div class="min-h-screen bg-blue-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div class="m-10 p-20  bg-blue-200 bg-opacity-100 rounded-2xl shadow-3xl z-20">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4">{title}</h1>
          </div>
          <div class="space-y-4">
            <input
              type="text"
              name="name"
              required
              value={todoInfo.name}
              onChange={onTextModify}
              placeholder="Name"
              class="block bg-blue-100 bg-opacity-100 text-sm py-3 px-4 rounded-lg w-full border border-blue-300 outline-none"
            />
            <input
              type="email"
              name="email"
              required
              value={todoInfo.email}
              onChange={onTextModify}
              placeholder="Email"
              class="block bg-blue-100 bg-opacity-100 text-sm py-3 px-4 rounded-lg w-full border border-blue-300 outline-none"
            />
            <textarea
              type="text"
              name="todo"
              rows="4"
              required
              value={todoInfo.todo}
              onChange={onTextModify}
              placeholder="To-do"
              class="block bg-blue-100 bg-opacity-100 text-sm py-5 px-4 rounded-lg w-full border border-blue-300 outline-none"
            />
          </div>
          <div class="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-green-400 rounded-2xl hover:bg-green-900"
            >
              Submit
            </button>
            <button
              className="m-2 py-3 w-64 text-xl text-white bg-red-400 rounded-2xl hover:bg-red-900"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
        <div class="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div class="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </form>
  );
};

export default TodoForm;
