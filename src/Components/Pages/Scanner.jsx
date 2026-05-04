import React, { useState, useEffect, useRef } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    IconButton, 
    Container,
    Paper,
    useTheme,
    Fade,
    Alert,
    Snackbar,
    TextField,
    Grid,
    Divider,
    InputAdornment,
    MenuItem
} from '@mui/material';
import {
    QrCodeScanner as ScanIcon,
    FlashOn as FlashIcon,
    PhotoLibrary as GalleryIcon,
    QrCode as BarcodeIcon,
    CheckCircle as SuccessIcon,
    Person as PersonIcon,
    School as SchoolIcon,
    Class as ClassIcon,
    Comment as CommentIcon,
    AssignmentInd as RollIcon,
    Gavel as RuleIcon
} from '@mui/icons-material';
import { Html5Qrcode } from 'html5-qrcode';

// Moved outside to prevent focus loss on re-render
const FormInput = ({ label, value, name, icon, placeholder, multiline, select, children, isDark, theme, onChange, ...props }) => (
    <TextField
        fullWidth
        name={name}
        select={select}
        label={label}
        value={value}
        multiline={multiline}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
        slotProps={{
            label: {
                sx: {
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    px: 1,
                    '&.Mui-focused, &.MuiFormLabel-filled': {
                        color: theme.palette.primary.main,
                        bgcolor: isDark ? '#0f172a' : '#fff',
                        borderRadius: '4px',
                        zIndex: 1
                    }
                }
            },
            input: {
                endAdornment: select ? null : (
                    <InputAdornment position="end" sx={{ mr: 1, alignSelf: multiline ? 'flex-start' : 'center', mt: multiline ? 1 : 0 }}>
                        {icon}
                    </InputAdornment>
                ),
                sx: {
                    borderRadius: multiline ? '20px' : '30px',
                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#F9FAFB',
                    px: 2,
                    '& fieldset': { 
                        borderRadius: multiline ? '20px' : '30px', 
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    },
                    '&:hover fieldset': { borderColor: theme.palette.primary.main },
                    '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main, borderWidth: '2px' },
                    fontWeight: 500,
                    fontSize: '0.95rem'
                }
            }
        }}
        sx={{ mb: 2.5 }}
    >
        {children}
    </TextField>
);

const Scanner = () => {
    const theme = useTheme();
    const [scanning, setScanning] = useState(false);
    const [scannedResult, setScannedResult] = useState('');
    const [error, setError] = useState('');
    const [successOpen, setSuccessOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isManual, setIsManual] = useState(false);
    
    // Form States
    const [formData, setFormData] = useState({
        rollNo: '',
        studentName: '',
        branch: '',
        semester: '',
        reason: '',
        comments: ''
    });

    const html5QrCode = useRef(null);
    const isDark = theme.palette.mode === 'dark';

    useEffect(() => {
        return () => {
            if (html5QrCode.current && html5QrCode.current.isScanning) {
                html5QrCode.current.stop();
            }
        };
    }, []);

    const startScanner = async () => {
        setError('');
        setScannedResult('');
        setShowForm(false);
        setIsManual(false);
        try {
            const qrCodeId = "reader";
            html5QrCode.current = new Html5Qrcode(qrCodeId);
            setScanning(true);

            await html5QrCode.current.start(
                { facingMode: "environment" },
                {
                    fps: 10,
                    qrbox: { width: 250, height: 150 },
                },
                (decodedText) => {
                    handleSuccess(decodedText);
                },
                (errorMessage) => {}
            );
        } catch (err) {
            setError("Could not access camera. Please check permissions.");
            setScanning(false);
        }
    };

    const stopScanner = async () => {
        if (html5QrCode.current && html5QrCode.current.isScanning) {
            await html5QrCode.current.stop();
            setScanning(false);
        }
    };

    const handleSuccess = (result) => {
        setScannedResult(result);
        setFormData(prev => ({ ...prev, rollNo: result }));
        setShowForm(true);
        setIsManual(false);
        stopScanner();
    };

    const handleManualEntry = () => {
        setIsManual(true);
        setShowForm(true);
        stopScanner();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessOpen(true);
        // Reset states after brief delay
        setTimeout(() => {
            resetAll();
        }, 2000);
    };

    const resetAll = () => {
        setShowForm(false);
        setIsManual(false);
        setScannedResult('');
        setFormData({
            rollNo: '',
            studentName: '',
            branch: '',
            semester: '',
            reason: '',
            comments: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const reasons = ['Beard', 'ID Card', 'Uniform', 'Shoes', 'Mobile Usage'];

    return (
        <Container maxWidth="sm" sx={{ py: 2 }}>
            <Fade in={true}>
                <Box>
                    {/* Status Banner */}
                    <Paper 
                        elevation={0}
                        sx={{ 
                            mb: 3, 
                            p: 2, 
                            borderRadius: '24px', 
                            background: isDark 
                                ? `${theme.palette.primary.main}26` 
                                : `${theme.palette.primary.main}1A`,
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            border: '1px solid',
                            borderColor: isDark ? `${theme.palette.primary.main}33` : `${theme.palette.primary.main}1A`,
                            boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.2)' : `0 4px 16px ${theme.palette.primary.main}0D`,
                        }}
                    >
                        {showForm ? <RollIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} /> : <BarcodeIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />}
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
                                {showForm ? 'Registration Details' : 'Ready to Scan'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                {showForm ? 'Verify and complete the student info' : 'Position the barcode within the frame'}
                            </Typography>
                        </Box>
                    </Paper>

                    {!showForm ? (
                        <>
                            {/* Scanner View */}
                            <Box 
                                sx={{ 
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '16/10',
                                    maxHeight: '280px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    bgcolor: '#000',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                                    mb: 3
                                }}
                            >
                                <div id="reader" style={{ width: '100%', height: '100%' }}></div>

                                {scanning && (
                                    <>
                                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '250px', height: '150px', zIndex: 2 }}>
                                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: 25, height: 25, borderTop: '4px solid #fff', borderLeft: '4px solid #fff', borderRadius: '4px 0 0 0' }} />
                                            <Box sx={{ position: 'absolute', top: 0, right: 0, width: 25, height: 25, borderTop: '4px solid #fff', borderRight: '4px solid #fff', borderRadius: '0 4px 0 0' }} />
                                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 25, height: 25, borderBottom: '4px solid #fff', borderLeft: '4px solid #fff', borderRadius: '0 0 0 4px' }} />
                                            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 25, height: 25, borderBottom: '4px solid #fff', borderRight: '4px solid #fff', borderRadius: '0 0 4px 0' }} />
                                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', bgcolor: theme.palette.primary.main, boxShadow: `0 0 8px ${theme.palette.primary.main}`, animation: 'scan-anim 2s infinite ease-in-out', zIndex: 3 }} />
                                        </Box>

                                        <Box sx={{ position: 'absolute', top: 16, width: '100%', px: 2, display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
                                            <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.5)', color: '#fff' }}><FlashIcon /></IconButton>
                                            <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.5)', color: '#fff' }}><GalleryIcon /></IconButton>
                                        </Box>
                                    </>
                                )}

                                {error && (
                                    <Box sx={{ position: 'absolute', inset: 0, p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.8)', color: '#fff', textAlign: 'center' }}>
                                        <Typography variant="body2">{error}</Typography>
                                    </Box>
                                )}
                            </Box>

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                startIcon={<ScanIcon />}
                                onClick={scanning ? stopScanner : startScanner}
                                sx={{
                                    bgcolor: scanning ? '#FF5A5A' : theme.palette.primary.main,
                                    '&:hover': { bgcolor: scanning ? '#E54B4B' : theme.palette.primary.dark },
                                    borderRadius: '20px',
                                    py: 2,
                                    fontWeight: 800,
                                }}
                            >
                                {scanning ? 'STOP SCANNING' : 'SCAN'}
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={handleManualEntry}
                                sx={{ 
                                    mt: 2, 
                                    borderRadius: '20px', 
                                    py: 1.5, 
                                    fontWeight: 700,
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.dark,
                                        bgcolor: `${theme.palette.primary.main}0D`
                                    }
                                }}
                            >
                                MANUAL ENTRY
                            </Button>
                        </>
                    ) : (
                        <Fade in={showForm}>
                            <Box component="form" onSubmit={handleSubmit}>
                                <FormInput 
                                    label="Roll Number" 
                                    name="rollNo" 
                                    value={formData.rollNo} 
                                    icon={<RollIcon sx={{ color: theme.palette.primary.main }} />}
                                    disabled={!isManual}
                                    placeholder="Enter Roll Number"
                                    required
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                />
                                <FormInput 
                                    label="Student Name" 
                                    name="studentName" 
                                    value={formData.studentName} 
                                    icon={<PersonIcon sx={{ color: theme.palette.primary.main }} />}
                                    placeholder="Enter full name"
                                    required
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                />
                                <FormInput 
                                    label="Branch" 
                                    name="branch" 
                                    value={formData.branch} 
                                    icon={<SchoolIcon sx={{ color: theme.palette.primary.main }} />}
                                    placeholder="CSE, ECE..."
                                    required
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                />
                                <FormInput 
                                    label="Semester" 
                                    name="semester" 
                                    value={formData.semester} 
                                    icon={<ClassIcon sx={{ color: theme.palette.primary.main }} />}
                                    placeholder="3rd, 4th..."
                                    required
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                />

                                <FormInput 
                                    label="Reason" 
                                    name="reason" 
                                    value={formData.reason} 
                                    select
                                    required
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                >
                                    {reasons.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </FormInput>

                                <FormInput 
                                    label="Comments" 
                                    name="comments" 
                                    value={formData.comments} 
                                    icon={<CommentIcon sx={{ color: theme.palette.primary.main }} />}
                                    placeholder="Optional notes"
                                    multiline
                                    rows={2}
                                    isDark={isDark}
                                    theme={theme}
                                    onChange={handleInputChange}
                                />

                                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                                    <Button 
                                        fullWidth 
                                        variant="outlined" 
                                        onClick={resetAll}
                                        sx={{ borderRadius: '30px', py: 1.5, fontWeight: 700 }}
                                    >
                                        Rescan
                                    </Button>
                                    <Button 
                                        fullWidth 
                                        type="submit" 
                                        variant="contained"
                                        sx={{ borderRadius: '30px', py: 1.5, fontWeight: 700, bgcolor: theme.palette.primary.main }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Fade>
                    )}
                </Box>
            </Fade>

            <Snackbar open={successOpen} autoHideDuration={3000} onClose={() => setSuccessOpen(false)}>
                <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%', borderRadius: '12px' }}>
                    Attendance Recorded Successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Scanner;
