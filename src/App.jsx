import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <div id="navbar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/blue">Blue</Link> |{" "}
        <Link to="/red">Red</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}