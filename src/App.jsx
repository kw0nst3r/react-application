import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./TodoList";
import CompletedTodos from "./CompletedTodos";
import { v4 as uuidv4 } from "uuid";



function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "Went to vet for the kiddies", description: "15th of every month", due: "3/15/2025", completed: false },
    { id: uuidv4(), title: "Go to gym", description: "Go workout Chest, Legs, and Arms", due: "3/15/2025", completed: false },
    { id: uuidv4(), title: "Interview", description: "SWE Role", due: "3/21/2025", completed: false },
    { id: uuidv4(), title: "Pay parents back", description: "Owe parents the world", due: "10/18/2040", completed: false },
    { id: uuidv4(), title: "Read a book", description: "Finish reading harry potter", due: "3/25/2025", completed: false },
    { id: uuidv4(), title: "DO CS554 Lab", description: "Lab 4 react lab is due tonight", due: "3/14/2025", completed: false },
    { id: uuidv4(), title: "Project CS554 meeting", description: "Discuss project with group", due: "3/17/2025", completed: false },
    { id: uuidv4(), title: "Laundry", description: "Wash clothes", due: "3/15/2025", completed: false },
    { id: uuidv4(), title: "APPLY for jobs", description: "Apply during spring break atleast 100 internships", due: "3/23/2025", completed: false },
    { id: uuidv4(), title: "Study for midterm", description: "CS496 midterm today", due: "3/14/2025", completed: false }
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const toggleCompleted = (todo) => {
    setTodos(todos.map(t => (t.id === todo.id ? { ...t, completed: !t.completed } :t)));
  };

  return (
    <div>
      <h1>Todo Tracker</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
      <CompletedTodos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;