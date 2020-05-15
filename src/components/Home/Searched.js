import React from 'react';
import {Grid} from '@material-ui/core';

//import components
// import Scatterplot from '../Searched/Scatterplot'
import ColumnChart from '../Searched/ColumnChart'
import Papers from '../Searched/Papers'


export default function Searched({dataSearched}){


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Papers papers={dataSearched.papers} query={dataSearched.query}/>
        </Grid>
        <Grid item xs={12} lg={4}>
          {/* <Scatterplot/> */}
          <ColumnChart dataSearched={dataSearched}/>
        </Grid>
      </Grid>
    </>
  )
}