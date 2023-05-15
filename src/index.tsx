import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import commonTheme from './theme/common';

import './18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={commonTheme}>
            <Suspense fallback={<div>Загрузка. . .</div>}>
                <App />
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>
);
