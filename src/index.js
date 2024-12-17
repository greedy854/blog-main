import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css'; // If you're using any CSS styles
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker registration

// Create the root where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Register the service worker to enable offline functionality and PWA features
serviceWorkerRegistration.register(); // Registers the service worker for PWA functionality
