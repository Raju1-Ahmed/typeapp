import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'
import { Home } from './Components/Home/Home';
// import { TextSliding } from './Components/Home/TextSliding';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Home/Navbar';
import { Footer } from './Components/Footer/Footer';
import { UseCase } from './Components/Footer/UseCases/UseCase';
import { Blogidea } from './Components/Footer/UseCases/Blogidea';



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FF8F00',
        main: '#FF6F00',
        dark: '#ff6f00',
        contrastText: '#6e7eb5',
      },
      text: {
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/blogIdel" element={<Blogidea />} />
      </Routes>
      <Footer />
    </ThemeProvider>

  );
}

export default App;
