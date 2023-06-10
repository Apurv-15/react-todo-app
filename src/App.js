import React, { useState } from 'react';
import Todo from './Todo.js';
import { Button, FormControl, InputLabel, Input,List,ListItem,ListItemText } from '@mui/material';

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
        {/* <button type="submit" onClick={addTodo}>
          Add todo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />//doubt not showing any ul
          // <li>{todo}</li>
        //   <List>
        //   <ListItem>
        //     <ListItemText primary={todo} secondary="Dummy deadline ⏳" />
        //   </ListItem>
        // </List>
        // ))}
      </ul>
    </div>
  );
}
