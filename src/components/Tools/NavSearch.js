import React, {useState} from 'react'
import {Container, Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles'
import { useDispatch } from 'react-redux';

import api from '../../service/api'

import { dataSearched } from '../../store/ducks/dataSearched';
import { Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  gridButton: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonProgress: {
    color: theme.palette.grey[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function NavSearch(){

  const classes = useStyles()

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    setLoading(true);
    try {
      const response = await api.post(`/search?query=${inputValue}`);
      dispatch(dataSearched(response.data));
      console.log(response.data)
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container className={classes.root}>
          <Grid item sm={11}>
            <TextField
              label=""
              fullWidth
              id="input-search"
              placeholder="Type here"
              variant="outlined"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Grid>
          <Grid item sm={1}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<SearchIcon/>}
              disabled={loading}
            >
              Submit
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}