


// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/Header.css"; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <img className="logo" src='https://static.vecteezy.com/system/resources/previews/007/202/593/original/leaf-icon-free-vector.jpg' alt='navbar'></img>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link className="nav-link" to="/">HOME</Link></li>
          <li><Link className="nav-link" to="/">BLOG</Link></li>
          <li><Link className="nav-link" to="/">SHOP</Link></li>
          <li><Link className="nav-link" to="/"><img className="nav-icon" src='https://cdn-icons-png.flaticon.com/128/3144/3144456.png' alt='cart'/>CART</Link></li>
          <li><Link className="nav-link" to="/">MY ACCOUNT</Link></li>
          <li><Link className="nav-link" to="/">ABOUT US</Link></li>
          <li><Link className="nav-link" to="/login"><img className="nav-icon" src='https://cdn-icons-png.flaticon.com/128/5264/5264565.png' alt="login"/>LOG IN</Link></li>
          <li><Link className="nav-link" to="/register"><img className="nav-icon" src='https://cdn-icons-png.flaticon.com/128/16206/16206813.png' alt='register'/>REGISTER</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
