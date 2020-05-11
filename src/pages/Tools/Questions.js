import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import CardQuestion from '../../components/Questions/CardQuestion';
import Pagination from '../../components/utils/Pagination';

//import api
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  section: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    padding: theme.spacing(2),
    borderRadius: '5px',
  },
}))


export default function Questions(props){

  const classes = useStyles();

  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    answers: []
  });
  const [index, setIndex] = useState(1)
  

  console.log(props.location)

  useEffect(()=>{
    const loadQuestion = async () => {
      const path = props.location.pathname.split('tools')
      try{
        const response = await api.get(path[1]+props.location.search)
        console.log(response.data)
        setQuestion(response.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    loadQuestion();
  },[props.location]);

  return (
    <Box className={classes.section}>
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
      <Box mt={2}>
        <Pagination />
      </Box>
    </Box>
  );
}