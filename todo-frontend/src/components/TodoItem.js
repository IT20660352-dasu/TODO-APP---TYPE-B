import React, { useState } from "react";
import axios from "axios";

function TodoItem({ todo, refresh }) {
const [editing, setEditing] = useState(false);
const [title, setTitle] = useState(todo.title);
const [description, setDescription] = useState(todo.description || "");
const [saving, setSaving] = useState(false);

const toggleDone = async () => {
try {
await axios.patch(
(process.env.REACT_APP_API_BASE || "[http://localhost:5000](http://localhost:5000)") + `/api/todos/${todo._id}/done`
);
refresh();
} catch (err) {
console.error(err);
}
};

const save = async () => {
if (!title.trim() || !description.trim()) {
alert("Title and description are required.");
return;
}
setSaving(true);
try {
await axios.put(
(process.env.REACT_APP_API_BASE || "[http://localhost:5000](http://localhost:5000)") + `/api/todos/${todo._id}`,
{ title, description }
);
setEditing(false);
refresh();
} catch (err) {
console.error(err);
} finally {
setSaving(false);
}
};

const remove = async () => {
if (!window.confirm("Delete this todo?")) return;
try {
await axios.delete(
(process.env.REACT_APP_API_BASE || "[http://localhost:5000](http://localhost:5000)") + `/api/todos/${todo._id}`
);
refresh();
} catch (err) {
console.error(err);
}
};

return (
<div
style={{
marginBottom: 12,
padding: 12,
borderRadius: 8,
border: "1px solid #eee",
display: "flex",
alignItems: "center",
gap: 12,
backgroundColor: todo.done ? "#f0fff0" : "#fff",
transition: "background-color 0.3s",
}}
>
{/* Mark as Done Button */}
<button
onClick={toggleDone}
style={{
background: 'none',
border: 'none',
cursor: 'pointer',
color: todo.done ? '#4caf50' : '#999',
fontSize: 18,
whiteSpace: 'nowrap',
}}
>
{todo.done ? '✅ Done' : '⭕ Mark as Done'} </button>

```
  <div
    style={{
      flex: '1 1 auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }}
  >
    {editing ? (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </div>
    ) : (
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textDecoration: todo.done ? "line-through" : "none",
            color: todo.done ? "#999" : "#000",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          title={todo.title} // show full title on hover
        >
          {todo.title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 13,
              color: todo.done ? "#999" : "#555",
              marginTop: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            title={description} // show full description on hover
          >
            {todo.description}
          </div>
        )}
      </div>
    )}
  </div>

  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
    {editing ? (
      <>
        <button onClick={save} disabled={saving} style={{ padding: "6px 12px" }}>
          {saving ? "Saving..." : "Save"}
        </button>
        <button onClick={() => setEditing(false)} style={{ padding: "6px 12px" }}>
          Cancel
        </button>
      </>
    ) : (
      <>
        <button onClick={() => setEditing(true)} style={{ padding: "6px 12px" }}>
          Edit
        </button>
        <button onClick={remove} style={{ padding: "6px 12px", color: "#ffffffff" }}>
          Delete
        </button>
      </>
    )}
  </div>
</div>


);
}

export default TodoItem;
