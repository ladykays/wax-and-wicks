import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:{
      main: "#636D5C"
    },
  },

  typography:{
    h1:{
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2:{
      fontSize: "2.5rem",
      fontWeight: 400,
    },
    h3:{
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4:{
      fontSize: "1.25rem",
      fontWeight: 300,
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
