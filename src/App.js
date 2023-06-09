import React, { useState, useEffect } from 'react';
import Todo from './Todo.js';
import { Button, FormControl, InputLabel, Input } from '@mui/material';

import db from './firebase.js';
// import { collection} from 'firebase/firestore';

import './style.css';

export default function App() {
  const [todos, setTodos] = useState(['Dog is walking', 'Go to gym']);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });


  const addTodo = (event) => {
    //this will fire off when we click button
    event.preventDefault();
    setTodos([...todos, input]); 
    setInput(''); //clearing the input after clicking add todo
  };

  return (
    <div className="App">
      <h1>Hello Apurv🚀</h1>
      <form>
        {/* <input /> */}

        <FormControl>
          <InputLabel>Write a todo!!!</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input} //for disabling if no input
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          {' '}
          Add todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        
        ))}
      </ul>
    </div>
  );
}
