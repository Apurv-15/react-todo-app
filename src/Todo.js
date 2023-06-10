import React from 'react';
import { ListItem,List,ListItemText } from '@mui/material';

export default function Todo(props) 
{
  return(
  <List>
    <ListItem>
      <ListItemText primary="Todo" secondary="props.text" />
    </ListItem>
  </List>
  );
}

// export default Todo;
