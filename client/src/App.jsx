import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';
import './App.css';

const AuthLayout = ({ children }) => (
  <div className="auth-container">
    {children}
  </div>
);

const AppLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/leaderboard" element={<AppLayout><Leaderboard /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;