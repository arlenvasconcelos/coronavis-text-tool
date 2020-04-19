import React, {useState, useEffect} from 'react';
import PaperCard from '../paper/PaperCard';
import Pagination from 'react-js-pagination';

export default function Papers (props) {

  const {papers, query} = props;

  const defaultValue = { page: 1 };

  const [papersFilter, setPapersFilter] = useState(defaultValue);
  const perPage = 5;

  const handlePapersPageChange = (page) => {
    setPapersFilter({ ...papersFilter, page });
  };
 
  useEffect(() => {
    setPapersFilter(defaultValue)
  }, [papers])

  return (
    <>
      <div className="home__papers">
        {papers ? (
          papers.slice(perPage * (papersFilter.page - 1),
          perPage * (papersFilter.page)).map((paper, index) => (
            <PaperCard 
              key={(index + 1 + ((papersFilter.page - 1)*perPage))} 
              index={index + 1 + ((papersFilter.page - 1)*perPage)} 
              paper={paper} 
              query={query}
            />
          ))
        ) : (
          <></>
        )}
        <Pagination
          activePage={papersFilter.page}
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={perPage}
          totalItemsCount={papers.length}
          onChange={page => handlePapersPageChange(page)}
          disabledClass
          innerClass={'papers__pagination'}
        />
      </div>
    </>
  )
}