import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosProps } from "./types";

const Form: React.FC<TodosProps> = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const updatedTodo = (title: string, id: string, completed: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editTodo) {
      if (input.trim()) {
        /**
         * Adds a new todo item to the todos array with a unique ID, the current input value, and a completed status of false.
         */
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
        console.log({ ...todos });
      }
    } else {
      updatedTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Enter a Todo..."
          className="task-input"
          onChange={onInputChange}
        />
        <button className="btn-add" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
export default Form;
