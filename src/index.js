import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css'; // If you're using any CSS styles
import App from './App';

// Create the root where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
