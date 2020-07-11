import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const NewTodo = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString());
  const { categories, addTodo } = useContext(GlobalContext);
  const [category, setCategory] = useState(categories[1].category);

  function formatDateTime(dateString) {
    const [date, time] = dateString.split("T");

    setDate(`${date}, ${time}`);
  }

  function submit(e) {
    // e.preventDefault();
    const todo = {
      task,
      date,
      category,
    };

    addTodo(todo);

    console.log("todo saved", todo);
  }

  return (
    <div className="new-todo">
      <form onSubmit={submit}>
        <div className="head">
          <h1>New Todo</h1>
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </div>

        <label htmlFor="todo">What are you planning?</label>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          id="todo"
        ></textarea>

        <input
          onChange={(e) => formatDateTime(e.target.value)}
          id="date"
          value={date}
          type="datetime-local"
        ></input>
        <input id="note" type="text" placeholder="Add note"></input>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        >
          {categories
            .filter((category) => category.category.toLowerCase() !== "all")
            .map((category, index) => (
              <option key={index} value={category.category}>
                {category.category.toUpperCase()}
              </option>
            ))}
        </select>

        <button type="submit" id="create-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
