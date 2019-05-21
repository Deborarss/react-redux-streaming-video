import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header-container">
        <Link to="/" className="Header-brand">
          Streamy
        </Link>
        <ul className="Header-list">
          <li>
            <Link to="/">Todas Streams</Link>
          </li>
          <Link to="/">
            <GoogleAuth />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
