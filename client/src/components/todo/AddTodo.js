import React from "react";
import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <>
      <Link className="add-to-do" to="/add">
        <div className="plus"><h3>+</h3></div>
      </Link>
    </>
  );
};

export default AddTodo;
