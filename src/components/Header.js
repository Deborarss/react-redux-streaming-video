import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header-container">
        <ul className="Header-list">
          <li>
            <Link to="/">Streamy</Link>
          </li>
          <li>
            <Link to="/">Todas Streams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
