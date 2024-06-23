// components/Header.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
  return (
    <div className="container-fluid container-xl position-relative d-flex align-items-center fixed-top">
      <a href="/" className="logo d-flex align-items-center me-auto">
        <img src="/assets/img/logo_starwars.png" alt="Logo" />
        {/* Uncomment if using text logo: <h1 className="sitename">TheEvent</h1> */}
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">People<br /></a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a href="https://www.linkedin.com/in/muhammad-ariq-fakhrizal-28896972/" target='_blank' className="cta-btn d-none d-sm-block">
        <i className="bi bi-linkedin"></i> M. Ariq Fakhrizal
      </a>
    </div>
  );
};

export default Navbar;
