const Todo = require("../models/Todo");

// GET ALL
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// CREATE
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    const todo = new Todo({ title, description });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE
exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// TOGGLE DONE
exports.toggleDone = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
