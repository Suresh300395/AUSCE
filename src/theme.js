import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => {
  const primaryMain = mode === 'light' ? '#0D233B' : '#BE9337';
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryMain,
        dark: mode === 'light' ? '#071526' : '#A07B2E',
      },
      ...(mode === 'light' ? {
        background: {
          default: '#FCFBFE',
          paper: '#ffffff',
        },
        text: {
          primary: '#1A1826',
          secondary: '#6E6C77',
        },
      } : {
        background: {
          default: '#0A0A0B',
          paper: '#161618',
        },
        text: {
          primary: '#F0F0F2',
          secondary: '#A1A1AA',
        },
      }),
    },
    typography: {
      fontFamily: '"Google Sans", "Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 800,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '50px',
            padding: '14px 16px',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '50px',
            backgroundColor: mode === 'light' ? '#ffffff' : '#1A1A1C',
            '& fieldset': {
              borderColor: mode === 'light' ? '#cfd4dc' : '#3F3F46',
              borderWidth: '1.5px',
              transition: 'border-color 0.2s',
            },
            '&:hover fieldset': {
              borderColor: primaryMain,
            },
            '&.Mui-focused fieldset': {
              borderColor: primaryMain,
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              boxShadow: mode === 'light' 
                ? `0 0 0 4px ${primaryMain}1A`
                : `0 0 0 4px ${primaryMain}33`,
            }
          }
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: primaryMain,
            fontWeight: 600,
            fontSize: '0.9rem',
            '&.Mui-focused': {
              color: primaryMain,
              fontWeight: 800,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      }
    },
  });
};

export default getTheme;
