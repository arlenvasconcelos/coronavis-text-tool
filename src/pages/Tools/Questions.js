import React, {useEffect, useState} from 'react';
import TitleCard from '../../components/TitleCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    padding: theme.spacing(2),
    borderRadius: '5px',
  },
  question: {
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.common.black,
  },
  highlight: {
    backgroundColor: theme.palette.primary[100],
    fontWeight: theme.typography.fontWeightMedium
  }
}))

//import api

export default function Questions(props){

  const classes = useStyles();

  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    answers: []
  });

  useEffect(()=>{
    const loadQuestion = async () => {
      const path = props.location.pathname.split('tools')
      try{
        const response = await api.get(path[1])
        console.log(response.data)
        setQuestion(response.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    loadQuestion();
  },[]);

  return (
    <div className={classes.root}>
      <Box component="h4" noWrap mb={1} fontSize="subtitle1.fontSize" color="grey.800"> 
        Topic: {question.topic} 
      </Box>
      {/* <Typography component="h6" variant="title" gutterBottom noWrap className={classes.question}> */}
      <Box component="h6" noWrap fontWeight="fontWeightBold" mb={2} fontSize="subtitle1.fontSize">
        Question: {question.text}
      </Box>
      {/* </Typography> */}
      <Grid container spacing={3}>
        {
          question.answers.map(( (answer, key) => (
            <Grid item xs={6}>
              <Paper elevation={4} className={classes.paper}>
                <Typography component="body1">
                  <Box fontWeight="fontWeightBold">
                    {`[${key+1}] ${answer.title}`}
                  </Box>
                  {/* <Typography variant="subtitle2" gutterBottom className={classes.authorCard}> */}
                  <Box fontStyle="italic" mb={2} fontSize="subtitle2.fontSize">
                    Authors: {answer.authors}
                  </Box>
                    
                  {/* </Typography> */}
                  <Typography paragraph >
                    Answer: {answer.sentence_beginning}
                    <span className={classes.highlight}>{answer.answer}</span>
                    {answer.sentence_ending}
                  </Typography>
                  Publish Time: {answer.publish_time}
                  <br/>
                  <a href={answer.DOI ? `http://www.doi/${answer.DOI}`: '#'} >DOI: {answer.doi}</a>
                </Typography>
              </Paper>
            </Grid>
          )))
        }
        
      </Grid>
    </div>
  );
}