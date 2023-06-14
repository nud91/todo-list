import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onUpdate }) => {
return (
    <div>
        <small>
            The list contains (<strong>{todos.length}</strong>) tasks 
        </small>
        
        <ul className="list-group">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
        </ul>
    </div>
);
};

export default TodoList;