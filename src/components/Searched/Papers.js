import React, {useState, useEffect} from 'react';
import Pagination from 'react-js-pagination';
import {Box, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//import components
import PaperCard from '../Papers/PaperCard';

export default function Papers (props) {

  // const classes = useStyles();

  const {papers, query} = props;

  const defaultValue = { page: 1 };

  const [papersFilter, setPapersFilter] = useState(defaultValue);
  const perPage = 6;

  const handlePapersPageChange = (page) => {
    setPapersFilter({ ...papersFilter, page });
  };
 
  //If update the papers, update the pagination to first page  
  useEffect(() => {
    if (papers)
      setPapersFilter(defaultValue)
  }, [papers])

  if (!papers){
    return <></>
  }

  return (
    <>
      <Box>
        {papers.slice(perPage * (papersFilter.page - 1),
        perPage * (papersFilter.page)).map((paper, index) => (
          <PaperCard 
            key={(index + 1 + ((papersFilter.page - 1)*perPage))} 
            index={index + 1 + ((papersFilter.page - 1)*perPage)} 
            paper={paper} 
            query={query}
          />
        ))}
        <Pagination
          activePage={papersFilter.page}
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={perPage}
          totalItemsCount={papers.length}
          onChange={page => handlePapersPageChange(page)}
          innerClass={'papers__pagination'}
        />
      </Box>
    </>
  )
}