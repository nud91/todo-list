import React from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    const updatedTodo = { ...todo, done: !todo.done };
    onUpdate(todo.id, updatedTodo);
  };
  const listItemClasses = "m-1 list-group-item" + (todo.done ? ' done' : ''); // Dodajemy klasę 'done' jeśli todo.done === true

  return (
    <div>
      <li className={listItemClasses}>
        <button onClick={handleToggle} type="button" className="btn btn-sm btn-success">Done</button>
        <button onClick={handleDelete} type="button" className="btn btn-sm btn-danger m-2">Delete</button>
        <br></br>
        <span>{todo.title}</span>
      </li>
    </div>
  );
};

export default TodoItem;