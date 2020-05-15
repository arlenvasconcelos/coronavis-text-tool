import React, {useEffect, useState} from 'react'
import { Chart } from 'react-charts'
import {Card, CardContent, CardHeader, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
}));

export default function ColumnChart(props) {

  const {dataSearched} = props;
  const [dataFormated, setDataFormated] = useState([]);

  const classes = useStyles();

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "ordinal"},
      { position: "left", type: "linear", stacked: false }
    ],
    []
  ); 

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all 1s ease',
    }),
    []
  );
  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all 1s ease'
    }),
    []
  );

  useEffect(() => {
    setDataFormated(dataSearched.word_frequency.datums.slice(0, 20).map((element)=>{
      return ({
        label: element.x,
        datums: [{
          x: 'Words',
          y: element.y
        }]
      })
    }))
  }, [dataSearched.word_frequency.datums])

  if (!dataFormated){
    return <></>
  }
  
  return (
      <Card className={classes.paper} variant="outlined">
        <CardHeader
          title="Word Frequency"
        />
        <CardContent>
          <Box width="100%" height={300}>
            <Chart 
              data={dataFormated} 
              series={series} 
              axes={axes} 
              tooltip 
              getSeriesStyle={getSeriesStyle}
              getDatumStyle={getDatumStyle}
            />
          </Box>
        </CardContent>
      </Card>
  );
}