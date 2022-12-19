import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'
import { Home } from './Components/Home/Home';
// import { TextSliding } from './Components/Home/TextSliding';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FF8F00',
        main: '#FF6F00',
        dark: 'black',
        contrastText: '#6e7eb5',
      },
        text:{
          primary: "#7e5658",
          secondary: "#301427"
        },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      {/* <TextSliding/> */}
    </ThemeProvider>
  );
}

export default App;
