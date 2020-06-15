import React, { useEffect, useState } from "react";
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

  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    answers: [],
  });
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      const path = props.location.pathname.split("tools");
      try {
        const response = await api.get(path[1] + props.location.search);
        setLastPage(
          response.data.last
            ? response.data.last.split("?page=")[1]
            : response.data.current
        );
        setQuestion(response.data.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadQuestion();
  }, [props.location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  if (!question) {
    return <ErrorCustom text="Cannot find this question" />;
  }

  return (
    <section className={classes.answers}>
      {!loading ? (
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
            <CardAnswer answer={answer} />
          ))}

          <Box mt={2}>
            <Pagination
              lastPage={lastPage}
              path={`/tools/questions/${question.qid}/answers`}
            />
          </Box>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </section>
  );
}
