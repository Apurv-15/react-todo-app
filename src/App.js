import React, { useState } from 'react';
import './style.css';

export default function App() {
  const sum = 1 + 1;
  const [todos, setData] = useState(['Heelo', 'bye']);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>hello apurv</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {/* <button onClick={()=>setData(data+1)}>update data</button> */}
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
