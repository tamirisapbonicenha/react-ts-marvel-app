import { createMuiTheme } from '@material-ui/core/styles';

export const customFonts = ['Cabin Condensed', 'Bangers', 'Helvetica', 'Arial', 'cursive', 'sans-serif'].join(
  ',',
);

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const primary = {
  light: '#bb51c9',
  main: '#a10bb5',
  dark: '#6b0a78',
  contrastText: common.white,
};

const secondary = {
  light: '#83ad31',
  main: '#659110',
  dark: '#466b00',
  contrastText: common.white,
};

const theme = createMuiTheme({
  palette: {
    common,
    primary,
    secondary,
  },
  props: {},
  typography: {
    htmlFontSize: 16,
    fontFamily: customFonts,
    fontSize: 14,
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        height: '42px',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'inherit',
      },
    },
    MuiCard: {
      root: {
        borderRadius: 0,
      },
    }
  },
});

export default theme;
