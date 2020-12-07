import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//import components
import LinePanel from "../Topics/LinePanel";

//import api
import api from "../../service/api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "80%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  content: {
    padding: theme.spacing(2),
  },
}));

export default function CustomExpansionPanel({ topics }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleChange = async (panel, idTopic, isExpanded) => {
    setLoading(`topic-${idTopic}`);
    try {
      const response = await api.get(`/topics/${idTopic}`);
      setQuestions(response.data.data);
      setExpanded(isExpanded ? panel : false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      {topics &&
        topics.map((topic, key) => (
          <ExpansionPanel
            key={topic + key}
            expanded={expanded === `topic-${topic.id}`}
            onChange={(event, isExpanded) =>
              handleChange(`topic-${topic.id}`, topic.id, isExpanded)
            }
          >
            <ExpansionPanelSummary
              expandIcon={
                loading === `topic-${topic.id}` ? (
                  <CircularProgress size={24} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls={`panel-topic-${topic.id}`}
              id={`panel-topic-${topic.id}`}
            >
              <Typography className={classes.heading}>{topic.topic}</Typography>
              <Typography
                className={classes.secondaryHeading}
              >{`[${topic.total} questions]`}</Typography>
            </ExpansionPanelSummary>
            <Box className={classes.content}>
              {questions.length &&
                questions.map((question, index) => (
                  <LinePanel
                    key={question.question + index}
                    index={index}
                    question={question}
                  />
                ))}
            </Box>
          </ExpansionPanel>
        ))}
      <Box component="p" mt={2} fontSize="body2.fontSize" color="error.main">
        * This is an autogenerated summary based on a semantic search of
        abstracts. Always examine the sources before accepting this conclusion.
        If the evidence only mentions the topic or the evidence is not clear,
        the summary will likely not clearly answer the question.
      </Box>
    </div>
  );
}
