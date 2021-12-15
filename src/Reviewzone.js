import React, {useState } from 'react';
import 'typeface-roboto';

import ButtonsClassifier from './ButtonsClassifier.js'
import Record from './Record.js'
import MapLinks from './MapLinks.js'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));


export default function ReviewZone(props) {
  const classes = useStyles();

  // Declare a new state contant for the index
  const [pairIndex, setPairIndex] = useState(0);


  const [listIndex, setListIndex] = useState(0);


  // Declare a new state contant for the index
  const [appData, ] = useState(props.reviewData);
  
  const getStats = () => {

    var matchCount = 0;
    var distinctCount = 0;
    for (var l in appData['paris'])
    for (var rec in appData['pairs'][l]){
      if (appData['pairs'][l][rec].label === 1) {
        matchCount = matchCount + 1;
      }
      if (appData['pairs'][l][rec].label === 0) {
        distinctCount = distinctCount + 1;
      }
    }

    return({'matchCount': matchCount, 'distinctCount': distinctCount})
  }

  const onClick = (skipEnd) => {
    if (pairIndex < appData['pairs'][listIndex].length - 1 && !skipEnd) {
      setPairIndex(pairIndex + 1);
    } else if (listIndex < appData['pairs'].length - 1) {
      setPairIndex(0);
      setListIndex(listIndex + 1);

    } else {
      console.log("Last record, we are done.")
      console.log(getStats())
      props.reviewState("export");
    } 
  }

  const isMatch = () => {
    console.log("Records match");
    appData['pairs'][listIndex][pairIndex].label = 1;
    appData['pairs'][listIndex][pairIndex].label_str = "Match";
    
    onClick(true);
  };

  const isDistinct = () => {
    console.log("Records are distinct");
    appData['pairs'][listIndex][pairIndex].label = 0;
    appData['pairs'][listIndex][pairIndex].label_str = "Distinct";

    onClick(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm={6}>
          <Record recordData={appData['pairs'][listIndex][pairIndex]} recordSource="a"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Record recordData={appData['pairs'][listIndex][pairIndex]} recordSource="b"/>
        </Grid>
        {/* grid item for buttons at the bottom (or top))*/}
        <Grid item xs={12} sm={6}>
          <ButtonsClassifier isMatch={isMatch}  isDistinct={isDistinct}/>
        </Grid>
        <MapLinks x={appData['pairs'][listIndex][pairIndex].fields[0]['b'].value} y={appData['pairs'][listIndex][pairIndex].fields[1]['b'].value} />
      </Grid>
    </div>
  );
}



//

//
//
