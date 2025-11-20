import React, { useEffect, useState } from "react";
import api from "./api";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadTodos(); }, []);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>TODO APP</h1>
      <TodoForm refresh={loadTodos} />
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} refresh={loadTodos} />
      ))}
    </div>
  );
}

export default App;
