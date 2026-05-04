import React from 'react';
import { Box, useTheme } from '@mui/material';
import Header from './Header';
import Navbar from './Navbar';
import backgroundSvg from '../../assets/background.svg';
import backgroundDarkSvg from '../../assets/Background_dark.svg';

const MainLayout = ({ children, onThemeToggle, currentMode }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box 
      sx={{ 
        pt: 8, // Padding top for fixed Header
        pb: 12, // Padding bottom for bottom Navbar
        minHeight: '100vh',
        backgroundColor: 'background.default',
        transition: 'background-color 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top Header */}
      <Header onThemeToggle={onThemeToggle} currentMode={currentMode} />
      
      {/* Dynamic Content Area */}
      <Box 
        component="main" 
        sx={{ 
            flexGrow: 1,
            px: { xs: 2, sm: 4 }, // Responsive horizontal padding
            py: 3, 
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
        }}
      >
        {children}
      </Box>

      {/* Bottom Navigation */}
      <Navbar />

      {/* Bottom Background Graphic */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45vh',
          width: '100%',
          opacity: isDark ? 0.4 : 0.75, // Lower opacity for dark mode to keep it subtle
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Box
          component="img"
          src={isDark ? backgroundDarkSvg : backgroundSvg}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom center'
          }}
        />
      </Box>
    </Box>
  );
};

export default MainLayout;
