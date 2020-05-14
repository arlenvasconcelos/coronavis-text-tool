import React  from 'react';
// import {Card, Button, Spinner} from 'react-bootstrap';
import {Card, CardActions, CardContent, Typography, Button, CircularProgress, CardHeader, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  footer: {
    justifyContent: 'flex-end'
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

export default function CustomCard(props){

  const {title, authors, body, secondarybody, button, loading, buttonAction} = props;

  const classes = useStyles()

  return (
    <>
      <Card className={classes.paper} variant="outlined">
        <CardHeader
          title={title}
          subheader={authors}
        />
        <Divider variant="middle" />
        <CardContent >
          <Typography variant="body1" color="textPrimary" component="p">
            {body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {secondarybody}
          </Typography>
        </CardContent>
        <CardActions className={classes.footer}>
          <Button 
            size="small" 
            color="primary" 
            variant="contained" 
            onClick={buttonAction}
            disabled={loading}
          >
            {button}
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}