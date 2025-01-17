import React from 'react';
import '../styles.css';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
    <img src={logo} alt="AltSprout Logo" className="header-logo" />
      <h1 className="header-title">AltSprout</h1>
      <h2 className="header-subtitle">Rooted in AI, planting the seeds of image accessibility</h2>
    </div>
  );
};

export default Header;
