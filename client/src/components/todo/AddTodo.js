import React from "react";
import { Link } from "react-router-dom";

const AddTodo = () => {

  return (
    <>
      <Link className="add-to-do" to="/add">
        <div className="plus">+</div>
      </Link>
    </>
  );
};

export default AddTodo;
