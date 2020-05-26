import React from 'react'
import { Box, Typography } from '@material-ui/core';

export default function Footer () {
  return (
    <footer>
      <Box textAlign="center" marginY={3}>
        <Typography
          component="p" 
          variant="subtitle2"
        >
          Source:
            <a
              href="https://github.com/castorini/anserini/blob/master/docs/experiments-cord19.md#pre-built-indexes-all-versions"
            >
              CORD-19 Dataset | Full-Text Anserini Pre-Built Index: 2020-05-19
            </a>
        </Typography>
      </Box>
    </footer>
  )
}