import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#035973',
      light: '#dde1e3',
    },
    secondary: {
      main: '#8d6e63',
    },
    success: {
      main: '#2e7d32',
    },
    error: {
      main: '#d32f2f',
    },
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xxs: 768,
      xs: 1024,
      sm: 1280,
      md: 1440,
      lg: 1600,
      xl: 1920,
      xxl: 2560,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '18px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        body1: {
          // Some CSS
          fontSize: '18px',
        },
        h3: {
          fontFamily: 'Noto Sans',
          fontWeight: '600',
          color: '#102024',
        },
        h4: { fontFamily: 'Noto Sans' },
      },
    },
  },
});

export default theme;
