import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
//import api
import api from "../../service/api";



export default function Footer() {

  const [releaseDate, setReleaseDate] = useState([]);
  

  useEffect(() => {
    const getReleaseDate = async () => {
      try {
        const response = await api.get(`/release-date`);
        setReleaseDate(response.data.data.date);
      } catch (err) {
        console.log(err);
      }
    };
    getReleaseDate();
  }, []);


  return (
    <footer>
      <Box textAlign="center" paddingY={3}>
        <Typography component="p" variant="subtitle2">
          Source:
          <a href="https://ai2-semanticscholar-cord-19.s3-us-west-2.amazonaws.com/historical_releases.html">
            CORD-19 Dataset | Full-Text Anserini Pre-Built Index: {releaseDate}
          </a>
        </Typography>
      </Box>
    </footer>
  );
}
