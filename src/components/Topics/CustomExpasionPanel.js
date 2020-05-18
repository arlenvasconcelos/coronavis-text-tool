import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress, 
  Box, 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import api
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '80%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  content: {
    padding: theme.spacing(2)
  },
}));

export default function CustomExpansionPanel({topics}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  const handleChange = async (panel, idTopic, isExpanded) => {
    setLoading(`topic-${idTopic}`);
    try {
      const response = await api.get(`/topics/${idTopic}`);
      console.log(response.data.data);
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
            key={topic+key} 
            expanded={expanded === `topic-${topic.id}`} 
            onChange={(event, isExpanded) => handleChange(`topic-${topic.id}`, topic.id, isExpanded)}
          >
            <ExpansionPanelSummary
              expandIcon={loading === `topic-${topic.id}` ? <CircularProgress size={24} /> : <ExpandMoreIcon />}
              aria-controls={`panel-topic-${topic.id}`}
              id={`panel-topic-${topic.id}`}
            >
              <Typography className={classes.heading}>{topic.topic}</Typography>
              <Typography className={classes.secondaryHeading}>{`[${topic.total} questions]`}</Typography>
            </ExpansionPanelSummary>
            <Box className={classes.content}>
              {
                questions.length && questions.map((question, index)=>(
                  <Link key={question+index} to={`/tools/questions/${question.qid}/answers`}>
                    <Box component="p" fontSize="body2.fontSize">
                      {`[${index+1}] - ${question.question} - [${question.total_answers} answers]`}
                    </Box>
                  </Link>
                ))
              }
            </Box>
          </ExpansionPanel>
        ))
      }
      
    </div>
  );
}
