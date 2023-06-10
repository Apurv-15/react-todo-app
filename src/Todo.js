import React from 'react';
import { ListItem,List,ListItemText } from '@mui/material';

export default function Todo(props) 
{
  return(
   <List>
          <ListItem>
            <ListItemText primary={props.text} secondary="Dummy deadline ⏳" />
          </ListItem>
        </List>
  );
}

// export default Todo;
