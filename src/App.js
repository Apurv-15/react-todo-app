import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState(['Heelo', 'bye']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>hello apurv</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        

        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
