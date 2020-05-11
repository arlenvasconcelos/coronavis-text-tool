import React from 'react';
import { Link, Route} from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export default function PaginationLink({lastPage, path}) {
  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 10);
        return (
          <Pagination
            page={page}
            count={lastPage}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`${path}${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        );
      }}
    </Route>
  );
}