import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    Box,
    useTheme,
    TextField,
    Button,
} from '@mui/material';
import {
    Logout,
    DarkMode,
    LightMode,
    LockReset,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = ({ onThemeToggle, currentMode }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [view, setView] = useState('profile');
    const [passwords, setPasswords] = useState({ old: '', new: '', confirm: '' });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setView('profile');
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        navigate('/login');
    };

    const handleChangePassword = () => {
        alert('Password Changed Successfully!');
        setView('profile');
        handleClose();
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(10, 10, 11, 0.7)',
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#E5E7EB' : '#27272A'}`,
                color: 'text.primary',
                zIndex: theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
                {/* Logo Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.5px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.4rem'
                        }}
                    >
                        <Box component="span" sx={{ color: 'text.primary' }}>Campus  Eye</Box>
                        <Box
                            component="span"
                            sx={{
                                background: isDark
                                    ? 'linear-gradient(90deg, #BE9337 0%, #F0F0F2 100%)'
                                    : 'linear-gradient(90deg, #BE9337 0%, #D4AF37 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >

                        </Box>
                    </Typography>
                </Box>

                {/* Profile Section */}
                <Box>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{
                            p: 0.5,
                            border: `2px solid ${theme.palette.primary.main}`,
                            transition: 'all 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: `0 0 12px ${theme.palette.primary.main}40`
                            }
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 38,
                                height: 38,
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                fontWeight: 700
                            }}
                        >
                            A
                        </Avatar>
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
                                mt: 1.5,
                                borderRadius: '16px',
                                minWidth: '240px',
                                background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(22, 22, 24, 0.95)',
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${theme.palette.mode === 'light' ? '#F3F4F6' : '#27272A'}`,
                                transition: 'all 0.3s ease-in-out',
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                            },
                        }
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {view === 'profile' ? (
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ px: 2, py: 1.5 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                    Aditya Kumar
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    ID: 5660 | Admin
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 1 }} />
                            <MenuItem onClick={onThemeToggle}>
                                <ListItemIcon>
                                    {currentMode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                                </ListItemIcon>
                                {currentMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                            </MenuItem>
                            <MenuItem onClick={(e) => { e.stopPropagation(); setView('password'); }}>
                                <ListItemIcon>
                                    <LockReset fontSize="small" />
                                </ListItemIcon>
                                Change Password
                            </MenuItem>
                            <Divider sx={{ my: 1 }} />
                            <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                                <ListItemIcon>
                                    <Logout fontSize="small" sx={{ color: 'error.main' }} />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Box>
                    ) : (
                        <Box sx={{ p: 2, width: '280px' }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small" onClick={(e) => { e.stopPropagation(); setView('profile'); }} sx={{ ml: -1 }}>
                                    <LockReset fontSize="small" sx={{ transform: 'rotate(180deg)' }} />
                                </IconButton>
                                Change Password
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <TextField
                                    size="small"
                                    type="password"
                                    label="Old Password"
                                    fullWidth
                                    variant="outlined"
                                    value={passwords.old}
                                    onChange={(e) => setPasswords({ ...passwords, old: e.target.value })}
                                />
                                <TextField
                                    size="small"
                                    type="password"
                                    label="New Password"
                                    fullWidth
                                    variant="outlined"
                                    value={passwords.new}
                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                />
                                <TextField
                                    size="small"
                                    type="password"
                                    label="Confirm Password"
                                    fullWidth
                                    variant="outlined"
                                    value={passwords.confirm}
                                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={handleChangePassword}
                                    sx={{ mt: 1, borderRadius: '56px', textTransform: 'none', fontWeight: 600 }}
                                >
                                    Update Password
                                </Button>
                                <Button
                                    variant="text"
                                    fullWidth
                                    size="small"
                                    onClick={(e) => { e.stopPropagation(); setView('profile'); }}
                                    sx={{ textTransform: 'none', color: 'text.secondary' }}
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
