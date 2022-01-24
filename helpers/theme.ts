import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// We need to Augment (extends the 'Theme' interface to access parameter)
// This has to be mad 'globally' since many module will use 'Theme' interface
declare module '@mui/material/styles' {
  interface ThemeExtension {
    custom: {
      backgrounds: {
        b1: string;
        b2: string;
      };
      foregrounds: {
        f1: string;
      };
    };
  }
  interface Theme extends ThemeExtension {}
  interface ThemeOptions extends ThemeExtension {}
}

let themeProps: ThemeOptions = {
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontSize: 14,
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
    backgrounds: {
      b1: 'rgba(0,0,0,0.5)',
      b2: 'rgba(0,255,00,0.1)',
    },

    foregrounds: {
      f1: 'rgba(200,200,200,1)',
    },
  },
};

let theme = createTheme(themeProps);
theme = responsiveFontSizes(theme);

export default theme;
