import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/providers';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
);
