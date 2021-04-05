import React, { useState } from "react";
import './App.scss';
import TodoForm from "./components/TodoForm";
// import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!' },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks - TodoList</h1>
      {/* <ColorBox /> */}
      <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
