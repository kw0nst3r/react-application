import React from "react";

function TodoList({ todos, deleteTodo, toggleCompleted }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h2>TODOS TODO</h2>
      {todos
        .filter(({ completed }) => !completed)
        .map((todo) => {
          const { id, title, description, due } = todo;
          const isPastDue = new Date(due) < new Date(today);

          return (
            <div
              key={id}
              style={{ border: "1px solid #ccc", padding: "12px", margin: "8px" }}>
              <h1 style={{ color: isPastDue ? "red" : "black" }}>{title}</h1>
              <p>{description}</p>
              <p style={{ color: isPastDue ? "red" : "black" }}>Due Date: {due}</p>
              <p>Completed: No</p>
              <button onClick={() => deleteTodo(id)}>Delete</button>
              <button onClick={() => toggleCompleted(todo)}>Complete</button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
