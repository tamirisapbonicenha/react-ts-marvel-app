import { makeStyles } from '@material-ui/core/styles'
import marvelCover from '../../images/marvel-universe-cover.png';

export default makeStyles(() => ({
  cover: {
    backgroundImage: `url(${marvelCover})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '350px',
    width: '100%',
  },
  title: {
    background: 'black',
    color: 'white',
    fontFamily: 'Bangers',
    letterSpacing: '1px',
    padding: '5px 10px',
  },
  grid: {
    height: '350px',
  },
}));
