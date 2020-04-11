import React from 'react'
import { Chart } from 'react-charts'

export default function ColumnChart() {
  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "ordinal" },
      { position: "left", type: "linear", stacked: false }
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        datums: [
          {
            x: "bla1",
            y: 15
          },
          {
            x: "bla2",
            y: 5
          },
          {
            x: "bla3",
            y: 10
          },
          {
            x: "bla4",
            y: 9
          },
          {
            x: "bla10",
            y: 8
          },
          {
            x: "bla9",
            y: 8
          },
          {
            x: "bla8",
            y: 8
          },
          {
            x: "bla7",
            y: 8
          },
          {
            x: "bla6",
            y: 8
          },
        ]
      }
    ],
    []
  );
  return (
      <div style={{ width: "100%", height: "200px" }}>
        <Chart data={data} series={series} axes={axes} />
      </div>
  );
}