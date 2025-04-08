import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard';
import { NewCase } from './pages/NewCase';
import { Profile } from './pages/Profile';
import { Confirmation } from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-case" element={<NewCase />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;