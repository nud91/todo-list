import React, { useState, useEffect } from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "./api";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && newTodo.trim() !== "") {
      try {
        const todo = { title: newTodo.trim(), done: false };
        console.log(todo);
        await createTodo(todo);
        setNewTodo("");
        fetchTodos();
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      await updateTodo(id, updatedTodo);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-top display-1">
            <span className="navbar-brand">
              App <strong>ToDoList</strong>
            </span>
          </nav>
        </div>
      </header>

      <div className="container-fluid">
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            className="form-control inputText"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder=""
          />
          <strong><small>Press enter to add a new task ...</small></strong>
        </div>

        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

export default App;
