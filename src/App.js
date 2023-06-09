import React, { useState } from 'react';
import Button from '@mui/material/Button';

import './style.css';

export default function App() {
  const [todos, setTodos] = useState(['Dog is walking', 'Go to gym']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(''); //clearing the input after clicking add todo
  };

  return (
    <div className="App">
      <h1>Hello apurv</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        
        <Button type="submit" onClick={addTodo} variant="contained"> Add todo</Button>
        {/* <button type="submit" onClick={addTodo}>
          Add todo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
