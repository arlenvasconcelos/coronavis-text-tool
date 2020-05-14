import React, {useState}  from 'react';
// import {Card, Button, Spinner} from 'react-bootstrap';
import {Card, CardActions, CardContent, Typography, Button, Box, CircularProgress, CardHeader} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import components
import PaperModal from './PaperModal';
import Highlight from '../utils/Highlight';

//import service
import api from '../../service/api'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardText : {
    borderTop: "1px solid rgba(0,0,0,.125)",
  },
  highlight: {
    backgroundColor: theme.palette.grey[400],
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

export default function PaperCard(props){

  const classes = useStyles()

  const defaultValue = {
    title: "",
    author: [],
    abstract: "",
    entities: [],
    doi: "",
  }

  const {paper, index, query} = props;
  const [showModal, setShowModal] = useState(false);
  const [paperModal, setPaperModal] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const loadPaperModal = async (id) => {
    try {
      setLoading(true);
      console.log(id);
      const response = await api.get(`/documents/${id}`);
      console.log(response.data)
      setPaperModal(response.data);
      setShowModal(true);
      setLoading(false);
    } catch (err) {
      setPaperModal(defaultValue);
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      <Card className={classes.paper} elevation={1} variant="outlined">
        <CardHeader
          title={"["+index+"] "+paper.title}
          subheader={paper.authors}
        />
        <CardContent >
          <Typography component="div">
            <Box fontWeight="fontWeightBold">
              {"["+index+"] "+paper.title}
            </Box>
            <Box fontStyle="italic" mb={2} fontSize="subtitle2.fontSize">
              {paper.authors}
            </Box>
            <Box component="p" className={classes.cardText}>
              <Highlight text={paper.abstract.slice(0,200)+'...'} terms={query}/>
            </Box>
            Publish Time: {paper.publish_time}
          </Typography>
        </CardContent>
        <CardActions className={classes.footer}>
          <Button 
            size="small" 
            color="primary" 
            variant="contained" 
            onClick={() => loadPaperModal(paper.id)}
            disabled={loading}
          >
            See More
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </Button>

        </CardActions>
      </Card>
      {
        showModal ? (
          <PaperModal
            key={index}
            index={index}
            paper={paperModal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : (<></>)
          /* Modal */
      }
    </>
  )
}