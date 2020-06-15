import React from "react";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import store from "./store";
import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    </>
  );
}
