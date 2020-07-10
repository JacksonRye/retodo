const Todo = require("../models/Todo");

// @desc Get all todos
// @route GET /api/v1/todos
// access public
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add todo
// @route POST /api/v1/todos
// access public
exports.addTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    return res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.send(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc Delete todo
// @route DELETE /api/v1/todo/:id
// access public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await todo.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Update todo
// @route PUT /api/v1/todo/:id
// access public
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No todo found",
      });
    }

    await todo.save();

    return res.status(200).json({
      sucess: true,
      data: todo,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: error.message,
    });
  }
};
