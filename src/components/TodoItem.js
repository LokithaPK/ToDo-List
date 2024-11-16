// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  const formattedDate = new Date(todo.dueDate).toLocaleDateString();

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
      <span> - Due: {formattedDate}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
