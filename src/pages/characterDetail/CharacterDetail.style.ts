import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  contentChar: {
    textAlign: 'center',
  },
  imageChar: {
    margin: '16px auto 0',
    maxWidth: 500,
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
    }
  },
  divider: {
    background: 'black',
    height: '3px',
    maxWidth: '640px',
    margin: '0 auto',
    width: '100%',
  },
  contentSeries: {
    textAlign: 'center',
  },
  imageSerie: {
    maxHeight: '400px',

    '& img': {
      display: 'block',
      margin: '0 auto',
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    }
  },
  form: {
    width: '300px',
    padding: '16px 8px',
  },
  textArea: {
    '& .MuiOutlinedInput-root': {
      height: 'auto',
    }
  }
}));
