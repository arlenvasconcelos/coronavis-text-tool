import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import logoInf from '../../assets/images/inf-logo-2.png';
import logoUfrgs from '../../assets/images/ufrgs-logo-2.png';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
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
            variant="h6"
            align="center"
            className={classes.title}
          >
            {/* <a className="header__link" href="/"><h1>COVID-19 Analysis Tools</h1></a> */}
            <Link to="/">COVID-19 Analysis Tools</Link>
          </Typography>
          <Typography component="h4" variant="subtitle1" align="center">
            Text Analytics for the COVID-19 Literature
          </Typography>
        </Box>
      </Box>
      <Box>
        <img className={classes.image} alt="Logo INF" src={logoInf}/>
      </Box>
    </Box>
    </>
  )
}

