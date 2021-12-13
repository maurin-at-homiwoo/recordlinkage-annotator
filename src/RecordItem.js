import React from 'react';
import 'typeface-roboto';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';


export default function RecordItem(props) {
  return (
    <ListItem alignItems="flex-start">
      <Typography component="p">
        {props.itemName} : {props.itemText}
      </Typography>
    </ListItem>

  );
}
