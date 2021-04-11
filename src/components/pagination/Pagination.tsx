import { Grid } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import useStyles from './Pagination.styles';

type PaginationProps = {
  pageCount: number;
  handlePageClick: (e: any) => void;
  forcePage: number;
};

function Pagination({
  pageCount,
  forcePage,
  handlePageClick,
}: PaginationProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        disableInitialCallback={true}
        pageCount={pageCount}
        forcePage={forcePage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={classes.pagination}
        pageClassName={classes.item}
        activeClassName={classes.active}
        disabledClassName={classes.disabled}
      />
    </Grid>
  );
}

export default Pagination;
