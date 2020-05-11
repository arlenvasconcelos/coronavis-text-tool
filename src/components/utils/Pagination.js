import React from 'react';
import { Link, Route} from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export default function PaginationLink({lastPage}) {
  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 10);
        return (
          <Pagination
            page={page}
            count={22}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/tools/questions/23/answers${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        );
      }}
    </Route>
  );
}