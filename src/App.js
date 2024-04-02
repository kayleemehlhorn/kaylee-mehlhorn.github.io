import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Import HashRouter
import KMNavbar from './components/KMNavbar';
import CoverLetter from './components/CoverLetter'

// Create a default Material-UI theme
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter> {/* Wrap your entire application with HashRouter */}
        <div>
          <KMNavbar />
          {/* Your other application content goes here */}
          <Routes>
            <Route path="/" element={<CoverLetter />} />
          </Routes>

        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
