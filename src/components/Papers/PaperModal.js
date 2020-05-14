import React, {useState, useEffect, useRef} from 'react';
// import {Overlay, Popover} from 'react-bootstrap';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import {makeStyles} from '@material-ui/core/styles';


import Highlight from '../utils/Highlight'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function PaperModal(props){

  const {index, paper, showModal, setShowModal} = props;

  const classes = useStyles();

  const [terms, setTerms] = useState([]);
  const [types, setTypes] = useState([]);
  const [palette, setPalette] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    console.log(event.currentTarget, event);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  const createPalette = (types) => {

    const p = {};    
    var hex = 'FEDCBA9876543210';

    const defaultColours = [
      '#8dd3c7',
      '#ffffb3',
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
      '#ccebc5',
      '#ffed6f',
    ]
  
    //deleting repeated types
    const types_norepeated = [...new Set(types)];

    for (var i = 0; i < types_norepeated.length; i++ ) {
      if (i < 12){
        p[types_norepeated[i]] = defaultColours[i];
      }
      else {
        let colour = "";
        for (var j = 0; j < 6; j++ ) {
          // get random number
          colour += hex[Math.floor(Math.random() * 10)];//times ten for light colors
        }
        p[types_norepeated[i]] = colour;
      }
    }
    return p;
  }

  useEffect(()=>{
    setTerms(paper.entities.map(value => value.term));
    setTypes(paper.entities.map(value => value.type));
  },[paper])

  useEffect(()=>{
    setPalette(createPalette(types));
  },[types])

  return (    
    <>
      <Dialog key={index} onClose={() => setShowModal(false)} aria-labelledby="customized-dialog-title" open={showModal}>
        <DialogTitle id="customized-dialog-title" onClose={() => setShowModal(false)}>
          <Typography component="div">
            <Box fontWeight="fontWeightBold">
              {"["+index+"] "+paper.title}
            </Box>
            <Box fontStyle="italic" mb={2} fontSize="subtitle2.fontSize">
              Authors: 
              {paper.author.map( (author, index) => 
                <> 
                  <Typography
                    key={'typ'+index}
                    aria-owns={openPopover ? author.first + index : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    component="span"
                  >
                    {author.last+', '+author.first+'. '}
                  </Typography>
                  <Popover
                    key={'pop'+index}
                    id={author.first + index}
                    className={classes.popover}
                    classes={{
                      paper: classes.paper,
                    }}
                    open={openPopover}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography>
                      <span style={{fontWeight: "bold"}}>Laboratory:</span> {author.affiliation.institution}
                    </Typography>
                    <Typography>
                      <span style={{fontWeight: "bold"}}>Institution:</span> {author.affiliation.institution}
                    </Typography>
                    <Typography>
                      <span style={{fontWeight: "bold"}}>Location:</span> 
                      {author.affiliation.location ? (author.affiliation.location.settlement +", "+ author.affiliation.location.country) : ""}
                    </Typography>
                  </Popover>
                </>
              )}
            </Box>
            <p className="modal__subtitle" >
              DOI: 
              <a href={'https://doi.org/' + paper.doi} target="_blank">
                {'https://doi.org/' + paper.doi}
              </a>
              <br/>
              Publish time: {paper.publish_time} 
            </p>
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography component="div">
            <Box component="p" >
              <span>Abstract: </span>
              {
                (paper.abstract) ? (
                  <p>
                    <Highlight 
                      text={paper.abstract} 
                      terms={terms} 
                      types={types} 
                      palette={palette}
                    />
                  </p>
                ) : (
                  <p>There is no abstract</p>
                )
              }
              {/* Show entities with its marker (background color) */}
              <p>
                {
                  Object.entries(palette).map((value, index) => 
                    <span
                      className="paper__words-highlight"
                      key={index}
                      style={{
                        fontSize:'0.7em',
                        backgroundColor: `${value[1] || 'yellow'}`, 
                      }}
                    >
                      {value[0]}
                    </span>
                  )
                }
              </p>
            </Box>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            autoFocus 
            onClick={() => setShowModal(false)} 
            size="small" 
            color="primary" 
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
  
}