import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    fontSize: '1.1125rem',
    listStyle: 'none',
    outline: 'none',
    padding: 0,
    '& a': {
      outline: 'none',
      cursor: 'pointer',
    }
  },
  item: {
    minWidth: 'inherit',
    margin: '0 14px',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
    }
  },
  active: {
    '& a': {
      color: theme.palette.secondary.main,
      fontWeight: 700,
    }
  },
  disabled: {
    '& a': {
      color: theme.palette.text.disabled,
      opacity: 0.4,
      cursor: 'inherit',
    }
  },
}));

