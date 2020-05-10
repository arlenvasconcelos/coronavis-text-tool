import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function TitleCard(props) {
  return (
    <Typography variant="h6" className>
      {props.children}
    </Typography>
  );
}

TitleCard.propTypes = {
  children: PropTypes.node,
};
