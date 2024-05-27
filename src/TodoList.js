import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, fetchTodos } from './actions';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        dispatch(addTodo(inputValue));
        setInputValue('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => dispatch(toggleTodo(index))}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your todo"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoList;
