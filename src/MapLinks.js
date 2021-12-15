import React from 'react';
import 'typeface-roboto';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';


export default function MapLinks(props) {

    const osmUrl = "https://www.openstreetmap.org/#map=17/"+props.x+"/"+props.y
    const gmapsUrl = "http://maps.google.com/maps?q="+props.x+","+props.y
    const streetViewUrl = "http://maps.google.com/maps?q=&layer=c&cbll="+props.x+","+props.y+"&cbp=11,0,0,0,0"

  return (
      <Typography component="p">

        Link to maps :
        <ul>
        <li>  <a href={osmUrl} target="_blank" rel="noopener noreferrer"> Open Street Map </a> </li>
        <li>  <a href={gmapsUrl} target="_blank" rel="noopener noreferrer"> Google Maps </a> </li>
        <li>  <a href={streetViewUrl} target="_blank" rel="noopener noreferrer"> Google Street View </a> </li>
        </ul>
      </Typography>

  );
}
