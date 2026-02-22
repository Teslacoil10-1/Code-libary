import React, { useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './pages/intro.jsx';
import SlugPage from './pages/codePreview/[slug].jsx';
import SplashCursor from '././components/splashCursor';

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-container">
            <div id="splash-canvas-container">
              <SplashCursor CAPTURE_RESOLUTION={2000} PRESSURE={0.5} CURL={6} COLOR_UPDATE_SPEED={2} />
            </div>
            <div className="bg-gradient-overlay" />
            <main className="hero-content">
              <div className="title">Fluid Design Redefined
              </div>
              <p className="subtitle">
                experience re-usable web elements <br />
                The intersection of graphics and modern aesthetics.
              </p>

              <div className="button-group">
                <button className="cta-button primary" onClick={() => navigate('/intro')}>
                  Explore Components
                </button>
              </div>

            </main>
          </div>
        }
      />

      <Route path="/intro" element={<Intro />} />
      <Route path="/preview/:slug" element={<SlugPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}