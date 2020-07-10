import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const TodoCategoryItem = ({ category }) => {
  const { todos, getTodos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos("all");
  }, []);


  const tasks = todos.filter(
    (todo) => todo.category.toLowerCase() === category.category.toLowerCase()
  );


  return (
    <div>
      <Link to={`/category/${category.category}`}>
        <div className="todo-category-item">
          <h1 className="cat-icon">
            <i className={category.icon}></i>
          </h1>
          <div className="task-name">{category.category}</div>
          <div className="task-no">
            {category.category.toLowerCase() === "all"
              ? todos.length
              : tasks.length}{" "}
            Tasks
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TodoCategoryItem;
