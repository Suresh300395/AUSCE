import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
    Paper, 
    BottomNavigation, 
    BottomNavigationAction, 
    Box,
    useTheme
} from '@mui/material';
import {
    HomeRounded as HomeIcon,
    QrCodeScanner as ScanIcon,
    AssessmentOutlined as ReportIcon
} from '@mui/icons-material';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    
    // Mapping paths to index for active state
    const getActiveValue = () => {
        const path = location.pathname;
        if (path === '/home') return 0;
        if (path === '/scan') return 1;
        if (path === '/report') return 2;
        return 0;
    };

    const value = getActiveValue();

    return (
        <Paper 
            sx={{ 
                position: 'fixed', 
                bottom: 20, 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '400px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: theme.palette.mode === 'light' 
                    ? '0 8px 32px rgba(0,0,0,0.08)'
                    : '0 8px 32px rgba(0,0,0,0.4)',
                zIndex: 1000,
                background: theme.palette.mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.85)' 
                    : 'rgba(22, 22, 24, 0.85)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
                transition: 'all 0.3s ease'
            }} 
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    if (newValue === 0) navigate('/home');
                    if (newValue === 1) navigate('/scan');
                    if (newValue === 2) navigate('/report');
                }}
                sx={{
                    height: 70,
                    bgcolor: 'transparent',
                    '& .MuiBottomNavigationAction-root': {
                        color: theme.palette.text.secondary,
                        transition: 'all 0.3s ease',
                    },
                    '& .Mui-selected': {
                        color: theme.palette.primary.main + ' !important',
                        '& .MuiBottomNavigationAction-label': {
                            fontWeight: 700,
                            fontSize: '0.85rem'
                        }
                    },
                    '& .MuiBottomNavigationAction-label': {
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        mt: 0.5
                    }
                }}
            >
                <BottomNavigationAction 
                    label="Home" 
                    icon={<HomeIcon sx={{ fontSize: 26 }} />} 
                />
                <BottomNavigationAction 
                    label="Scan" 
                    icon={<ScanIcon sx={{ fontSize: 26 }} />} 
                />
                <BottomNavigationAction 
                    label="Report" 
                    icon={<ReportIcon sx={{ fontSize: 26 }} />} 
                />
            </BottomNavigation>
        </Paper>
    );
};

export default Navbar;
