import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 col-md-4">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" loading="lazy" />
                <Link className="navbar-brand" to="/">
                  <i className="fas fa-heartbeat me-2"></i>LifeLinkHealthHub
                </Link>
              </Link>
            </div>
          </div>
          
          <div className="col-4 d-md-none text-end position-relative">
            <button 
              id="menu-toggle" 
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <div className={`col-md-8 mobile-menu ${isMenuOpen ? 'show' : ''}`}>
            <nav className="main-menu">
              <ul id="main-menu-list">
                <li>
                  <Link 
                    className={isActive('/') ? 'active' : ''} 
                    to="/"
                  >
                    <i className="fas fa-home me-2"></i>Home
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/firstAid') ? 'active' : ''} 
                    to="/firstAid"
                  >
                    <i className="fas fa-first-aid me-2"></i>First Aid
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/bloodGroups') ? 'active' : ''} 
                    to="/bloodGroups"
                  >
                    <i className="fas fa-tint me-2"></i>Blood Groups
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/free-Medicines') ? 'active' : ''} 
                    to="/free-Medicines"
                  >
                    <i className="fas fa-pills me-2"></i>Medicines
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/Doctors') ? 'active' : ''} 
                    to="/Doctors"
                  >
                    <i className="fas fa-user-md me-2"></i>Doctors
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/SymptomsChecker') ? 'active' : ''} 
                    to="/SymptomsChecker"
                  >
                    <i className="fas fa-stethoscope me-2"></i>Symptoms Checker
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/contact') ? 'active' : ''} 
                    to="/contact"
                  >
                    <i className="fas fa-envelope me-2"></i>Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    className={isActive('/welfare') ? 'active' : ''} 
                    to="/welfare"
                  >
                    <i className="fas fa-hands-helping me-2"></i>Welfare Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 