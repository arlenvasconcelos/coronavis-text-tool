import React from 'react'
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

  const classes = useStyles();

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      // { primary: true, position: "bottom", type: "ordinal" },
      { primary: true, position: "left", type: "ordinal"},
      { position: "bottom", type: "linear" }
    ],
    []
  );
  const data = React.useMemo(
    () => [ 
      {
        label: dataSearched.word_frequency.label,
        datums: dataSearched.word_frequency.datums.slice(0, 20)
      }
    ],
    [dataSearched.word_frequency.label, dataSearched.word_frequency.datums]
  );

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all 1s ease'
    }),
    []
  );
  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all 1s ease'
    }),
    []
  );
  
  return (
      <Card className={classes.paper} variant="outlined">
        <CardHeader
          title="Word Frequency"
        />
        <CardContent>
          <Box width="100%" height={400}>
            <Chart 
            data={data} 
            series={series} 
            axes={axes} 
            tooltip 
            getSeriesStyle={getSeriesStyle}
            getDatumStyle={getDatumStyle}/>
          </Box>
        </CardContent>
      </Card>
  );
}