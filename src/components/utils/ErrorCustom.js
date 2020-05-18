import React from 'react';
import {Grid, Typography} from '@material-ui/core';

export default ({text}) => {
  return (
    <Grid container>
      <Grid item >
        <Typography color="error">
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}