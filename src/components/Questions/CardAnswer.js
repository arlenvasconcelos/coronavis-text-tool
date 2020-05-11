import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  highlight: {
    backgroundColor: theme.palette.grey[400],
  },
  footer: {
    justifyContent: 'flex-end'
  }
}))


export default function CardAnswer({answer}) {

  const classes = useStyles();
  const Highlight = (props) => <span className={classes.highlight}>{props.children}</span>;

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography component="div">
          <Box fontWeight="fontWeightBold">
            {/* {`[${index+1}] ${answer.title}`} */}
            {answer.title}
          </Box>
          <Box fontStyle="italic" mb={2} fontSize="subtitle2.fontSize">
            Authors: {answer.authors}
          </Box>
          <Box component="p" >
            Answer: {answer.sentence_beginning}
            <Highlight>{answer.answer}</Highlight>
            {answer.sentence_ending}
          </Box>
          Publish Time: {answer.publish_time}
          <br/>
          DOI: <a href={answer.DOI ? `https://doi.org/${answer.doi}`: '#'} >https://doi.org/{answer.doi}</a>
        </Typography>
      </CardContent>
      <CardActions className={classes.footer}>
        <Button size="small" color="primary" variant="contained" >See More</Button>
      </CardActions>
    </Card>
    </>
  );
}