import React, { useContext, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

const TodoList = ({ match }) => {
  const { todos, getTodos, categories } = useContext(GlobalContext);

  const { category } = match.params;

  const icon = categories.find(
    (category) => category.category.toLowerCase() === category.category.toLowerCase()
  ).icon;

  useEffect(() => {
    getTodos(category);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="behind">
        <div className="navigation">
          <Link to="/">
            <h1>
              <i className="fas fa-chevron-left"></i>
            </h1>
          </Link>
        </div>
        <h3>
          <i className={icon}></i>
        </h3>
        <h1>{category}</h1>
        <p>{todos.length} Tasks</p>
      </div>

      <div className="front">
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      </div>
      <AddTodo />
    </div>
  );
};

export default TodoList;
