import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.primary.dark}`,
    maxWidth: 345,
  },
  cardActions: {
    justifyContent: 'flex-end',
  }
}));
