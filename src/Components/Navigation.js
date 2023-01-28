import React from 'react';
import './CSSmodules/navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <div className="nav-bar" data-testId="navID">
      <div className="logo">
        <h1 className="magicians">Bookstore CMS</h1>
      </div>
      <nav className="nav">
        <Link className="links" style={{ textDecoration: 'none' }} to="/">Books</Link>
        <Link className="links" style={{ textDecoration: 'none' }} to="/categories">Categories</Link>
      </nav>
    </div>
  </>
);

export default Navigation;
