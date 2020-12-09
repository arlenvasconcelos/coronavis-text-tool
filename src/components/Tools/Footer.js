import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <footer>
      <Box textAlign="center" paddingY={3}>
        <Typography component="p" variant="subtitle2">
          Source:
          <a href="https://ai2-semanticscholar-cord-19.s3-us-west-2.amazonaws.com/historical_releases.html">
            CORD-19 Dataset | Full-Text Anserini Pre-Built Index: 2020-11-29
          </a>
        </Typography>
      </Box>
    </footer>
  );
}
