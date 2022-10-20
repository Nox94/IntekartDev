import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#abafb1',
      light: '#BBBFC0',
      dark: '#777A7B',
    },
    secondary: {
      main: '#80deea',
      light: '#99E4EE',
      dark: '#599BA3',
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
          fontSize: '18px',
        },
        h1: { color: '#102024' },
        h3: {
          fontFamily: 'Noto Sans',
          fontWeight: '600',
          color: '#102024',
        },
        h4: { fontFamily: 'Noto Sans' },
        subtitle1: {
          color: '#102024',
        },
      },
    },
  },
});

export default theme;
