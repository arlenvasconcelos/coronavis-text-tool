import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography} from '@material-ui/core';

export default function LinePainel({question, index}) {
  return (
    <>
      <Box display="flex" justifyContent="space-between" fontSize="body2.fontSize">
        <Box>
          <Link to={`/tools/questions/${question.qid}/answers`}>
              {`[${index+1}] - ${question.question}`}
          </Link>
        </Box>
        <Box>
          {`${question.total_answers} results`}
        </Box>
      </Box>
      <Box ml={2} component="p" fontSize="body2.fontSize">
        {question.summary}
      </Box>
    </>
  )
}