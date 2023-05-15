import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0085F7',
        },
        secondary: {
            main: 'rgba(191, 218, 255, 0.14)',
            contrastText: 'rgba(255, 255, 255, 0.6)',
        },
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.6)',
        },
    },
});

export default theme;
