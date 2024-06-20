import React from "react";
import { TodosProps } from "./types";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const TodosList: React.FC<TodosProps> = ({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleCompleted = (id: string) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleEdit = (id: string) => {
    const findTodo = todos.find((todo) => todo.id === id);

    if (findTodo) {
      setEditTodo(findTodo);
    }
  };

  const handleDelete = (id: string) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);

    setTodos(deleteTodo);
  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="text"
              value={todo.title}
              onChange={onInputChange}
              readOnly
            />

            <button
              className="btn-complete task-btn"
              onClick={() => handleCompleted(todo.id)}
            >
              <FaCheckCircle color={todo.completed ? "#28a745" : "#dc161d"} />
            </button>

            <button
              className="btn-edit task-btn"
              onClick={() => handleEdit(todo.id)}
            >
              <FaEdit color="#20A4F3" />
            </button>

            <button
              className="btn-delete task-btn"
              onClick={() => handleDelete(todo.id)}
            >
              <FaTrashCan color="#FF1053" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodosList;
