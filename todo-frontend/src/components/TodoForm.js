import React, { useState } from "react";
import axios from "axios";

function TodoForm({ refresh }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [saving, setSaving] = useState(false);
const [error, setError] = useState(null);

const submit = async (e) => {
e.preventDefault()

// Validation
if (!title.trim()) {
  setError("Title is required");
  return;
}
if (!description.trim()) {
  setError("Description is required");
  return;
}

setSaving(true);
try {
  await axios.post(
    (process.env.REACT_APP_API_BASE || "http://localhost:5000") + "/api/todos",
    { title, description }
  );
  setTitle("");
  setDescription("");
  setError(null);
  refresh();
} catch (err) {
  setError("Failed to save");
} finally {
  setSaving(false);
}


};

return (
<form onSubmit={submit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
<input
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>
<input
placeholder="Description"
value={description}
onChange={(e) => setDescription(e.target.value)}
required
/> <button disabled={saving}>{saving ? "Saving..." : "Add"}</button>
{error && <div style={{ color: "red" }}>{error}</div>} </form>
);
}

export default TodoForm;
