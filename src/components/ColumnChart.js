import React from 'react'

export default function MyChart() {
  // Use any data object you want
  const originalData = React.useMemo(
    () => ({
      axis: [1, 2, 3],
      lines: [
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] }
      ]
    }),
    []
  )
 
  // Make data.lines represent the different series
  const data = React.useMemo(data => originalData.lines, [originalData])
 
  // Use data.lines[n].data to represent the different datums for each series
  const getDatums = React.useCallback(series => series.data, [])
 
  // Use the original data object and the datum index to reference the datum's primary value.
  const getPrimary = React.useCallback(
    (datum, i, series, seriesIndex, data) => originalData.axis[i],
    []
  )
 
  // Use data.lines[n].data[n].value as each datums secondary value
  const getSecondary = React.useCallback(datum => datum.value, [])
 
  return (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart
        data={data}
        getSeries={getSeries}
        getDatums={getDatums}
        getPrimary={getPrimary}
        getSecondary={getSecondary}
      />
    </div>
  )
}