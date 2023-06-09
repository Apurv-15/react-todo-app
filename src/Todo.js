import React from 'react'
import { ListItem } from '@mui/material';

function Todo(props)
{
  return
  {
    <div>
      <li>{props.text}</li>
    </div>
  }
}

export default Todo