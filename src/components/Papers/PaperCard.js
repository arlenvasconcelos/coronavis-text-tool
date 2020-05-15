import React, {useState}  from 'react';
import {Card, CardActions, CardContent, Typography, Button, Box, CircularProgress, CardHeader, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import components
import PaperModal from './PaperModal';
import Highlight from '../utils/Highlight';
import CustomCard from '../utils/CustomCard';

//import service
import api from '../../service/api'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
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
      <CustomCard 
        title={"["+index+"] "+paper.title}
        authors={paper.authors}
        body={<Highlight text={paper.abstract.slice(0,200)+'...'} terms={query}/>}
        secondarybody={`Publish Time: ${paper.publish_time}`}
        button="See more"
        buttonAction={() => loadPaperModal(paper.id)}
        loading={loading}
      />
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