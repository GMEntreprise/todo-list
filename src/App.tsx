import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([]);
  const [editTodo, setEditTodo] = useState<{
    id: string;
    title: string;
    completed: boolean;
  } | null>(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
