import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";

import PaperCard from "../Papers/PaperCard";
import ErrorCustom from "../utils/ErrorCustom";

export default function Papers(props) {
  const { papers, query } = props;

  const defaultValue = { page: 1 };

  const [papersFilter, setPapersFilter] = useState(defaultValue);
  const perPage = 6;

  //If update the papers, update the pagination to first page
  useEffect(() => {
    if (papers) setPapersFilter(defaultValue);
  }, [papers]);

  if (!papers) {
    return <ErrorCustom text="Cannot find this query" />;
  }

  return (
    <>
      <Box>
        {papers.map((paper, index) => (
          <PaperCard
            key={index + 1 + (papersFilter.page - 1) * perPage}
            index={index + 1 + (papersFilter.page - 1) * perPage}
            paper={paper}
            query={query}
          />
        ))}
      </Box>
    </>
  );
}
