import './My-App.css';
import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim() === '') return;
        setTodos([...todos, inputValue]);
        setInputValue(''); 
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue} 
            onChange={(event) => setInputValue(event.target.value)} />
            <button type="submit">Add Task</button>
            </form>
            <ul>{todos.map((todo, index) => (
                <li key={index}> 
                <button onClick={() => handleDelete(index)}>Delete</button> {todo}
                </li>
            ))}
                </ul>
        </div>
    );
}

export default TodoList;