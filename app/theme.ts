'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#c0bfbf',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 12,
  },
});

export default theme;
