const express = require("express");
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").delete(deleteTodo).put(updateTodo);

module.exports = router;
