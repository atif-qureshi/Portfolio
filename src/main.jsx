import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './views/Portfolio.jsx';
import './styles/index.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><Portfolio /></React.StrictMode>);
