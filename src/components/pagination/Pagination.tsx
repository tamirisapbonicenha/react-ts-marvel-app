import { Box, Grid, Button } from '@material-ui/core';
import useStyles from './Pagination.styles';

function Pagination({ itensPerPage, totalItens, currentPage, paginate }: any) {
  const classes = useStyles();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Button
        size="large"
        disabled={currentPage === pageNumbers[0] ? true : false}
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        onClick={() => paginate(currentPage - 1)}
      >
        {'<<'}
      </Button>
      {pageNumbers.map((number: number) => (
        <Grid item key={number}>
          <Button
            size="large"
            className={`${classes.root} ${
              currentPage === number && classes.active
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </Grid>
      ))}
      <Button
        size="large"
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        onClick={() => paginate(currentPage + 1)}
      >
        {'>>'}
      </Button>
    </Grid>
  );
}

export default Pagination;
