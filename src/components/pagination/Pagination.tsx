import { Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharacters,
  charactersSelector,
} from '../../state/charactersSlice';
import useStyles from './Pagination.styles';

function Pagination(): JSX.Element {
  const classes = useStyles();
  const {
    pagination: { limit, total, offset },
  } = useSelector(charactersSelector);
  const dispatch = useDispatch();

  const page = offset === 0 ? 1 : offset / limit;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    const number = pageNumber === 1 ? 0 : pageNumber;
    dispatch(fetchCharacters({ params: { offset: number * limit } }));
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Button
        size="large"
        disabled={page === pageNumbers[0] ? true : false}
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        onClick={() => paginate(page - 1)}
      >
        {'<<'}
      </Button>
      {pageNumbers.map((number: number) => (
        <Grid item key={number}>
          <Button
            size="large"
            className={`${classes.root} ${page === number && classes.active}`}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </Grid>
      ))}
      <Button
        size="large"
        disabled={page === pageNumbers[pageNumbers.length - 1] ? true : false}
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        onClick={() => paginate(page + 1)}
      >
        {'>>'}
      </Button>
    </Grid>
  );
}

export default Pagination;
