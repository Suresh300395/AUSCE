import React from 'react';
import { 
    Box, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardActionArea,
    useTheme,
    Avatar,
    Chip,
    Link
} from '@mui/material';
import {
    QrCodeScanner as ScanIcon,
    Assessment as ReportIcon,
    ChevronRight as ArrowIcon,
    CalendarMonth as CalendarIcon,
    EventBusy as AbsentIcon,
    ViewStream as BarcodeWatermarkIcon,
    Person as PersonIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
            {/* QUICK ACTIONS SECTION */}
            <Typography 
                variant="overline" 
                sx={{ 
                    fontWeight: 700, 
                    color: 'text.secondary', 
                    letterSpacing: '1px',
                    mb: 2,
                    display: 'block'
                }}
            >
                QUICK ACTIONS
            </Typography>

            {/* Scan Card */}
            <Card 
                sx={{ 
                    mb: 2, 
                    borderRadius: '24px',
                    background: isDark 
                        ? `linear-gradient(135deg, ${theme.palette.primary.main}BF 0%, ${theme.palette.primary.dark}CC 100%)`
                        : `linear-gradient(135deg, ${theme.palette.primary.main}B3 0%, ${theme.palette.primary.dark}CC 100%)`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isDark ? `0 8px 32px ${theme.palette.primary.main}4D` : `0 8px 32px ${theme.palette.primary.main}33`,
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                {/* stylized watermark */}
                <BarcodeWatermarkIcon 
                    sx={{ 
                        position: 'absolute', 
                        right: -10, 
                        top: 10, 
                        fontSize: '100px', 
                        opacity: 0.1,
                        transform: 'rotate(-5deg)'
                    }} 
                />
                <CardActionArea onClick={() => navigate('/scan')} sx={{ p: 1 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                        <Box 
                            sx={{ 
                                p: 1.5, 
                                borderRadius: '14px', 
                                border: '2px solid rgba(255,255,255,0.4)',
                                mr: 3,
                                display: 'flex'
                            }}
                        >
                            <ScanIcon sx={{ fontSize: 32 }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
                                SCAN BARCODE
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: 500 }}>
                                Mark Attendance
                            </Typography>
                        </Box>
                        <ArrowIcon sx={{ opacity: 0.9 }} />
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Report Card */}
            <Card 
                sx={{ 
                    mb: 4, 
                    borderRadius: '24px',
                    background: isDark 
                        ? 'rgba(30, 41, 59, 0.5)' 
                        : 'rgba(225, 237, 255, 0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    color: isDark ? '#fff' : theme.palette.primary.main,
                    boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.3)' : `0 8px 32px ${theme.palette.primary.main}1A`,
                    border: isDark 
                        ? '1px solid rgba(255, 255, 255, 0.08)' 
                        : '1px solid rgba(255, 255, 255, 0.4)',
                }}
            >
                <CardActionArea onClick={() => navigate('/report')} sx={{ p: 1 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                        <Box 
                            sx={{ 
                                p: 1.5, 
                                borderRadius: '14px', 
                                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
                                mr: 3,
                                display: 'flex',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                        >
                            <ReportIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                REPORT
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7, fontWeight: 500 }}>
                                View Attendance Report
                            </Typography>
                        </Box>
                        <ArrowIcon sx={{ opacity: 0.6 }} />
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* SUMMARY SECTION */}
            <Typography 
                variant="overline" 
                sx={{ 
                    fontWeight: 700, 
                    color: 'text.secondary', 
                    letterSpacing: '1px',
                    mb: 2,
                    display: 'block'
                }}
            >
                SUMMARY
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
                {/* Present Card */}
                <Grid size={12}>
                    <Card sx={{ 
                        borderRadius: '24px', 
                        background: isDark 
                            ? 'rgba(22, 22, 24, 0.6)' 
                            : 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.03)',
                        border: isDark 
                            ? '1px solid rgba(255, 255, 255, 0.08)' 
                            : '1px solid rgba(255, 255, 255, 0.3)',
                    }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2.5 }}>
                            <Box sx={{ 
                                p: 1.2, 
                                borderRadius: '12px', 
                                bgcolor: isDark ? `${theme.palette.primary.main}1A` : `${theme.palette.primary.main}1A`, 
                                mr: 2,
                                color: theme.palette.primary.main
                            }}>
                                <CalendarIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.6, fontSize: '0.65rem' }}>
                                    TOTAL SCANNED
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 900, color: theme.palette.primary.main }}>
                                    124
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* RECENT SCANS SECTION */}
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography 
                    variant="overline" 
                    sx={{ 
                        fontWeight: 700, 
                        color: 'text.secondary', 
                        letterSpacing: '1px'
                    }}
                >
                    RECENT SCANS
                </Typography>
                <Link 
                    component="button"
                    onClick={() => navigate('/report')}
                    sx={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                    }}
                >
                    VIEW ALL <ArrowIcon sx={{ fontSize: 14 }} />
                </Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                    { name: 'Harshitha', id: '23091A05B1', dept: 'CSE - III Year', status: 'Beard', time: '09:41 AM' },
                    { name: 'Rahul Kumar', id: '23091A05C2', dept: 'CSE - III Year', status: 'No ID Card', time: '09:39 AM' },
                    { name: 'Sneha Reddy', id: '23091A05D3', dept: 'CSE - III Year', status: 'Uniform', time: '09:38 AM' }
                ].map((scan, index) => (
                    <Card key={index} sx={{ 
                        borderRadius: '20px', 
                        boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.04)',
                        background: isDark 
                            ? 'rgba(30, 41, 59, 0.5)' 
                            : 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: isDark 
                            ? '1px solid rgba(255, 255, 255, 0.08)' 
                            : '1px solid rgba(255, 255, 255, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.08)',
                        }
                    }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', py: '12px !important', px: 2 }}>
                            <Avatar 
                                sx={{ 
                                    bgcolor: isDark ? `${theme.palette.primary.main}1A` : `${theme.palette.primary.main}1A`, 
                                    color: theme.palette.primary.main,
                                    width: 44,
                                    height: 44,
                                    mr: 2
                                }}
                            >
                                <PersonIcon />
                            </Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>
                                    {scan.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    {scan.id} • {scan.dept}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Chip 
                                    label={scan.status} 
                                    size="small"
                                    sx={{ 
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                        height: '22px',
                                        bgcolor: isDark 
                                            ? (scan.status === 'Uniform' ? 'rgba(39, 174, 96, 0.2)' : 'rgba(235, 87, 87, 0.2)')
                                            : (scan.status === 'Uniform' ? '#E1F9EB' : '#FFEBEB'),
                                        color: scan.status === 'Uniform' ? '#27AE60' : '#EB5757',
                                        borderRadius: '6px'
                                    }}
                                />
                                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', minWidth: '65px', textAlign: 'right' }}>
                                    {scan.time}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Home;
