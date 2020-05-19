import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Box, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import logoInf from '../../assets/images/inf-logo-2.png';
import logoUfrgs from '../../assets/images/ufrgs-logo-2.png';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '28px',
    order: 3,
    '& *': {
      color: theme.palette.common.black,
      textDecoration: 'none',
    },
    '& *:hover':{
      color: theme.palette.common.black,
      textDecoration: 'none',
    },  
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  logoInf:{
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 3,
    },
    "& img": {
      maxHeight: '100px',
    }
  },
  logoUfrgs:{
    display: 'flex',
    justifyContent: 'flex-end',
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
    "& img": {
      maxHeight: '100px',
    }
  }
}))

export default function Header(){

  const classes = useStyle();

  return (
    <header>
      <Grid container className={classes.root} spacing={2}>
        <Grid xs={6} sm={3} md={4} mditem className={classes.logoUfrgs}>
          <img alt="Logo UFRGS" src={logoUfrgs}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} className={classes.title} item>
          <Typography 
            component="h1"
            variant="h4"
            align="center"
          >
            <Link to="/">COVID-19 Analysis Tools</Link>
          </Typography>
          <Typography component="h3" variant="subtitle1" align="center" color="textSecondary">
            Text Analytics for the COVID-19 Literature
          </Typography>
        </Grid>
        <Grid xs={6} sm={3} md={4} item className={classes.logoInf}>
          <img alt="Logo INF" src={logoInf}/>
        </Grid>
      </Grid>
    </header>
  )
}

