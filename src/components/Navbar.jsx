import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Check if link is active
  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="ConsultME Logo" className="logo-img" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Main Navigation Links */}
        <div className={`nav-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Mobile Menu Back Button */}
          <button
            className="mobile-back-button"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link
              to="/signup"
              className={`premium-button ${isActive('/signup') ? 'active' : ''}`}
            >
              <span className="top-key"></span>
              <span className="gradient-text">Sign Up</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </Link>
            <Link
              to="/login"
              className={`premium-button ${isActive('/login') ? 'active' : ''}`}
            >
              <span className="top-key"></span>
              <span className="gradient-text">Login</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar