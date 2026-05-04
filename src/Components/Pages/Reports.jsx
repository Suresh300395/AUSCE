import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Card, 
    CardContent, 
    Avatar, 
    Chip, 
    useTheme,
    TextField,
    InputAdornment,
    Dialog,
    IconButton,
    Slide,
    Divider,
    Grid,
    CardActionArea
} from '@mui/material';
import { 
    Person as PersonIcon,
    Search as SearchIcon,
    Close as CloseIcon,
    CalendarMonth as CalendarIcon,
    AccessTime as TimeIcon,
    School as SchoolIcon,
    AssignmentInd as RollIcon,
    Gavel as RuleIcon,
    LocationOn as LocationIcon,
    HistoryEdu as RemarksIcon
} from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Reports = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedReport, setSelectedReport] = useState(null);
    const [open, setOpen] = useState(false);

    const reports = [
        { name: 'Varikooti Siva Surya', id: '21A91A0563', dept: 'CSE - III Year', status: 'Beard', time: '09:41 AM', date: '18 Apr 2026', location: 'Block A, Floor 2', faculty: 'Dr. Ramesh Babu', comments: 'Observed during morning check.' },
        { name: 'Rahul Kumar', id: '23091A05C2', dept: 'CSE - III Year', status: 'No ID Card', time: '09:39 AM', date: '17 Apr 2026', location: 'Main Gate', faculty: 'Mr. Satish', comments: 'Forgot ID card at home.' },
        { name: 'Sneha Reddy', id: '23091A05D3', dept: 'CSE - III Year', status: 'Uniform', time: '09:38 AM', date: '16 Apr 2026', location: 'Cafeteria', faculty: 'Ms. Lakshmi', comments: 'Proper uniform maintained.' },
        { name: 'John Doe', id: '23091A05E4', dept: 'ECE - II Year', status: 'Late', time: '08:45 AM', date: '15 Apr 2026', location: 'Gate 2', faculty: 'Security Head', comments: '15 minutes late to campus.' },
        { name: 'Manoj Kumar', id: '23091A05F5', dept: 'IT - III Year', status: 'Uniform', time: '09:30 AM', date: '14 Apr 2026', location: 'Block B', faculty: 'Mr. Prasad', comments: 'Well presented.' },
    ];

    const filteredReports = reports.filter(report => 
        report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.dept.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpenDetail = (report) => {
        setSelectedReport(report);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 2 }}>
            <Box sx={{ mt: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: isDark ? '#fff' : '#1A1826', mb: 0.5, fontSize: '1.65rem' }}>
                    Disciplinary Reports
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontWeight: 500 }}>
                    Detailed history of recorded violations and scans.
                </Typography>

                {/* Glassmorphism Search Bar */}
                <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder="Search by name, ID, or status..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: theme.palette.primary.main }} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '15px',
                                background: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)',
                                },
                                '& fieldset': { border: 'none' },
                                fontWeight: 500,
                                mb: 3,
                                height: '40px',
                                fontSize: '0.9rem'
                            }
                        }
                    }}
                />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {filteredReports.length > 0 ? (
                        filteredReports.map((report, index) => (
                            <Card key={index} sx={{ 
                                borderRadius: '24px', 
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
                                <CardActionArea onClick={() => handleOpenDetail(report)} sx={{ borderRadius: '24px' }}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', py: '16px !important', px: 2.5 }}>
                                        <Avatar 
                                            sx={{ 
                                                bgcolor: isDark ? `${theme.palette.primary.main}1A` : `${theme.palette.primary.main}1A`, 
                                                color: theme.palette.primary.main,
                                                width: 48,
                                                height: 48,
                                                mr: 2.5
                                            }}
                                        >
                                            <PersonIcon />
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: isDark ? '#fff' : '#1A1826' }}>
                                                {report.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                                                {report.id} • {report.dept}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
                                                {report.date}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                                            <Chip 
                                                label={report.status} 
                                                size="small"
                                                sx={{ 
                                                    fontWeight: 700,
                                                    fontSize: '0.65rem',
                                                    height: '24px',
                                                    bgcolor: report.status === 'Uniform' ? 'rgba(39, 174, 96, 0.1)' : 'rgba(235, 87, 87, 0.1)',
                                                    color: report.status === 'Uniform' ? '#27AE60' : '#EB5757',
                                                    borderRadius: '8px',
                                                    px: 0.5
                                                }}
                                            />
                                            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '0.7rem' }}>
                                                {report.time}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 8, opacity: 0.6 }}>
                            <Typography variant="body1">No reports found matching your search.</Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Detailed View Dialog */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                PaperProps={{
                    sx: {
                        background: isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                    }
                }}
            >
                <Box sx={{ p: 3, position: 'relative', minHeight: '100vh' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 20, top: 20, bgcolor: 'rgba(0,0,0,0.05)' }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {selectedReport && (
                        <Box sx={{ mt: 6 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                                <Avatar 
                                    sx={{ 
                                        width: 100, 
                                        height: 100, 
                                        bgcolor: isDark ? `${theme.palette.primary.main}1A` : `${theme.palette.primary.main}1A`, 
                                        color: theme.palette.primary.main, 
                                        mb: 2,
                                        boxShadow: `0 8px 24px ${theme.palette.primary.main}33`
                                    }}
                                >
                                    <PersonIcon sx={{ fontSize: 60 }} />
                                </Avatar>
                                <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5 }}>
                                    {selectedReport.name}
                                </Typography>
                                <Chip 
                                    label={selectedReport.status} 
                                    sx={{ 
                                        bgcolor: selectedReport.status === 'Uniform' ? '#E1F9EB' : '#FFEBEB',
                                        color: selectedReport.status === 'Uniform' ? '#27AE60' : '#EB5757',
                                        fontWeight: 800,
                                        borderRadius: '10px'
                                    }} 
                                />
                            </Box>

                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <DetailItem icon={<RollIcon />} label="Roll Number" value={selectedReport.id} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DetailItem icon={<SchoolIcon />} label="Department" value={selectedReport.dept} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DetailItem icon={<CalendarIcon />} label="Date" value={selectedReport.date} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DetailItem icon={<TimeIcon />} label="Time" value={selectedReport.time} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ my: 1, opacity: 0.5 }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <DetailItem icon={<LocationIcon />} label="Location" value={selectedReport.location} />
                                </Grid>
                                <Grid item xs={12}>
                                    <DetailItem icon={<RuleIcon />} label="Reporting Faculty" value={selectedReport.faculty} />
                                </Grid>
                                <Grid item xs={12}>
                                    <DetailItem icon={<RemarksIcon />} label="Remarks" value={selectedReport.comments} />
                                </Grid>
                            </Grid>


                        </Box>
                    )}
                </Box>
            </Dialog>
        </Container>
    );
};

const DetailItem = ({ icon, label, value }) => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
                p: 1.2, 
                borderRadius: '12px', 
                bgcolor: `${theme.palette.primary.main}1A`, 
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {React.cloneElement(icon, { sx: { fontSize: 22 } })}
            </Box>
            <Box>
                <Typography variant="caption" sx={{ display: 'block', fontWeight: 800, opacity: 0.5, letterSpacing: '0.8px', lineHeight: 1.2, mb: 0.2 }}>
                    {label.toUpperCase()}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2 }}>
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};

export default Reports;
