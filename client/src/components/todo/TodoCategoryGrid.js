import React, { useContext } from "react";
import TodoCategoryItem from "./TodoCategoryItem";
import AddTodo from "./AddTodo";
import { GlobalContext } from "../../context/GlobalState";

const TodoCategoryGrid = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <>
      <h1>Categories</h1>

      <div className="todo-category-grid">
        {categories.map((category) => (
          <TodoCategoryItem key={category.id} category={category} />
        ))}
        <AddTodo />
      </div>
    </>
  );
};

export default TodoCategoryGrid;
