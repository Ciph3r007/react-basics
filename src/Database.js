export const todoList = [
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

export function getTodoList() {
  return todoList;
}

export function getTodo(id) {
  return todoList.find((todo) => todo._id === id);
}

export function saveTodo(todo) {
  //console.log(todo._id);
  let tempTodo = todoList.find((t) => t._id === todo._id) || {};
  tempTodo.name = todo.name;
  tempTodo.email = todo.email;
  tempTodo.todo = todo.todo;
  // console.log(tempTodo._id, "tempTodo");

  if (!tempTodo._id) {
    tempTodo._id = Date.now().toString();
    todoList.push(tempTodo);
  }

  return tempTodo;
}

export function deleteTodo(selectedTodos) {
  const ids = selectedTodos.map(todo => todo._id);
  return selectedTodos.filter(todo => !(todo._id in ids))
}
