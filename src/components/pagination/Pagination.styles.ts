import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    minWidth: 'inherit',
    margin: '0 8px',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
    }
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
  disabled: {
    color: theme.palette.grey[50],
  }
}));

