import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CardAnswer from "../components/Answers/CardAnswer";
import Pagination from "../components/utils/Pagination";
import ErrorCustom from "../components/utils/ErrorCustom";

import api from "../service/api";

const useStyles = makeStyles((theme) => ({
  answers: {
    flexGrow: 1,
    padding: theme.spacing(2),
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 300px)",
  },
  topic: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[800],
  },
  question: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function Questions(props) {
  const classes = useStyles();
  const location = useLocation();

  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    answers: [],
  });
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      setError(false);
      const path = location.pathname.split("tools");
      try {
        const response = await api.get(path[1] + location.search);
        setLastPage(
          response.data.last
            ? response.data.last.split("?page=")[1]
            : response.data.current
        );
        setQuestion(response.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err);
      }
    };
    loadQuestion();
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className={classes.answers}>
      {!loading ? (
        error ? (
          <ErrorCustom text="Cannot find this question" />
        ) : (
          <Container>
            <Typography
              component="h4"
              variant="subtitle1"
              className={classes.topic}
            >
              Topic: {question.topic}
            </Typography>
            <Typography
              component="h6"
              variant="subtitle1"
              className={classes.question}
            >
              Question: {question.text}
            </Typography>

            {question.answers.map((answer, key) => (
              <CardAnswer key={key} answer={answer} />
            ))}

            <Box mt={2}>
              <Pagination
                lastPage={lastPage}
                path={`/tools/questions/${question.qid}/answers`}
              />
            </Box>
          </Container>
        )
      ) : (
        <CircularProgress />
      )}
    </section>
  );
}
