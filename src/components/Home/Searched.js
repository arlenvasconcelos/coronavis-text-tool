import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import components
// import Scatterplot from '../Searched/Scatterplot'
import ColumnChart from '../Searched/ColumnChart'
import Papers from '../Searched/Papers'

const useStyles = makeStyles((theme) => ({
  section: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    padding: theme.spacing(2),
    borderRadius: '5px',
  },
}))

export default function Searched({dataSearched}){

  const classes = useStyles()

  return (
    <>
      <Grid container spacing={3}>  
        <Grid item lg="8">
          <Papers papers={dataSearched.papers} query={dataSearched.query}/>
        </Grid>
        <Grid item lg="4">
          {/* <Scatterplot/> */}
          <ColumnChart dataSearched={dataSearched}/>
        </Grid>
      </Grid>
    </>
  )
}