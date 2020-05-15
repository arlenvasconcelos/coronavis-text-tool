import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import logoInf from '../../assets/images/inf-logo-2.png';
import logoUfrgs from '../../assets/images/ufrgs-logo-2.png';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '28px',
    '& *': {
      color: theme.palette.common.black,
    },
    '& *:hover': {
      textDecoration: 'none',
      color: theme.palette.common.black,
    }
  },
  image: {
    maxHeight: '90px',
  }
}))

export default function Header(){

  const classes = useStyle();

  return (
    <>
    <Box display="flex" justifyContent="center">
      <Box>
        <img className={classes.image} alt="Logo UFRGS" src={logoUfrgs}/>
      </Box>
      <Box display="flex" alignItems="center" p={1}>
        <Box>
          <Typography 
            component="h1"
            variant="h4"
            align="center"
            className={classes.title}
          >
            <Link to="/">COVID-19 Analysis Tools</Link>
          </Typography>
          <Typography component="h3" variant="subtitle1" align="center" color="textSecondary">
            Text Analytics for the COVID-19 Literature
          </Typography>
        </Box>
      </Box>
      <Box height={90}>
        <img className={classes.image} alt="Logo INF" src={logoInf}/>
      </Box>
    </Box>
    </>
  )
}

