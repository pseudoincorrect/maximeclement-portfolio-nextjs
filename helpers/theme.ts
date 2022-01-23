import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// We need to Augment (extends the 'Theme' interface to access parameter)
// This has to be mad 'globally' since many module will use 'Theme' interface
declare module '@mui/material/styles' {
  interface ThemeExtension {
    custom: {
      background1: string;
    };
  }
  interface Theme extends ThemeExtension {}
  interface ThemeOptions extends ThemeExtension {}
}

let themeProps: ThemeOptions = {
  typography: {
    fontFamily: `"fira-sans", "Arial", sans-serif`,
    fontSize: 13,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
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
      main: '#6fd1c8',
    },
    error: {
      main: red.A400,
    },
  },
  custom: {
    background1: 'rgba(0,0,0,0.5)',
  },
};

let theme = createTheme(themeProps);
theme = responsiveFontSizes(theme);

export default theme;
