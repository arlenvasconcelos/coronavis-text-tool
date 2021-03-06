import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import { Typography } from "@material-ui/core";

import ColumnChart from "../Searched/ColumnChart";
import Papers from "../Searched/Papers";
import ErrorCustom from "../utils/ErrorCustom";

export default function Searched() {
  const { results } = useSelector((state) => state, []);

  if (results.errorStatus) {
    return <ErrorCustom text={results.errorMessage} />;
  }

  return (
    <>
      {results.data.papers ? (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Typography>{`Results to "${results.data.searchTerm}"`}</Typography>
            <Papers papers={results.data.papers} query={results.data.query} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ColumnChart dataSearched={results.data} />
          </Grid>
        </Grid>
      ) : (
        <ErrorCustom text="No results found. Please, search above." />
      )}
    </>
  );
}
