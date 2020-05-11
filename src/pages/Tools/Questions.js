import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import CardQuestion from '../../components/Questions/CardQuestion'

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
      <Box component="h4" noWrap mb={1} fontSize="subtitle1.fontSize" color="grey.800" fontWeight="fontWeightBold"> 
        Topic: {question.topic} 
      </Box>
      <Box component="h6" noWrap fontWeight="fontWeightBold" mb={2} fontSize="subtitle1.fontSize">
        Question: {question.text}
      </Box>
      <Grid container spacing={3}>
        {
          question.answers.map(( (answer, key) => (
            <Grid key={key} item xs={6}>
              <CardQuestion answer={answer} index={key}/>
            </Grid>
          )))
        }
        
      </Grid>
    </div>
  );
}