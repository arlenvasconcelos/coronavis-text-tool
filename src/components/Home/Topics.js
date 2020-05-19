import React,{useState, useEffect} from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//import components
import CustomExpansionPanel from '../Topics/CustomExpasionPanel';
import ErrorCustom from '../utils/ErrorCustom';

//import api
import api from '../../service/api';

//makestyles
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    padding:theme.spacing(2)
  },
  title: {
    fontSize:theme.typography.subtitle1,
    fontWeight: theme.typography.fontWeightBold,
    width:"100%",
  },
}))

export default function Topics(){

  const classes = useStyles();

  const [topics, setTopics] = useState([]);

  useEffect(()=>{
    const loadTopics = async () => {
      try {
        const response = await api.get(`/dev/topics`);
        console.log(response.data)
        setTopics(response.data)
      } catch (err) {
        console.log(err);
      }
    }
    loadTopics();
  },[])

  if (!topics) {
    return (<ErrorCustom text="Cannot find topics" />)
  }

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Typography 
          component="h6"
          className={classes.title}
        >
          Topics
          <Box component="span" color="error.main">
            *
          </Box>
        </Typography>
        <CustomExpansionPanel topics={topics}/>
      </Grid>
    </>
  )
}