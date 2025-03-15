import React from "react";

function CompletedTodos({ todos, toggleCompleted }) {
  return (
    <section>
      <h2>Completed Todos</h2>
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <div 
            key={`completed-${todo.id}`} 
            className="completed-todo-item"
            style={{ border: "1px solid green", padding: "12px", margin: "8px" }}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Due Date: {todo.due}</p>
            <p>Completed: Yes</p>
            <button onClick={() => toggleCompleted(todo)}>Mark Incomplete</button>
          </div>
        ))}
    </section>
  );
}

export default CompletedTodos;
