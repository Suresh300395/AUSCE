import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Login from './Components/Login';
import Home from './Components/Pages/Home';
import Scanner from './Components/Pages/Scanner';
import Reports from './Components/Pages/Reports';
import MainLayout from './Components/Layouts/Mainlayout';
import getTheme from './theme';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<MainLayout onThemeToggle={toggleTheme} currentMode={mode}><Home /></MainLayout>} />
          <Route path="/scan" element={<MainLayout onThemeToggle={toggleTheme} currentMode={mode}><Scanner /></MainLayout>} />
          <Route path="/report" element={<MainLayout onThemeToggle={toggleTheme} currentMode={mode}><Reports /></MainLayout>} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
