import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function Authors({author, index}) {

  React.useEffect(()=>{
    console.log(author)
  },[])

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Typography
        aria-owns={open ? index : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        component="span"
      >
        {author.last+', '+author.first+'. '}
      </Typography>
      <Popover
        id={index}
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
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
          <span style={{fontWeight: "bold"}}>Laboratory:</span>
          {author.affiliation.laboratory}
        </Typography>
        <Typography>
          <span style={{fontWeight: "bold"}}>Institution:</span>
          {author.affiliation.institution}
        </Typography>
        <Typography>
          <span style={{fontWeight: "bold"}}>Location:</span> 
          {author.affiliation.location 
            ? (author.affiliation.location.settlement +", "+ author.affiliation.location.country) 
            : ""}
        </Typography>
      </Popover>
    </>
  );
}
