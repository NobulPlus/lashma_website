import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga4'
import { HelmetProvider } from 'react-helmet-async'
import Preloader from './Components/Preloader/Preloader.jsx'

ReactGA.initialize("G-16Y7GXWY2D");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Boot preloader — renders immediately, auto-dismisses on document load */}
    <Preloader />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
