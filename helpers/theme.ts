import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    background: {
      default: '#1e2236',
      paper: '#171A2C',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
