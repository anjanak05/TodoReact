import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const [word, setWord] = useState([]);

  const handleToggle = (id) => {
    const updateData = word.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );
    setWord(updateData);
  };

  const handleClick = (text, handleClear) => {
    setWord([
      ...word,
      {
        title: text,
        id: Date.now(),
        status: false,
      },
    ]);
    handleClear();
  };

  const handleDelete = (id) => {
    const updateDelete = word.filter((e) => e.id !== id);
    setWord(updateDelete);
  };

  return (
    <div>
      <AddTodo handleClick={handleClick}></AddTodo>
      <TodoList
        word={word.filter((e)=> !e.status)}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      ></TodoList>

      <h1>Completed</h1>
      <AddTodo handleClick={handleClick}></AddTodo>
      <TodoList
        word={word.filter((e)=> e.status)}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      ></TodoList>
    </div>
  );
};

export default Todo;
