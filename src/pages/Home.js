import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import Searched from "../components/Home/Searched";
import Topics from "../components/Home/Topics";
import NavTabs from "../components/Home/NavTabs";

import { setError, setTopics } from "../store/ducks/topics";
import api from "../service/api";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: theme.palette.common.white,
    minHeight: "calc(100vh - 300px)",
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tabs = [
    {
      title: "Suggested Topics",
      body: <Topics />,
    },
    {
      title: "Search Results",
      body: <Searched />,
    },
  ];

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const response = await api.get(`/dev/topics`);
        dispatch(setTopics(response.data));
      } catch (err) {
        dispatch(setError("Cannot find topics"));
        console.log(err);
      }
    };
    loadTopics();
  }, [dispatch]);

  return (
    <div className={classes.home}>
      <NavTabs tabs={tabs} />
    </div>
  );
}
