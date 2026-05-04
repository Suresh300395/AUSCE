import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Link,
    TextField,
    InputAdornment,
    GlobalStyles,
    useTheme,
} from '@mui/material';
import {
    Person as PersonIcon,
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
    Phone as PhoneIcon,
} from '@mui/icons-material';
import logo from '../assets/Circle_logo.svg';
import logoGold from '../assets/Circle_logo_gold.svg';
import backgroundSvg from '../assets/background.svg';
import backgroundDarkSvg from '../assets/Background_dark.svg';

export default function Login() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [showPassword, setShowPassword] = useState(false);
    const [view, setView] = useState('login');
    const [recoveryStep, setRecoveryStep] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    // Focus states for label animation
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [mobileFocused, setMobileFocused] = useState(false);
    const [otpFocused, setOtpFocused] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === '5660' && password === 'Aditya@123') {
            navigate('/home');
        } else {
            alert('Invalid Credentials!');
        }
    };

    return (
        <>
            <GlobalStyles styles={{
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: isDark ? '#0A0A0B' : '#FCFBFE',
                    overflow: 'hidden' // Prevent body scroll
                },
                'input:-webkit-autofill': {
                    WebkitBoxShadow: isDark ? '0 0 0 100px #0A0A0B inset !important' : '0 0 0 100px #F0F8FF inset !important',
                    WebkitTextFillColor: isDark ? '#F0F0F2 !important' : '#1A1826 !important',
                    transition: 'background-color 5000s ease-in-out 0s',
                },
                'input:-webkit-autofill:hover': {
                    WebkitBoxShadow: isDark ? '0 0 0 100px #0A0A0B inset !important' : '0 0 0 100px #F0F8FF inset !important',
                },
                'input:-webkit-autofill:focus': {
                    WebkitBoxShadow: isDark ? '0 0 0 100px #0A0A0B inset !important' : '0 0 0 100px #F0F8FF inset !important',
                },
                'input:-webkit-autofill:active': {
                    WebkitBoxShadow: isDark ? '0 0 0 100px #0A0A0B inset !important' : '0 0 0 100px #F0F8FF inset !important',
                }
            }} />
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0D233B" />
                        <stop offset="100%" stopColor="#BE9337" />
                    </linearGradient>
                </defs>
            </svg>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    pt: '25px',
                    backgroundColor: 'background.default',
                    position: 'relative',
                    overflow: 'hidden',
                    px: { xs: 2, sm: 3 },
                }}
            >

                {/* Content Container */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '380px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 0,
                        mb: { xs: 2, sm: 4 },
                        zIndex: 2,
                    }}
                >
                    {/* Logo Area */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 3,
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 120, sm: 140 },
                                height: { xs: 120, sm: 140 },
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: 1.5,
                                overflow: 'hidden'
                            }}
                        >
                             <img 
                                src={isDark ? logoGold : logo} 
                                alt="CampusEye Logo" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain'
                                }} 
                            />
                        </Box>
                        <Typography variant="h4" sx={{ 
                            fontWeight: 900, 
                            fontSize: { xs: '2.2rem', sm: '2.6rem' }, 
                            color: 'primary.main',
                            mb: 0.2
                        }}>
                            Campus Eye
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.85rem' }}>
                            Student Campus Disciplinary System
                        </Typography>
                    </Box>

                    {/* Transition Wrapper */}
                    <Box sx={{ width: '100%', overflow: 'hidden' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '200%',
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: view === 'login' ? 'translateX(0)' : 'translateX(-50%)',
                            }}
                        >
                            {/* --- LOGIN VIEW --- */}
                            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Heading */}
                                <Box sx={{ width: '100%', textAlign: 'center', mb: 2.5 }}>
                                    <Typography variant="h6" sx={{ color: 'text.primary', mb: 0.2, fontSize: '1.2rem' }}>
                                        Welcome Back!
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                        Login to continue
                                    </Typography>
                                </Box>

                                {/* Form Fields */}
                                <Box component="form" sx={{ width: '100%' }}>

                                    {/* Username Field */}
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Employee ID"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        onFocus={() => setUsernameFocused(true)}
                                        onBlur={() => setUsernameFocused(false)}
                                        slotProps={{
                                            label: {
                                                shrink: !!(username || usernameFocused),
                                                sx: {
                                                    left: 'auto',
                                                    right: 30,
                                                    transformOrigin: 'top right',
                                                    '&.Mui-focused, &.MuiFormLabel-filled': {
                                                        transform: 'translate(0, -9px) scale(0.75)',
                                                    }
                                                }
                                            },
                                            input: {
                                                endAdornment: (
                                                    <InputAdornment position="end" sx={{ mr: 0.5 }}>
                                                        <PersonIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                                    </InputAdornment>
                                                ),
                                                sx: {
                                                    fontWeight: 500,
                                                    fontSize: '0.95rem',
                                                    color: 'text.primary',
                                                }
                                            }
                                        }}
                                        sx={{
                                            mb: 2,
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                                                borderRadius: '50px'
                                            }
                                        }}
                                    />

                                    {/* Password Field */}
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setPasswordFocused(true)}
                                        onBlur={() => setPasswordFocused(false)}
                                        slotProps={{
                                            label: {
                                                shrink: !!(password || passwordFocused),
                                                sx: {
                                                    left: 'auto',
                                                    right: 30,
                                                    transformOrigin: 'top right',
                                                    '&.Mui-focused, &.MuiFormLabel-filled': {
                                                        transform: 'translate(0, -9px) scale(0.75)',
                                                    }
                                                }
                                            },
                                            input: {
                                                endAdornment: (
                                                    <InputAdornment position="end" sx={{ mr: 0.5 }}>
                                                        <IconButton
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            edge="end"
                                                            sx={{ color: 'primary.main' }}
                                                        >
                                                            {showPassword ? <LockOpenIcon sx={{ fontSize: 20 }} /> : <LockIcon sx={{ fontSize: 20 }} />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                                sx: {
                                                    fontWeight: 800,
                                                    fontSize: '0.95rem',
                                                    color: 'text.primary',
                                                    letterSpacing: !showPassword ? '2px' : 'normal'
                                                }
                                            }
                                        }}
                                        sx={{
                                            mb: 3,
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                                                borderRadius: '50px'
                                            }
                                        }}
                                    />

                                    {/* Submit Button */}
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        disableElevation
                                        onClick={handleLogin}
                                        sx={{
                                            mb: 2,
                                            background: isDark
                                                ? 'linear-gradient(90deg, #BE9337 0%, #D4AF37 100%)'
                                                : 'linear-gradient(90deg, #0D233B 0%, #1A3A5A 100%)',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            borderRadius: '56px',
                                            py: 1.2,
                                            '&:hover': {
                                                opacity: 0.9
                                            }
                                        }}
                                    >
                                        LOGIN
                                    </Button>
                                </Box>

                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                    <Link
                                        component="button"
                                        onClick={(e) => { e.preventDefault(); setView('otp'); }}
                                        variant="body2"
                                        underline="none"
                                        sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.85rem' }}
                                    >
                                        Forgot Password?
                                    </Link>
                                </Box>
                            </Box>

                            {/* --- RECOVERY VIEW --- */}
                            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Heading */}
                                <Box sx={{ width: '100%', textAlign: 'center', mb: 2.5 }}>
                                    <Typography variant="h6" sx={{ color: 'text.primary', mb: 0.2, fontSize: '1.2rem' }}>
                                        Account Recovery
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                                        {recoveryStep === 1 ? 'Enter mobile number' : 'Enter OTP code'}
                                    </Typography>
                                </Box>

                                {/* Form Fields */}
                                <Box component="form" sx={{ width: '100%' }}>

                                    {/* Isolated Field Slider */}
                                    <Box sx={{ width: '100%', overflow: 'hidden', mb: 1 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '200%',
                                                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                transform: recoveryStep === 1 ? 'translateX(0)' : 'translateX(-50%)',
                                            }}
                                        >
                                            {/* Step 1: Mobile Field */}
                                            <Box sx={{ width: '50%', px: 0.5 }}>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Mobile Number"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    onFocus={() => setMobileFocused(true)}
                                                    onBlur={() => setMobileFocused(false)}
                                                    slotProps={{
                                                        label: {
                                                            shrink: !!(mobile || mobileFocused),
                                                            sx: {
                                                                left: 'auto',
                                                                right: 30,
                                                                transformOrigin: 'top right',
                                                                '&.Mui-focused, &.MuiFormLabel-filled': {
                                                                    transform: 'translate(0, -9px) scale(0.75)',
                                                                }
                                                            }
                                                        },
                                                        input: {
                                                            endAdornment: (
                                                                <InputAdornment position="end" sx={{ mr: 0.5 }}>
                                                                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                            sx: { fontWeight: 500, fontSize: '0.95rem', color: 'text.primary' }
                                                        }
                                                    }}
                                                    sx={{
                                                        mb: 2,
                                                        '& .MuiOutlinedInput-root': {
                                                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                                                            borderRadius: '50px'
                                                        }
                                                    }}
                                                />
                                            </Box>
                                            {/* Step 2: OTP Entry Field */}
                                            <Box sx={{ width: '50%', px: 0.5 }}>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    type="number"
                                                    label="OTP Code"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    onFocus={() => setOtpFocused(true)}
                                                    onBlur={() => setOtpFocused(false)}
                                                    slotProps={{
                                                        label: {
                                                            shrink: !!(otp || otpFocused),
                                                            sx: {
                                                                left: 'auto',
                                                                right: 30,
                                                                transformOrigin: 'top right',
                                                                '&.Mui-focused, &.MuiFormLabel-filled': {
                                                                    transform: 'translate(0, -9px) scale(0.75)',
                                                                }
                                                            }
                                                        },
                                                        input: {
                                                            endAdornment: (
                                                                <InputAdornment position="end" sx={{ mr: 0.5 }}>
                                                                    <LockIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                                                </InputAdornment>
                                                            ),
                                                            sx: { fontWeight: 800, fontSize: '0.95rem', color: 'text.primary', letterSpacing: '4px' }
                                                        }
                                                    }}
                                                    sx={{
                                                        mb: 2,
                                                        '& .MuiOutlinedInput-root': {
                                                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#fff',
                                                            borderRadius: '50px'
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Submit Button */}
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        disableElevation
                                        onClick={(e) => {
                                            if (recoveryStep === 1) setRecoveryStep(2);
                                            else { /* handle verify */ }
                                        }}
                                        sx={{
                                            mb: 2,
                                            background: isDark
                                                ? 'linear-gradient(90deg, #BE9337 0%, #D4AF37 100%)'
                                                : 'linear-gradient(90deg, #0D233B 0%, #1A3A5A 100%)',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            borderRadius: '56px',
                                            py: 1.2,
                                            '&:hover': {
                                                opacity: 0.9
                                            }
                                        }}
                                    >
                                        {recoveryStep === 1 ? 'SEND OTP' : 'VERIFY OTP'}
                                    </Button>
                                </Box>

                                {/* Back Link */}
                                <Link
                                    component="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setView('login');
                                        setTimeout(() => setRecoveryStep(1), 500);
                                    }}
                                    variant="body2"
                                    underline="none"
                                    sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.85rem' }}
                                >
                                    Back to Login
                                </Link>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                {/* Bottom Background Graphic */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '35vh', // Reduced height to fit everything
                        width: '100%',
                        opacity: isDark ? 0.3 : 0.6, // Lower opacity to let content shine
                        pointerEvents: 'none',
                        zIndex: 1,
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
        </>
    );
}
