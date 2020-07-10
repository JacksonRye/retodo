const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    trim: true,
    required: [true, "Please add task"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    trim: true,
    required: [true, "Please select a category"],
  },
  date: {
    type: Date,
    default: new Date().toLocaleString(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
