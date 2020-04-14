import React from 'react'
import { Chart } from 'react-charts'

export default function ColumnChart(props) {
  const {dataSearched} = props;

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      // { primary: true, position: "bottom", type: "ordinal" },
      { primary: true, position: "bottom", type: "ordinal"},
      { position: "left", type: "linear", stacked: false }
    ],
    []
  );
  const data = React.useMemo(
    () => [ 
      {
        label: dataSearched.word_frequency.label,
        datums: dataSearched.word_frequency.datums.slice(0, 50)
      }
    ],
    [dataSearched.word_frequency.label, dataSearched.word_frequency.datums]
  );
  return (
      <div style={{ width: "100%", height: "200px" }}>
        <Chart data={data} series={series} axes={axes} tooltip dark />
      </div>
  );
}