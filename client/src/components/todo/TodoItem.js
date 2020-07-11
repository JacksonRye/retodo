import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const { deleteTodo, updateTodo } = useContext(GlobalContext);

  function changeIsCompleted(isCompleted) {
    updateTodo(todo);
    setIsCompleted(isCompleted);
  }

  return (
    <div className="todo-item">
      <button onClick={() => deleteTodo(todo._id)}>x</button>
      <div className="info">
        <p style={isCompleted ? { textDecoration: "line-through" } : null}>
          {todo.task}
        </p>
        <p>{todo.date}</p>
      </div>
      <input
        onChange={() => changeIsCompleted(!isCompleted)}
        type="checkbox"
        checked={isCompleted}
      />
    </div>
  );
};

export default TodoItem;
