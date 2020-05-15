import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Grid, Typography, Box, Card, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import service
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize:theme.typography.subtitle1,
    fontWeight: theme.typography.fontWeightBold,
    width:"100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  footer: {
    justifyContent: 'flex-end'
  },
}))

export default function MainTopic(){

  const classes = useStyles()

  const [mainTopic, setMainTopic] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const loadFeatured = async () => {
      setLoading(true);
      try {
        const response = await api.get('/featured');
        setMainTopic(response.data.data)
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    loadFeatured();
  },[])

  if (!mainTopic){
    return (<></>)
  }

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Box 
          component="h6" 
          className={classes.title}
        >
          {mainTopic.topic}
        </Box>
        {
          mainTopic.questions && mainTopic.questions.map((item, key)=> (
            <Grid key={key} item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent >
                  <Typography variant="body1" color="textPrimary" component="p">
                    {item.summary}
                  </Typography>
                </CardContent>
                <CardActions className={classes.footer}>
                  <Link to={`/tools/questions/${item.qid}/answers`}>
                    [{item.total_results} results]
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}