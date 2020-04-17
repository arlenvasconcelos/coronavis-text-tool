import React from 'react';
import PaperCard from '../paper/PaperCard';

export default function Papers (props) {
  
  const {papers, query} = props;
  return (
    <>
      {papers ? (
        papers.map((paper, index) => (
          <PaperCard key={index} index={index+1} paper={paper} query={query}/>
        ))
      ) : (
        <></>
      )}
    </>
  )
}