import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import ColumnChart from "../Searched/ColumnChart";
import Papers from "../Searched/Papers";
import ErrorCustom from "../utils/ErrorCustom";

export default function Searched() {
  const { results } = useSelector((state) => state.content, []);

  return (
    <>
      {results.papers ? (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Papers papers={results.papers} query={results.query} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ColumnChart dataSearched={results} />
          </Grid>
        </Grid>
      ) : (
        <ErrorCustom text="Cannot find results." />
      )}
    </>
  );
}
