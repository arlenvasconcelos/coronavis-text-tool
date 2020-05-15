import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import CardAnswer from '../components/Answers/CardAnswer';
import Pagination from '../components/utils/Pagination';

//import api
import api from '../service/api';

const useStyles = makeStyles((theme) => ({
  section: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
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
  const [lastPage, setLastPage] = useState(0);
  // const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const loadQuestion = async () => {
      // setLoading(true)
      const path = props.location.pathname.split('tools')
      try{
        const response = await api.get(path[1]+props.location.search);
        setLastPage(response.data.last ? response.data.last.split('?page=')[1] : response.data.current)
        setQuestion(response.data.data)
        console.log(response.data)
        // setLoading(false);
      }
      catch(err){
        // setLoading(false);
        console.log(err)
      }
    }
    loadQuestion();
  },[props.location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location])

  return (
    <Box className={classes.section}>
      <Box component="h4" mb={1} fontSize="subtitle1.fontSize" color="grey.800" fontWeight="fontWeightBold"> 
        Topic: {question.topic} 
      </Box>
      <Box component="h6" fontWeight="fontWeightBold" mb={2} fontSize="subtitle1.fontSize">
        Question: {question.text}
      </Box>
      <Grid container spacing={1}>
        {
          question.answers.map(( (answer, key) => (
            <Grid key={key} item xs={6}>
              <CardAnswer answer={answer}/>
            </Grid>
          )))
        }
      </Grid>
      <Box mt={2}>
        <Pagination 
          lastPage={lastPage} 
          path={`/tools/questions/${question.qid}/answers`}
        />
      </Box>
    </Box>
  );
}