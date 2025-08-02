import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">InternDash</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
